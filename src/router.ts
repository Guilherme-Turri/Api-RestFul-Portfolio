import { Router, Request, Response } from 'express';
import {
  createExperience,
  findExperienceById,
  getAllExperiences,
  removeExperience,
  updateExperience,
} from './controllers/experienceControllers';

import {
  createClass,
  findClassById,
  getAllClasses,
  removeClass,
  updateClass,
} from './controllers/classControllers';

import {
  createUser,
  getAllUsers,
  findUserById,
  removeUser,
  updateUser,
} from './controllers/userControllers';

import {
  createProject,
  getAllProjects,
  findProjectById,
  removeProject,
  updateProject,
} from './controllers/projectControllers';
//import { experienceCreateValidator } from './middleware/experienceValidation';
//import { validate } from './middleware/handleValidation';

const router = Router();
export default router
  .get('/', (req: Request, res: Response) => {
    res.status(200).send('API IS WORKING - TURRI');
  })
  .post('/experience', createExperience) //experienceCreateValidator(), validate,
  .get('/experience/:id', findExperienceById)
  .get('/experience/', getAllExperiences)
  .delete('/experience/:id', removeExperience)
  .patch('/experience/:id', updateExperience)
  .post('/class', createClass)
  .get('/class/:id', findClassById)
  .get('/class/', getAllClasses)
  .delete('/class/:id', removeClass)
  .patch('/class/:id', updateClass)
  .post('/user', createUser)
  .get('/user/:id', findUserById)
  .get('/user/', getAllUsers)
  .delete('/user/:id', removeUser)
  .patch('/user/:id', updateUser)
  .post('/projects', createProject)
  .get('/projects/:id', findProjectById)
  .get('/projects', getAllProjects)
  .delete('/projects/:id', removeProject)
  .patch('/projects/:id', updateProject);
