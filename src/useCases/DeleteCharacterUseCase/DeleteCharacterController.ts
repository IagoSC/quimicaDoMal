import { Request, Response } from "express";
import { DeleteCharacterService } from "./DeleteCharacterService";

class DeleteCharacterController {
  constructor(private deleteCharacterService: DeleteCharacterService){}

  handle(req: Request, res: Response): Response {
    const { id, name } = req.query
    this.deleteCharacterService.execute({id:id as string, name: name as string})
    return res.status(200).send("Character deleted successfully");
  }
}

export { DeleteCharacterController }