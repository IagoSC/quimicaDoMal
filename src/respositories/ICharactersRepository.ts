import { Character } from "../models/Character";
import { IUpdateCharacterDTO } from "./CharactersRepository";

interface ICharactersRepository {
  findByName(name: string): Character;
  findById(id: string): Character
  list(): Character[];
  create(name: string): Character
  findAndUpdate(id: string, character: IUpdateCharacterDTO): Character
}

export { ICharactersRepository }