import runner from './src/runner'
import { controller_startdiscovery } from './calls/Controller'
import DeviceInfo from './calls/DeviceInfo'

const scenario = [controller_startdiscovery, DeviceInfo.activate, DeviceInfo.addresses]

runner(scenario)
