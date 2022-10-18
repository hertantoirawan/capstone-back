export default function initTemplatesController(db) {
  const getTemplate = async (req, res) => {
    const { templateId } = req.params;

    try {
      const template = await db.Template.findOne({
        where: {
          id: templateId,
        },
      });
      console.log(template);

      res.send(template);
    } catch (err) {
      console.log(`Error retrieving template: ${err}`);
    }
  };

  const getTemplates = async (req, res) => {
    try {
      const templates = await db.Template.findAll();
      console.log(templates);

      res.send(templates);
    } catch (err) {
      console.log(`Error retrieving templates: ${err}`);
    }
  };

  return {
    getTemplate,
    getTemplates,
  };
}
