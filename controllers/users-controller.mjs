import jsSHA from 'jssha';
import { Op } from 'sequelize';

const SALT = process.env.SALT_PASSWORD;

const getHashSalted = (input) => {
  // create new SHA object
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  // create an unhashed cookie string based on user ID and salt
  const unhashedString = `${input}-${SALT}`;

  // generate a hashed cookie string using SHA object
  shaObj.update(unhashedString);

  return shaObj.getHash('HEX');
};

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
    const { user } = req.body;
    const input = user.toLowerCase();
    console.log(input);

    try {
      const users = await db.User.findAll({
        where: {
          email: {
            [Op.like]: `${input}%`,
          },
        },
      });
      console.log(users);

      res.send(users);
    } catch (err) {
      console.log(`Error retrieving users: ${err}`);
    }
  };

  const updateUser = async (req, res) => {

  };

  return {
    login,
    logout,
    getUser,
    updateUser,
  };
}
