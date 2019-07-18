import WebKitBrowser from '../calls/WebKitBrowser'
import { controller_harakiri } from '../calls/Controller'
import Chalk from 'Chalk'

const log = (msg, result) => {
  console.log(' ')
  console.log(Chalk.cyan('-----------------------------------------'))
  console.log(Chalk.cyan(msg))
  console.log(Chalk.cyan(JSON.stringify(result, null, 2)))
  console.log(Chalk.cyan('-----------------------------------------'))
  console.log(' ')
}

const scenario = []

scenario.push(WebKitBrowser.activate)

// alternate between loading metrological and google website
for (let i = 0; i < 10; i++) {
  const url = i % 2 ? 'http://google.com' : 'https://metrological.com'
  scenario.push(WebKitBrowser.seturl(url))
}

scenario.push(WebKitBrowser.deactivate)
scenario.push(controller_harakiri)

export default {
  listeners: [
    {
      name: 'Listen and log URL changes on the Webkit browser',
      plugin: 'WebKitBrowser',
      event: 'urlchange',
      cb(notification) {
        log('🔔 Webkit - urlchange notification', notification)
      },
    },
    {
      name: 'Listen and log all notifications',
      plugin: 'Controller',
      event: 'all',
      cb(notification) {
        log('🔔 Controller - all notification', notification)
      },
    },
  ],
  scenario,
}
