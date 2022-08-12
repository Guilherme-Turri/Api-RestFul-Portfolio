import { Request, Response } from 'express';
import { adminModel } from '../models/Admin';

export async function createAdmin(req: Request, res: Response) {
  try {
    const data = req.body;
    const adminDone = await adminModel.create(data);
    return res.status(201).json(adminDone); //201 something created - return json to frontend.
  } catch (error: any) {
    console.log(`Something is wrong ${error.message}`);
  }
}

export async function checkAdmin(req: Request, res: Response) {
  const admin = await adminModel.findOne({
    name: req.body.name,
    password: req.body.password,
  });

  if (admin) {
    return res.json({ status: 'ok', admin: true });
  } else {
    return res.json({ status: 'error', admin: false });
  }
}
