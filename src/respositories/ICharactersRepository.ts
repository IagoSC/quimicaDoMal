import { Character } from "../models/Character";
import { ICreateCharacterDTO, IUpdateCharacterDTO } from "./CharactersRepository";

interface ICharactersRepository {
  findByName(name: string): Character;
  findById(id: string): Character
  list(): Character[];
  create({name,episodes}: ICreateCharacterDTO): Character
  findAndUpdate(id: string, character: IUpdateCharacterDTO): Character
}

export { ICharactersRepository }