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
