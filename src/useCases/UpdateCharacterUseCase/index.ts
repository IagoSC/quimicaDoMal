import { CharactersRepository } from "../../respositories/CharactersRepository";
import { UpdateCharacterController } from "./UpdateCharacterController";
import { UpdateCharacterService } from "./UpdateCharacterService";

const charactersRepository = CharactersRepository.getInstance()
const updateCharacterService = new UpdateCharacterService(charactersRepository);
const updateCharacterController = new UpdateCharacterController(updateCharacterService); 

export { updateCharacterController }
