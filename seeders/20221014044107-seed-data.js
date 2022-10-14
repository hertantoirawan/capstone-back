module.exports = {
  up: async (queryInterface) => {
    const userData = [
      {
        name: 'Hertanto Irawan',
        github_username: 'hertantoirawan',
        profile: 'Software engineer with 10+ years of experience in Asia and the US.',
        website: 'linkedin.com/in/hertanto',
        email: 'hertanto@gmail.com.',
        phone: '+628123456789',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [userHertanto] = await queryInterface.bulkInsert('users', userData, {
      returning: true,
    });

    const educationData = [
      {
        user_id: userHertanto.id,
        school: 'Foothill Junior College',
        degree: 'Associate Degree (Computer Science)',
        start: null,
        end: new Date(2010, 1, 1),
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        school: 'University of California, San Diego',
        degree: 'Bachelor of Science (Computer Science)',
        start: null,
        end: new Date(2012, 1, 1),
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        school: 'Rocket Academy',
        degree: 'Software Engineering Bootcamp',
        start: null,
        end: new Date(2022, 1, 1),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('education', educationData);

    const workExperienceData = [
      {
        user_id: userHertanto.id,
        role: 'Software Engineer',
        company: 'Google',
        start: new Date(2012, 1, 1),
        end: new Date(2017, 12, 31),
        contribution: 'Implemented google search',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        role: 'Software Engineer',
        company: 'Facebook',
        start: new Date(2018, 1, 1),
        end: null,
        contribution: 'Implemented Facebook Messenger',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('work_experience', workExperienceData);

    const templateData = [
      {
        name: 'General',
        html_content: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [resumeTemplateOne] = await queryInterface.bulkInsert('templates', templateData, {
      returning: true,
    });

    const resumeData = [
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Frontend Engineer',
        description:
          'Resume for software engineering roles that focus on frontend.',
        html_content: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Backend Engineer',
        description:
          'Resume for software engineering roles that focus on backend.',
        html_content: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Full Stack Developer',
        description:
          'Resume for full stack software engineering roles.',
        html_content: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Tech Lead',
        description:
          'Resume for team leading roles',
        html_content: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [frontendResumeHertanto, backendResumeHertanto, fullstackResumeHertanto, techleadResumeHertanto] = await queryInterface.bulkInsert('resume', resumeData, {
      returning: true,
    });

    const tagsData = [
      { name: 'engineer', created_at: new Date(), updated_at: new Date() },
      { name: 'senior', created_at: new Date(), updated_at: new Date() },
      { name: 'junior', created_at: new Date(), updated_at: new Date() },
      { name: 'frontend', created_at: new Date(), updated_at: new Date() },
      { name: 'backend', created_at: new Date(), updated_at: new Date() },
      { name: 'project', created_at: new Date(), updated_at: new Date() },
      { name: 'lead', created_at: new Date(), updated_at: new Date() },
      { name: 'agile', created_at: new Date(), updated_at: new Date() },
    ];

    const [engineerTag, seniorTag, juniorTag, frontendTag, backendTag, projectTag, leadTag, agileTag] = await queryInterface.bulkInsert('tags', tagsData, {
      returning: true,
    });

    const resumeTagsData = [
      {
        resume_id: frontendResumeHertanto.id,
        tag_id: engineerTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: frontendResumeHertanto.id,
        tag_id: seniorTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: frontendResumeHertanto.id,
        tag_id: frontendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: backendResumeHertanto.id,
        tag_id: engineerTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: backendResumeHertanto.id,
        tag_id: juniorTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: backendResumeHertanto.id,
        tag_id: backendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: fullstackResumeHertanto.id,
        tag_id: backendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: fullstackResumeHertanto.id,
        tag_id: frontendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: techleadResumeHertanto.id,
        tag_id: projectTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: techleadResumeHertanto.id,
        tag_id: leadTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: techleadResumeHertanto.id,
        tag_id: agileTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('resume_tags', resumeTagsData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('resume_tags', null, {});
    await queryInterface.bulkDelete('tags', null, {});
    await queryInterface.bulkDelete('resume', null, {});
    await queryInterface.bulkDelete('templates', null, {});
    await queryInterface.bulkDelete('work_experience', null, {});
    await queryInterface.bulkDelete('education', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
