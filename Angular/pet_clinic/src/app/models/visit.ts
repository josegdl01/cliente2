import { Pet } from "./pet";

export interface Visit {
    id: number,
    pet: Pet,
    date: Date,
    description: string
}
