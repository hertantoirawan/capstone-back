// import jsSHA from 'jssha';
import { Op } from 'sequelize';

// const SALT = process.env.SALT_PASSWORD;

// const getHashSalted = (input) => {
//   // create new SHA object
//   const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
//   // create an unhashed cookie string based on user ID and salt
//   const unhashedString = `${input}-${SALT}`;

//   // generate a hashed cookie string using SHA object
//   shaObj.update(unhashedString);

//   return shaObj.getHash('HEX');
// };

export default function initUsersController(db) {
  const login = async (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: 'successful',
        user: req.user,
      //   cookies: req.cookies
      });
    }
  };

  const logout = async (req, res) => {
    req.logout();
    res.redirect('/login');
  };

  const getUser = async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await db.User.findOne({
        where: {
          id: userId,
        },
      });
      console.log(user);

      res.send(user);
    } catch (err) {
      console.log(`Error retrieving user: ${err}`);
    }
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const {
      name, profile, website, email, phone,
    } = req.body;

    try {
      const user = await db.User.findOne({
        where: {
          id: userId,
        },
      });
      console.log('user', user);

      if (user) {
        user.name = name;
        user.profile = profile;
        user.website = website;
        user.email = email;
        user.phone = phone;

        await user.save();

        res.send({
          email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    logout,
    getUser,
    updateUser,
  };
}
