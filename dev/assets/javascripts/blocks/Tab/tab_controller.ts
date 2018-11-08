import { Controller } from 'stimulus'

export default class extends Controller {
  // これまじか
  listTarget: Element
  listTargets: Element[]
  hasListTarget: boolean
  contentTarget: Element
  contentTargets: Element[]
  hasContentTarget: boolean

  static targets = ['list', 'content']
  currentIndex: number = 0

  // initialize() {
  // }

  update(newIndex: number) {
    if (this.currentIndex === newIndex) {
      return
    }

    this.currentIndex = newIndex
  }

  onClickListButton(e: Event) {
    const clickButton = <HTMLButtonElement>e.currentTarget

    if (clickButton) {
      this.update(
        this.getNewCurrentIndex(<HTMLLIElement>clickButton.parentElement)
      )
    }
  }

  getListItem(): Array<Element> {
    return this.hasListTarget
      ? Array.from(this.listTarget.querySelectorAll('li'))
      : []
  }

  getNewCurrentIndex(target: HTMLLIElement): number {
    const clickButtonIndex = this.getListItem().indexOf(target)

    return clickButtonIndex < 0 ? 0 : clickButtonIndex
  }
}
