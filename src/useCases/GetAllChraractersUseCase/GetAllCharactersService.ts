import { Character } from "../../models/Character";
import { CharactersRepository } from "../../respositories/CharactersRepository";

class GetAllCharactersService {
  constructor(private charactersRepository: CharactersRepository) {}
  
  execute(): Character[]{
    const charactersList = this.charactersRepository.list();
    return charactersList.sort((charA, charB) => charA.name.localeCompare(charB.name))
  }
}

export { GetAllCharactersService }