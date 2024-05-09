import { getRepository } from "typeorm";
import { Tutor } from "../entities/Tutor";

export class TutorService {
  private tutorRepository = getRepository(Tutor);

  async getTutors(): Promise<Tutor[]> {
    return await this.tutorRepository.find({ relations: ["pets"] });
  }

  async createTutor(data: Tutor): Promise<Tutor> {
    return await this.tutorRepository.save(data);
  }

  async updateTutor(id: number, data: Tutor): Promise<void> {
    await this.tutorRepository.update(id, data);
  }

  async deleteTutor(id: number): Promise<void> {
    await this.tutorRepository.delete(id);
  }
}
