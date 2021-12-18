import { CreateCharactersService } from "./CreateCharactersService";
import {Request, Response } from "express"


class CreateCharacterController {
  constructor(private createCharacterService: CreateCharactersService){}

  handle(req: Request, res: Response):Response {
    const {name} = req.body
    const character = this.createCharacterService.execute({name})
    return res.status(200).json(character).send();
  }
}

export { CreateCharacterController }