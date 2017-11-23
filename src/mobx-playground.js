import { types } from "mobx-state-tree";

const defaultStatus = {
  state: "active",
  lastUpdated: null
};

const Todo = types
  .model("Todo", {
    title: types.string,
    done: false,
    status: types.optional(types.frozen, defaultStatus)
  })
  .actions(self => ({
    toggle() {
      self.done = !self.done;
    }
  }));

const Store = types.model("Store", {
  todos: types.array(Todo)
});

export default Store;
