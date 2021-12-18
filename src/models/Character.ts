import { v4 as uuid} from "uuid";

class Character {
  id?: string;
  name: string;
  
  constructor() {
    this.id = uuid()
  }
}

export { Character };