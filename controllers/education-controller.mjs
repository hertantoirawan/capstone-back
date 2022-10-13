import { Op } from 'sequelize';

export default function initEducationController(db) {
  const getEducation = async (req, res) => {
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

  const updateEducation = async (req, res) => {

  };

  const createEducation = async (req, res) => {

  };

  return {
    getEducation,
    updateEducation,
    createEducation,
  };
}
