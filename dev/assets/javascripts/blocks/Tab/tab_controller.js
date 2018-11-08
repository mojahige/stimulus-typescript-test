import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['name', 'output']

  constructor() {
    super()

    this.index = 0
  }

  onClick() {
    console.log(this)
  }
}
