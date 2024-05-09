import { Router } from "express";
import {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
} from "../controllers/TutorControllers";

const router = Router();

router.get("/tutors", getTutors);
router.post("/tutors", createTutor);
router.put("/tutors/:id", updateTutor);
router.delete("/tutors/:id", deleteTutor);
