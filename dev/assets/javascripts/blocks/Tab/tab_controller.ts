import { Controller } from 'stimulus'

export default class extends Controller {
  public static targets = ['list', 'content']

  // これまじか
  private listTarget: Element
  private listTargets: Element[]
  private hasListTarget: boolean
  private contentTarget: Element
  private contentTargets: Element[]
  private hasContentTarget: boolean

  private currentIndex: number = 0

  // initialize() {
  // }

  private update(newIndex: number) {
    if (this.currentIndex === newIndex) {
      return
    }

    this.currentIndex = newIndex

    // this.resetListButtonState()
    // this.resetTabPanelState()
  }

  // private resetListButtonState() {}

  // private resetTabPanelState() {}

  private onClickListButton(e: Event) {
    const clickButton = e.currentTarget as HTMLButtonElement

    if (clickButton) {
      this.update(
        this.getNewCurrentIndex(clickButton.parentElement as HTMLLIElement)
      )
    }
  }

  private getListItem(): Element[] {
    return this.hasListTarget
      ? Array.from(this.listTarget.querySelectorAll('li'))
      : []
  }

  private getNewCurrentIndex(target: HTMLLIElement): number {
    const clickButtonIndex = this.getListItem().indexOf(target)

    return clickButtonIndex < 0 ? 0 : clickButtonIndex
  }
}
