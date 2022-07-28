import { Request, Response } from 'express';
import { projectModel } from '../models/Project';

export async function createProject(req: Request, res: Response) {
  try {
    const data = req.body;
    const project = await projectModel.create(data);
    return res.status(201).json(project); //201 something created - return json to frontend.
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function findProjectById(req: Request, res: Response) {
  try {
    const data = req.params.id;
    const project = await projectModel.findById(data);

    if (!project) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    return res.status(200).json(project);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}
export async function getAllProjects(req: Request, res: Response) {
  try {
    const project = await projectModel.find();
    return res.status(200).json(project);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function removeProject(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await project.delete();
    return res
      .status(200)
      .json({ msg: 'Project has been deleted sucessfully' });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}

export async function updateProject(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await projectModel.updateOne({ _id: id }, data);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}
