import '../stylesheets/main.scss'
import { Application } from 'stimulus'

import TabController from './blocks/Tab/tab_controller'

const application = Application.start()
application.register('tab', TabController)
