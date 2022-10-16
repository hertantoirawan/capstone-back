import { resolve } from 'path';
import passport from 'passport';
import db from './models/index.mjs';
import initUsersController from './controllers/users-controller.mjs';
import initWorkExperienceController from './controllers/work-experience-controller.mjs';
import initEducationController from './controllers/education-controller.mjs';
import initResumesController from './controllers/resumes-controller.mjs';

export default function bindRoutes(app) {
  const usersController = initUsersController(db);
  const resumesController = initResumesController(db);
  const workController = initWorkExperienceController(db);
  const educationController = initEducationController(db);

  app.get('/login', usersController.login);
  app.get('/logout', usersController.logout);

  app.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
    // Successful authentication, redirect home.
      res.redirect('/');
    });

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

  app.get('*', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
