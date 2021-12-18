import { CharactersRepository } from "../../respositories/CharactersRepository";
import { GetAllCharactersController } from "./GetAllCharactersController";
import { GetAllCharactersService } from "./GetAllCharactersService";

const charactersRepository = CharactersRepository.getInstance();
const getAllCharactersService = new GetAllCharactersService(charactersRepository)
const getAllCharactersController = new GetAllCharactersController(getAllCharactersService);

export { getAllCharactersController }