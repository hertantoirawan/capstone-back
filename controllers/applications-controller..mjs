export default function initApplicationsController(db) {
  const getApplication = async (req, res) => {
    const { userId } = req.params;

    try {
      const application = await db.Application.findAll({
        where: {
          userId,
        },
        order: [['date', 'DESC']],
      });
      console.log(application);

      res.send(application);
    } catch (err) {
      console.log(`Error retrieving application: ${err}`);
    }
  };

  const updateApplication = async (req, res) => {
    const { userId, applicationId } = req.params;
    const {
      role, company, date,
    } = req.body;

    try {
      const application = await db.Application.findOne({
        where: {
          id: applicationId,
        },
      });
      console.log('application', application);

      if (application) {
        application.role = role;
        application.company = company;
        application.date = date;

        await application.save();

        res.send(application);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createApplication = async (req, res) => {
    const { userId } = req.params;
    const {
      role, company, date, resumeId,
    } = req.body;

    try {
      const application = await db.Application.create({
        userId,
        role,
        company,
        date,
        resumeId,
      });
      console.log('application', application);

      res.send(application);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getApplication,
    updateApplication,
    createApplication,
  };
}
