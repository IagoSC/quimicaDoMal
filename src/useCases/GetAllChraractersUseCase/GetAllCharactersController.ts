import { Request, Response } from "express";
import { GetAllCharactersService } from "./GetAllCharactersService";

class GetAllCharactersController {
  constructor(private getAllCharactersService: GetAllCharactersService){}
  
  handle(req: Request, res: Response): Response {
    const characters = this.getAllCharactersService.execute()  
    return res.status(200).json(characters).send();
  }
}

export { GetAllCharactersController }