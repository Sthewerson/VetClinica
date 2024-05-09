import { Request, Response } from "express";
import { TutorService } from "../services/TutorServices";
import { Tutor } from "../entities/Tutor";

const tutorService = new TutorService();

export async function getTutors(req: Request, res: Response) {
  try {
    const tutors = await tutorService.getTutors();
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createTutor(req: Request, res: Response) {
  try {
    const tutor = req.body as Tutor;
    const newTutor = await tutorService.createTutor(tutor);
    res.status(200).json(newTutor);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}

export async function updateTutor(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const tutor = req.body as Tutor;
    await tutorService.updateTutor(id, tutor);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}

export async function deleteTutor(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await tutorService.deleteTutor(id);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}
