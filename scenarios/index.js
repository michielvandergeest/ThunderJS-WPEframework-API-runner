import simple from './simple'
import controller from './controller'
import webkitbrowser from './webkitbrowser'
import reboot from './reboot'
import listen_webkitbrowser_url_change from './listen_webkitbrowser_url_change'

export default {
  simple,
  controller,
  // using a more descriptive key to display in the list:
  'Web Kit Browser': webkitbrowser,
  'Reboot device': reboot,
  'Listen to URL changes in WebKitBrowser': listen_webkitbrowser_url_change,
}
