import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['name', 'output']

  onClick(e) {
    console.log('Event', e)

    console.log(this.targets)
  }
}
