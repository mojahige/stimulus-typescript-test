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
    this.getListButton()[this.currentIndex].setAttribute(
      'aria-selected',
      'true'
    )
  }

  private setTabPanelOpenState() {
    this.getTabPanel()[this.currentIndex].setAttribute('aria-hidden', 'false')
  }

  private resetListButtonState() {
    this.getListButton().forEach(element =>
      element.setAttribute('aria-selected', 'false')
    )
  }

  private resetTabPanelState() {
    this.getTabPanel().forEach(element =>
      element.setAttribute('aria-hidden', 'true')
    )
  }

  private getTabPanel(): Element[] {
    return this.hasContentTarget
      ? Array.from(this.contentTarget.querySelectorAll('.Tab__panel'))
      : []
  }

  private getListItem(): Element[] {
    return this.hasListTarget
      ? Array.from(this.listTarget.querySelectorAll('.Tab__listItem'))
      : []
  }

  private getListButton(): Element[] {
    return this.hasListTarget
      ? Array.from(this.listTarget.querySelectorAll('.Tab__listButton'))
      : []
  }

  private getNewCurrentIndex(target: HTMLLIElement): number {
    const clickButtonIndex = this.getListItem().indexOf(target)

    return clickButtonIndex < 0 ? 0 : clickButtonIndex
  }
}
