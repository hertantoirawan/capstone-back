import passport from 'passport';
import passportGithub from 'passport-github2';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export default function runPassportSetup() {
  const GitHubStrategy = passportGithub.Strategy;

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback',
  },
  ((accessToken, refreshToken, profile, done) => {
  // User.findOrCreate({ githubId: profile.id }, (err, user) => done(err, user));
    console.log(profile);
    done(null, profile);
  })));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}
