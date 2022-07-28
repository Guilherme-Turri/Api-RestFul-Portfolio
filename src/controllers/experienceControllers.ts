import { Request, Response } from 'express';
import { experienceModel } from '../models/Experience';

export async function createExperience(req: Request, res: Response) {
  try {
    const data = req.body;
    const experience = await experienceModel.create(data);
    return res.status(201).json(experience); //201 something created - return json to frontend.
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}
export async function findExperienceById(req: Request, res: Response) {
  try {
    const data = req.params.id;

    const experience = await experienceModel.findById(data);

    if (!experience) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    return res.status(200).json(experience);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function getAllExperiences(req: Request, res: Response) {
  try {
    const experience = await experienceModel.find();
    return res.status(200).json(experience);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function removeExperience(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const experience = await experienceModel.findById(id);
    if (!experience) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await experience.delete();
    return res
      .status(200)
      .json({ msg: 'Experience has been deleted sucessfully' });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}
export async function updateExperience(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const experience = await experienceModel.findById(id);
    if (!experience) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await experienceModel.updateOne({ _id: id }, data);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}
