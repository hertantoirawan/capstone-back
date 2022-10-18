const insertResumeTags = async (db, resumeId, newTag) => {
  try {
    let tag = await db.Tag.findOne({
      where: {
        name: newTag.name,
      },
    });

    if (!tag) {
      tag = await db.Tag.create(newTag);
    }

    await db.ResumeTag.create({
      resumeId,
      tagId: tag.id,
    });
  } catch (err) {
    console.log(`error creating tag ${err}`);
  }
};

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
      templateId, name, description, htmlContent, tags,
    } = req.body;

    console.log(req.body);

    try {
      const resume = await db.Resume.create({
        userId,
        templateId,
        name,
        description,
        htmlContent,
      });
      console.log('resume', resume);

      tags.map((tag) => insertResumeTags(db, resume.id, tag));

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
