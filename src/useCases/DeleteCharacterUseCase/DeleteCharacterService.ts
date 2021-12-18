import { AppError } from "../../AppError";
import { Character } from "../../models/Character";
import { CharactersRepository } from "../../respositories/CharactersRepository";

interface IDeleteCharacterDTO {
  id?: string,
  name?: string
}

class DeleteCharacterService {
  constructor(private charactersRepository: CharactersRepository){}

  execute({id, name}: IDeleteCharacterDTO): void {
    if(!id) {
      const character = this.charactersRepository.findByName(name)
      if(!character){
        throw new AppError("User name not found", 404);
      }
      id = character.id  
    }
    this.charactersRepository.delete(id)
  }
}

export { DeleteCharacterService }