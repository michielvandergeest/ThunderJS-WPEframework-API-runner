export const controller_startdiscovery = params => ({
  name: 'Start network discovery',
  plugin: 'Controller',
  method: 'startdiscovery',
  params: params || {
    ttl: 1,
  },
})

export const controller_storeconfig = () => ({
  name: 'Store config to persistent memory',
  plugin: 'Controller',
  method: 'storeconfig',
})

export const controller_download = params => ({
  name: 'Download a file to persistent memory',
  plugin: 'Controller',
  method: 'download',
  params: params || {
    source: 'http://example.com/test.txt',
    destination: 'test',
    hash: 'ODE5NjNFMEEzM0VDQ0JBOTI0MDRFOTY4QzY2NTAwNkQ=',
  },
})

export const controller_delete = params => ({
  name: 'Delete a file from persistent memory',
  plugin: 'Controller',
  method: 'delete',
  params: params || {
    path: 'test/test.txt',
  },
})

export const controller_activate_plugin = plugin => {
  if (!plugin) plugin = 'DeviceInfo'
  return {
    name: 'Activate the ' + plugin + ' plugin',
    plugin: 'Controller',
    method: 'activate',
    params: {
      callsign: plugin,
    },
  }
}

export const controller_deactivate_plugin = plugin => {
  if (!plugin) plugin = 'DeviceInfo'
  return {
    name: 'Deactivate the ' + plugin + ' plugin',
    plugin: 'Controller',
    method: 'deactivate',
    params: {
      callsign: plugin,
    },
  }
}

export const controller_status = plugin => {
  if (!plugin) plugin = 'DeviceInfo'
  return {
    name: 'Get status of ' + plugin + ' plugin',
    plugin: 'Controller',
    method: 'status@' + plugin,
  }
}

export const controller_links = () => ({
  name: 'Get information about active connections (links)',
  plugin: 'Controller',
  method: 'links',
})

export const controller_processinfo = () => ({
  name: 'Get information about the framework process',
  plugin: 'Controller',
  method: 'processinfo',
})

export const controller_subsystems = () => ({
  name: 'Get the status of the subsystems',
  plugin: 'Controller',
  method: 'subsystems',
})

export const controller_discoveryresults = () => ({
  name: 'Get the SSDP network discovery results',
  plugin: 'Controller',
  method: 'discoveryresults',
})

export const controller_environment = env => {
  if (!env) env = 'SHELL'
  return {
    name: 'Get the value of an environment variable ( ' + env + ')',
    plugin: 'Controller',
    method: 'environment@' + env,
  }
}

export const controller_configuration = plugin => {
  if (!plugin) plugin = 'WebKitBrowser'
  return {
    name: 'Get the configuration object of a service (' + plugin + ')',
    plugin: 'Controller',
    method: 'configuration@' + plugin,
  }
}

export const controller_harakiri = () => ({
  name: 'Reboot the device',
  plugin: 'Controller',
  method: 'harakiri',
})

export default {
  startdiscovery: controller_startdiscovery,
  storeconfig: controller_storeconfig,
  download: controller_download,
  delete: controller_delete,
  activate_plugin: controller_activate_plugin,
  deactivate_plugin: controller_deactivate_plugin,
  status: controller_status,
  links: controller_links,
  processinfo: controller_processinfo,
  subsystems: controller_subsystems,
  discoveryresults: controller_discoveryresults,
  environment: controller_environment,
  configuration: controller_configuration,
  harakiri: controller_harakiri,
}
