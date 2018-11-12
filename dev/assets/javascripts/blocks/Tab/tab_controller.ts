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

  get tabPanel(): Element[] {
    return this.hasContentTarget
      ? Array.from(this.contentTarget.querySelectorAll('.Tab__panel'))
      : []
  }

  get listItem(): Element[] {
    return this.hasListTarget
      ? Array.from(this.listTarget.querySelectorAll('.Tab__listItem'))
      : []
  }

  get listButton(): Element[] {
    return this.hasListTarget
      ? Array.from(this.listTarget.querySelectorAll('.Tab__listButton'))
      : []
  }

  public onClickListButton(e: Event) {
    const clickButton = e.currentTarget as HTMLButtonElement

    if (clickButton) {
      this.update(
        this.getNewCurrentIndex(clickButton.parentElement as HTMLLIElement)
      )
    }
  }

  private update(newIndex: number) {
    if (this.currentIndex === newIndex) {
      return
    }

    this.currentIndex = newIndex

    this.resetListButtonState()
    this.resetTabPanelState()
    this.setListButtonSelectedState()
    this.setTabPanelOpenState()
  }

  private setListButtonSelectedState() {
    this.listButton[this.currentIndex].setAttribute('aria-selected', 'true')
  }

  private setTabPanelOpenState() {
    this.tabPanel[this.currentIndex].setAttribute('aria-hidden', 'false')
  }

  private resetListButtonState() {
    this.listButton.forEach(element =>
      element.setAttribute('aria-selected', 'false')
    )
  }

  private resetTabPanelState() {
    this.tabPanel.forEach(element =>
      element.setAttribute('aria-hidden', 'true')
    )
  }

  private getNewCurrentIndex(target: HTMLLIElement): number {
    const clickButtonIndex = this.listItem.indexOf(target)

    return clickButtonIndex < 0 ? 0 : clickButtonIndex
  }
}
