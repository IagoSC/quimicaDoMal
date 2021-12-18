import { NextFunction } from "express";
import { AppError } from "../../AppError";
import { getAllEpisodes } from "../../externalServices/BreakingBadApi";
import { CharactersRepository } from "../../respositories/CharactersRepository";

interface IRequest {
  name: string;
}

class CreateCharactersService {
  constructor(private charactersRepository: CharactersRepository){}

  async getCharacterEpisodes(name: string) {
    const data = await getAllEpisodes(name);
    const episodes = data.reduce( (arr:any, episode:any) => episode.characters.includes(name) ? [...arr,episode] : [...arr] ,[])
    return episodes
  }

  async execute({name}: IRequest, next: NextFunction) {
    const characterAlreadyExists = this.charactersRepository.findByName(name);
    try{
      if(characterAlreadyExists){
        throw new AppError("Character already exists", 409);
      }
      const episodes = await this.getCharacterEpisodes(name)
      const character = this.charactersRepository.create({name, episodes});
      return character;
    } catch(e){
      next(e)
    }
  }
}

export { CreateCharactersService }