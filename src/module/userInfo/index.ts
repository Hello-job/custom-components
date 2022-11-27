import { createModel } from "@rematch/core";

export const userInfo = createModel()({
  state: {
    personalInfo: {
      user_name: "",
    },
  },
  reducers: {
    setPersonal(state, payload) {
      return {
        ...state,
        personalInfo: payload,
      };
    },
  },
});
