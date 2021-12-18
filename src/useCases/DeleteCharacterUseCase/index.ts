import { CharactersRepository } from "../../respositories/CharactersRepository";
import { DeleteCharacterController } from "./DeleteCharacterController";
import { DeleteCharacterService } from "./DeleteCharacterService";

const charactersRepository = CharactersRepository.getInstance();
const deleteCharacterService = new DeleteCharacterService(charactersRepository);
const deleteCharacterController = new DeleteCharacterController(deleteCharacterService);

export { deleteCharacterController }