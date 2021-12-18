import { Character } from "../models/Character";
import { Episode } from "../models/Episode";
import { charactersRoutes } from "../routes/character.routes";
import { ICharactersRepository } from "./ICharactersRepository";

export interface IUpdateCharacterDTO {
  name?: string;
  status?: boolean;
}

export interface ICreateCharacterDTO {
  name: string;
  episodes: Episode[];
}

class CharactersRepository implements ICharactersRepository {
  private characters: Character[];

  private static INSTANCE: CharactersRepository;

  private constructor(){
    this.characters = [];
  }

  public static getInstance(): CharactersRepository {
    if(!CharactersRepository.INSTANCE) {
      CharactersRepository.INSTANCE = new CharactersRepository();
    }
    return CharactersRepository.INSTANCE
  }

  findByName(name: string): Character {
    const character = this.characters.find((char)=> name === char.name)
    return character
  }

  findById(id: string): Character {
    const character = this.characters.find((char)=> id === char.id)
    return character
  }
  
  delete(id: string): void {
    this.characters = this.characters.filter(char => char.id !== id)
  }

  findAndUpdate(id: string, character: IUpdateCharacterDTO): Character {
    const oldCharacter = this.characters.find(char => char.id === id)
    if(!oldCharacter) return
    Object.assign(oldCharacter, character) 
    return oldCharacter
  }

  list(): Character[]{
    return this.characters
  }

  create({name, episodes}: ICreateCharacterDTO): Character {
    const character = new Character();
    Object.assign(character, {
      name,
      episodes
    })
    this.characters.push(character)
    return character
  }

}

export { CharactersRepository }