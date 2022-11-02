import { createContext } from "react";
import TableStore from "./TableStore";

class RootStore {

  constructor() {
    this.tableStore = new TableStore();
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore());

export default RootStoreContext