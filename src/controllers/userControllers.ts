import { Request, Response } from 'express';
import { userModel } from '../models/User';

export async function createUser(req: Request, res: Response) {
  try {
    const data = req.body;
    const user = await userModel.create(data);
    return res.status(201).json(user); //201 something created - return json to frontend.
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function findUserById(req: Request, res: Response) {
  try {
    const data = req.params.id;

    const user = await userModel.findById(data);

    if (!user) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    return res.status(200).json(user);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const user = await userModel.find();
    return res.status(200).json(user);
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function removeUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await user.delete();
    return res.status(200).json({ msg: 'User has been deleted sucessfully' });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'notFound or dontExist' });
    }

    await userModel.updateOne({ _id: id }, data);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
    return res.status(404).json({ error: 'notFound or dontExist' });
  }
}
