import { action, makeAutoObservable, observable } from "mobx"

class TableStore {
  state = {
    id: '',
    id1: '',
    id2: '',
    name: '',
    name1: '',
    name2: '',
    product: '',
    product1: '',
    product2: '',
    quantity: '',
    quantity1: '',
    quantity2: '',
    alert: false
  }

  constructor() {
    makeAutoObservable(this, {
      state: observable,

      setState: action
    })
  }

  setState(key, value) {
    this.state[key] = value
  }
}

export default TableStore