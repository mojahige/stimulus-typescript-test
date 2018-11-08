import { Controller } from 'stimulus'

export default class extends Controller {
  currentIndex: number

  initialize() {
    this.currentIndex = 0
  }

  update(newIndex) {
    if (this.currentIndex === newIndex) {
      return
    }

    this.currentIndex = newIndex

    this.allCloseTabItem()
    this.openTabItem(newIndex)
  }

  allCloseTabItem() {
    this.element
      .querySelectorAll('li')
      .forEach(element => element.classList.remove('-open'))
  }

  closeTabItem(index) {
    try {
      this.element.querySelectorAll('li')[index].classList.remove('-open')
    } catch (error) {
      console.error(error)
    }
  }

  openTabItem(index) {
    try {
      this.element.querySelectorAll('li')[index].classList.add('-open')
    } catch (error) {
      console.error(error)
    }
  }

  onClick(e) {
    console.log('hoge')
    this.update(this.getNewCurrentIndex(e))
  }

  getNewCurrentIndex(e) {
    const { currentTarget } = e
    const listElementArray = Array.from(this.element.querySelectorAll('li'))
    const clickButtonIndex = listElementArray.indexOf(
      currentTarget.parentElement
    )

    if (clickButtonIndex < 0) {
      console.error('Failed to acquire the clicked index.')
    }

    return clickButtonIndex
  }
}
