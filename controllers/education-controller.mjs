export default function initEducationController(db) {
  const getEducation = async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await db.Education.findAll({
        where: {
          userId,
        },
        order: [['end', 'DESC']],
      });
      console.log(user);

      res.send(user);
    } catch (err) {
      console.log(`Error retrieving user: ${err}`);
    }
  };

  const updateEducation = async (req, res) => {
    const { userId, educationId } = req.params;
    const {
      school, degree, start, end, description,
    } = req.body;

    try {
      const education = await db.Education.findOne({
        where: {
          id: educationId,
        },
      });
      console.log('education', education);

      if (education) {
        education.school = school;
        education.degree = degree;
        education.start = start;
        education.end = end;
        education.description = description;

        await education.save();

        res.send(education);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createEducation = async (req, res) => {
    const { userId } = req.params;
    const {
      school, degree, start, end, description,
    } = req.body;

    try {
      const education = await db.Education.create({
        userId,
        school,
        degree,
        start,
        end,
        description,
      });
      console.log('education', education);

      res.send(education);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getEducation,
    updateEducation,
    createEducation,
  };
}
