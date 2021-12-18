import { Request, Response } from "express";
import { UpdateCharacterService } from "./UpdateCharacterService";

class UpdateCharacterController {
  constructor(private updateCharacterService: UpdateCharacterService) {}

  handle(req: Request, res: Response): Response {
    const {name, id} = req.body
    const character = this.updateCharacterService.execute({id, name});
    return res.status(200).json(character).send();
  }
}

export { UpdateCharacterController }