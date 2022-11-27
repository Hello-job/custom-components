import { createModel } from "@rematch/core";
import { projectData } from "../../shared/constant";
interface ProjectInfo {
  [key: string]: any;
}

const defaultData = projectData;

export const trello = createModel<ProjectInfo>()({
  state: {
    projectList: defaultData,
  }, // initial state
  reducers: {
    increment(state: any, payload: any) {
      return {
        ...state,
        projectList: payload,
      };
    },
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: any, rootState: any) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
});
