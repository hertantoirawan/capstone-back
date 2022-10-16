export default function initResumesController(db) {
  const getResume = async (req, res) => {
    const { userId } = req.params;

    try {
      const resume = await db.Resume.findAll({
        include: {
          model: db.Tag,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
        where: {
          userId,
        },
      });
      console.log(resume);

      res.send(resume);
    } catch (err) {
      console.log(`Error retrieving resume: ${err}`);
    }
  };

  const updateResume = async (req, res) => {
    const { userId, resumeId } = req.params;
    const {
      name, description,
    } = req.body;

    try {
      const resume = await db.Resume.findOne({
        where: {
          id: resumeId,
        },
      });
      console.log('resume', resume);

      if (resume) {
        resume.name = name;
        resume.description = description;

        await resume.save();

        res.send(resume);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createResume = async (req, res) => {
    const { userId } = req.params;
    const {
      templateId, name, description, html,
    } = req.body;

    try {
      const resume = await db.Resume.create({
        userId,
        templateId,
        name,
        description,
        htmlContent: html,
      });
      console.log('resume', resume);

      res.send(resume);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getResume,
    updateResume,
    createResume,
  };
}
