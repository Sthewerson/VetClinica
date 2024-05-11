import { Request, Response } from "express";
import { TutorService } from "../services/TutorServices";
import { Tutor } from "../entities/Tutor";

const tutorService = new TutorService();

export async function getTutors(req: Request, res: Response) {
  try {
    const tutors = await tutorService.getTutors();
    return res.status(200).json(tutors);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function createTutor(req: Request, res: Response) {
  try {
    const { name, email, phone, dateOfBirth, zipCode } = req.body as Tutor;
    const newTutor = await tutorService.createTutor(
      name,
      email,
      phone,
      dateOfBirth,
      zipCode
    );
    return res.status(201).json(newTutor);
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export async function updateTutor(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const { name, email, phone, dateOfBirth, zipCode } = req.body;
    await tutorService.updateTutor(
      id,
      name,
      email,
      phone,
      dateOfBirth,
      zipCode
    );
    return res.status(200).end();
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}

export async function deleteTutor(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await tutorService.deleteTutor(id);
    return res.status(200).end();
  } catch (error) {
    return res.status(400).json({ message: "Bad request" });
  }
}
