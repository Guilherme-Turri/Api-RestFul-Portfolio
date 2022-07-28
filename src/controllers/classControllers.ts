import { Request, Response } from 'express';
import { classModel } from '../models/Class';

export async function createClass(req: Request, res: Response) {
  try {
    const data = req.body;
    const classDone = await classModel.create(data);
    return res.status(201).json(classDone); //201 something created - return json to frontend.
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function findClassById(req: Request, res: Response) {
  try {
    const data = req.params.id;
    const classDone = await classModel.findById(data);

    if (!classDone) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    return res.status(200).json(classDone);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}
export async function getAllClasses(req: Request, res: Response) {
  try {
    const classDone = await classModel.find();
    return res.status(200).json(classDone);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function removeClass(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const classDone = await classModel.findById(id);
    if (!classDone) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await classDone.delete();
    return res.status(200).json({ msg: 'Class has been deleted sucessfully' });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}

export async function updateClass(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const classDone = await classModel.findById(id);
    if (!classDone) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await classModel.updateOne({ _id: id }, data);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}
