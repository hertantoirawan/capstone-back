import { resolve } from 'path';
import passport from 'passport';
import db from './models/index.mjs';
import initUsersController from './controllers/users-controller.mjs';
import initWorkExperienceController from './controllers/work-experience-controller.mjs';
import initEducationController from './controllers/education-controller.mjs';
import initResumesController from './controllers/resumes-controller.mjs';
import initApplicationsController from './controllers/applications-controller..mjs';
import initTemplatesController from './controllers/templates-controller.mjs';
import initAuthenticationController from './controllers/auth-controller.mjs';

export default function bindRoutes(app) {
  const usersController = initUsersController(db);
  const resumesController = initResumesController(db);
  const workController = initWorkExperienceController(db);
  const educationController = initEducationController(db);
  const applicationsController = initApplicationsController(db);
  const templatesController = initTemplatesController(db);
  const authController = initAuthenticationController(db);

  app.get('/login', usersController.login);
  app.get('/logout', usersController.logout);

  app.get('/auth/github',
    passport.authenticate('github', {
      scope: ['user:email'],
    }));

  app.get('/auth/github/callback',
    passport.authenticate('github', {
      // successRedirect: '/auth/github/redirect',
      failureRedirect: '/auth/github',
    }), (req, res) => {
      console.log('in auth callback');

      const { accessToken } = req.user;
      const { id, name, githubUsername } = req.user[0];

      // TODO: is there a better way to pass params besides on query string?
      res.redirect(`${process.env.APP_LOGIN_URL}?userId=${id}&name=${name}&username=${githubUsername}&accessToken=${accessToken}`);
    });

  app.get('/auth/github/redirect', authController.redirect);

  app.get('/user/:userId', usersController.getUser);
  app.post('/user/:userId', usersController.updateUser);

  app.get('/user/:userId/resume', resumesController.getResume);
  app.post('/user/:userId/resume/:resumeId', resumesController.updateResume);
  app.post('/user/:userId/resume', resumesController.createResume);

  app.get('/user/:userId/education', educationController.getEducation);
  app.post('/user/:userId/education/:educationId', educationController.updateEducation);
  app.post('/user/:userId/education', educationController.createEducation);

  app.get('/user/:userId/work', workController.getWorkExperience);
  app.post('/user/:userId/work/:workId', workController.updateWorkExperience);
  app.post('/user/:userId/work', workController.createWorkExperience);

  app.get('/user/:userId/application', applicationsController.getApplication);
  app.post('/user/:userId/work/:applicationId', applicationsController.updateApplication);
  app.post('/user/:userId/application', applicationsController.createApplication);

  app.get('/template/:templateId', templatesController.getTemplate);
  app.get('/template', templatesController.getTemplates);

  app.get('*', (request, response) => {
    console.log(request.user);
    response.sendFile(resolve('dist', 'main.html'));
  });
}
