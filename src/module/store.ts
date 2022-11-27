import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";
import updatedPlugin from "@rematch/updated";
import { models, RootModel } from "./models";
const updated: any = updatedPlugin();
const loading = createLoadingPlugin({ asNumber: false });
export const store = init({
  models,
  plugins: [updated],
  redux: {
    devtoolOptions: {},
  },
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
