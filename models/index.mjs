import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';
import initEducationModel from './education.mjs';
import initWorkExperienceModel from './work-experience.mjs';
import initTemplateModel from './template.mjs';
import initResumeModel from './resume.mjs';
import initTagModel from './tag.mjs';
import initResumeTagModel from './resume_tag.mjs';
import initApplicationModel from './application.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Education = initEducationModel(sequelize, Sequelize.DataTypes);
db.WorkExperience = initWorkExperienceModel(sequelize, Sequelize.DataTypes);
db.Template = initTemplateModel(sequelize, Sequelize.DataTypes);
db.Resume = initResumeModel(sequelize, Sequelize.DataTypes);
db.Tag = initTagModel(sequelize, Sequelize.DataTypes);
db.ResumeTag = initResumeTagModel(sequelize, Sequelize.DataTypes);
db.Application = initApplicationModel(sequelize, Sequelize.DataTypes);

db.Education.belongsTo(db.User);
db.User.hasMany(db.Education);

db.WorkExperience.belongsTo(db.User);
db.User.hasMany(db.WorkExperience);

db.Resume.belongsTo(db.User);
db.User.hasMany(db.Resume);

db.Resume.belongsTo(db.Template);
db.Template.hasMany(db.Resume);

db.Resume.belongsToMany(db.Tag, { through: db.ResumeTag });
db.Tag.belongsToMany(db.Resume, { through: db.ResumeTag });

db.Application.belongsTo(db.Resume);
db.Resume.hasMany(db.Application);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
