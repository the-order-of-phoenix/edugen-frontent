import { Topic } from "./topic";

export interface Module {
  name: string;
  id: string;
  topics: Topic[]
}