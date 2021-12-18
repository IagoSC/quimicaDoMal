import { v4 as uuid} from "uuid";
import { Episode } from "./Episode";

class Character {
  id?: string;
  name: string;
  episodes: Episode[];

  constructor() {
    this.id = uuid()
  }
}

export { Character };