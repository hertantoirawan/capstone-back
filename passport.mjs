import passport from 'passport';
import passportGithub from 'passport-github2';
import dotenv from 'dotenv';
import db from './models/index.mjs';

dotenv.config({ path: './.env' });

export default function runPassportSetup() {
  const GitHubStrategy = passportGithub.Strategy;

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.APP_CALLBACK_URL,
  },
  (async (accessToken, refreshToken, profile, done) => {
    // create or find user
    const user = await db.User.findOrCreate({
      where: { githubUsername: profile.username },
      defaults: {
        name: profile.displayName,
        email: profile.email,
      },
    });

    // save access token
    await db.OAuthToken.create({
      userId: user.id,
      accessToken,
    });

    user.accessToken = accessToken;

    done(null, user);
  })));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (user, done) => {
    done(null, user);

    // try {
    //   const user = await db.User.findOne({ where: { linkedinId: id } });
    //   done(null, user);
    // } catch (err) {
    //   done(err);
    // }
  });
}
