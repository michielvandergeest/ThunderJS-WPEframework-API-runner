import controller from './Controller'

export const deviceinfo_activate = () => controller.activate_plugin('DeviceInfo')
export const deviceinfo_deactivate = () => controller.deactivate_plugin('DeviceInfo')

export const deviceinfo_systeminfo = () => ({
  name: 'Get systeminfo from DeviceInfo',
  plugin: 'DeviceInfo',
  method: 'systeminfo',
})

export const deviceinfo_version = () => ({
  name: 'Get version from DeviceInfo (custom thunderJS convenience method!)',
  plugin: 'DeviceInfo',
  method: 'version',
})

export const deviceinfo_freeram = () => ({
  name: 'Get free ram from DeviceInfo (custom thunderJS convenience method!)',
  plugin: 'DeviceInfo',
  method: 'freeRam',
})

export const deviceinfo_adresses = () => ({
  name: 'Get addresses from DeviceInfo',
  plugin: 'DeviceInfo',
  method: 'addresses',
})

export const deviceinfo_socketinfo = () => ({
  name: 'Get socketinfo from DeviceInfo',
  plugin: 'DeviceInfo',
  method: 'socketinfo',
})

export default {
  activate: deviceinfo_activate,
  deactivate: deviceinfo_deactivate,
  systeminfo: deviceinfo_systeminfo,
  version: deviceinfo_version,
  freeram: deviceinfo_freeram,
  addresses: deviceinfo_adresses,
  socketinfo: deviceinfo_socketinfo,
}
