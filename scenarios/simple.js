import { controller_startdiscovery } from '../calls/Controller'
import DeviceInfo from '../calls/DeviceInfo'

export default [controller_startdiscovery, DeviceInfo.activate, DeviceInfo.addresses]
