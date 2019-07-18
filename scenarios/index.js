import simple from './simple'
import controller from './controller'
import webkitbrowser from './webkitbrowser'
import reboot from './reboot'

export default {
  simple,
  controller,
  // using a more descriptive key to display in the list:
  'Web Kit Browser': webkitbrowser,
  'Reboot device': reboot,
}
