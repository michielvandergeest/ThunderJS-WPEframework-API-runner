import controller from './Controller'

export const webkitbrowser_activate = () => controller.activate_plugin('WebKitBrowser')
export const webkitbrowser_deactivate = () => controller.deactivate_plugin('WebKitBrowser')

export const webkitbrowser_status = () => controller.status('WebKitBrowser')

export const webkitbrowser_seturl = url => {
  if (!url) url = 'https://www.metrological.com'
  return {
    name: 'Set url of WebKitBrowser to ' + url,
    plugin: 'WebKitBrowser',
    method: 'url',
    params: url,
  }
}

export const webkitbrowser_geturl = () => ({
  name: 'Get url of WebKitBrowser',
  plugin: 'WebKitBrowser',
  method: 'url',
})

export const webkitbrowser_setvisibility = visibility => {
  if (!visibility) visibility = 'visible'
  return {
    name: 'Set visiblity of WebKitBrowser to ' + visibility,
    plugin: 'WebKitBrowser',
    method: 'visibility',
    params: visibility,
  }
}

export const webkitbrowser_getvisibility = () => ({
  name: 'Get visibility of WebKitBrowser',
  plugin: 'WebKitBrowser',
  method: 'visibility',
})

export const webkitbrowser_getfps = () => ({
  name: 'Get frames per second of WebKitBrowser',
  plugin: 'WebKitBrowser',
  method: 'fps',
})

export const webkitbrowser_setstate = state => {
  if (!state) state = 'resumed'
  return {
    name: 'Set state of WebKitBrowser to ' + state,
    plugin: 'WebKitBrowser',
    method: 'state',
    params: state,
  }
}

export const webkitbrowser_getstate = () => ({
  name: 'Get state of WebKitBrowser',
  plugin: 'WebKitBrowser',
  method: 'state',
})

export default {
  activate: webkitbrowser_activate,
  deactivate: webkitbrowser_deactivate,
  status: webkitbrowser_status,
  seturl: webkitbrowser_seturl,
  geturl: webkitbrowser_geturl,
  setvisibility: webkitbrowser_setvisibility,
  getvisibility: webkitbrowser_getvisibility,
  getfps: webkitbrowser_getfps,
  setstate: webkitbrowser_setstate,
  getstate: webkitbrowser_getstate,
}
