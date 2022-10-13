import { Op } from 'sequelize';

export default function initWorkExperienceController(db) {
  const getWorkExperience = async (req, res) => {
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

  const updateWorkExperience = async (req, res) => {

  };

  const createWorkExperience = async (req, res) => {

  };

  return {
    getWorkExperience,
    updateWorkExperience,
    createWorkExperience,
  };
}
