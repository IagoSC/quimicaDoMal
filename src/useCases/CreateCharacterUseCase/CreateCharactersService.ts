import { AppError } from "../../AppError";
import { CharactersRepository } from "../../respositories/CharactersRepository";

interface IRequest {
  name: string;
}

class CreateCharactersService {
  constructor(private charactersRepository: CharactersRepository){}

  execute({name}: IRequest) {
    const characterAlreadyExists = this.charactersRepository.findByName(name);
    
    if(characterAlreadyExists){
      throw new AppError("Character already exists", 409); //TODO
    }

    const character = this.charactersRepository.create(name);

    return character;
  }
}

export { CreateCharactersService }