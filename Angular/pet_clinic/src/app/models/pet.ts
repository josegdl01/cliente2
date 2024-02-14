import { Owner } from "./owner";
import { PetType } from "./pet-type";

export interface Pet {
    id: number,
    name: string,
    birth: Date,
    owner: Owner,
    type: PetType
}
