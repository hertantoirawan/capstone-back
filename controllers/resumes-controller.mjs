import { Op } from 'sequelize';

export default function initResumesController(db) {
  const getResume = async (req, res) => {
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

  const updateResume = async (req, res) => {

  };

  const createResume = async (req, res) => {

  };

  return {
    getResume,
    updateResume,
    createResume,
  };
}
