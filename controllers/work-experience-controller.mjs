export default function initWorkExperienceController(db) {
  const getWorkExperience = async (req, res) => {
    const { userId } = req.params;

    try {
      const work = await db.WorkExperience.findAll({
        where: {
          userId,
        },
        order: [['start', 'DESC']],
      });
      console.log(work);

      res.send(work);
    } catch (err) {
      console.log(`Error retrieving work: ${err}`);
    }
  };

  const updateWorkExperience = async (req, res) => {
    const { userId, workId } = req.params;
    const {
      role, company, start, end, contribution,
    } = req.body;

    try {
      const work = await db.WorkExperience.findOne({
        where: {
          id: workId,
        },
      });
      console.log('work experience', work);

      if (work) {
        work.role = role;
        work.company = company;
        work.start = start;
        work.end = end;
        work.contribution = contribution;

        await work.save();

        res.send(work);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createWorkExperience = async (req, res) => {
    const { userId } = req.params;
    const {
      role, company, start, end, contribution,
    } = req.body;

    try {
      const work = await db.WorkExperience.create({
        userId,
        role,
        company,
        start,
        end,
        contribution,

      });
      console.log('work experience', work);

      res.send(work);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getWorkExperience,
    updateWorkExperience,
    createWorkExperience,
  };
}
