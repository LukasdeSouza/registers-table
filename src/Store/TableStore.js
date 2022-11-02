import { action, makeAutoObservable, observable } from "mobx"

class TableStore {
  state = {
    id: '',
    name: '',
    date: '',
    product: '',
    quantity: '',
    id1: '',
    name1: '',
    product1: '',
    quantity1: '',
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