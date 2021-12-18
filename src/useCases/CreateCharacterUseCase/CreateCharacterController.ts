import { CreateCharactersService } from "./CreateCharactersService";
import {NextFunction, Request, Response } from "express"


class CreateCharacterController {
  constructor(private createCharacterService: CreateCharactersService){}

  async handle(req: Request, res: Response, next: NextFunction):Promise<Response> {
    const {name} = req.body
    try{
      const character =  await this.createCharacterService.execute({name}, next)
      return res.status(200).json(character).send();
    }catch(e){
      next(e)
    } 
  }
}

export { CreateCharacterController }