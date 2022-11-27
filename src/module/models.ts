import { Models } from "@rematch/core";
import { trello } from "./trello/index";
interface TModels {
  [key: string]: any;
}
export interface RootModel extends Models<TModels> {
  trello: typeof trello;
}
export const models: RootModel = {
  trello,
};
