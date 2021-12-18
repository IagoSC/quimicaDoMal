import { AppError } from "../../AppError";
import { Character } from "../../models/Character";
import { CharactersRepository } from "../../respositories/CharactersRepository";

interface IUpdateCharacterDTO {
  name: string,
  id: string
}

class UpdateCharacterService {
  constructor(private charactersRepository: CharactersRepository){}

  execute({id, name}: IUpdateCharacterDTO): Character {
    const character = this.charactersRepository.findAndUpdate(id,{name})

    if(!character) throw new AppError("User not found", 404);
        
    return (character)
  }
}

export { UpdateCharacterService }