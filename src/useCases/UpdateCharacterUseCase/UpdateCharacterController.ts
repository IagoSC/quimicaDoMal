import { Request, Response } from "express";
import { UpdateCharacterService } from "./UpdateCharacterService";

class UpdateCharacterController {
  constructor(private updateCharacterService: UpdateCharacterService) {}

  handle(req: Request, res: Response): Response {
    const {name} = req.body
    const {id} = req.query
    const character = this.updateCharacterService.execute({id:id as string, name});
    return res.status(200).json(character).send();
  }
}

export { UpdateCharacterController }