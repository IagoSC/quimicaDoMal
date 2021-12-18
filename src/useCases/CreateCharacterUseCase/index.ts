import { CreateCharacterController } from "./CreateCharacterController";
import { CharactersRepository } from "../../respositories/CharactersRepository";
import { CreateCharactersService } from "./CreateCharactersService";

const charactersRepository = CharactersRepository.getInstance();
const createCharacterService = new CreateCharactersService(charactersRepository);
const createCharacterController = new CreateCharacterController(createCharacterService);

export { createCharacterController }