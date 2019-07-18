# ThunderJS WPEframework API Runner

Quickly run API calls against
[WPEframework (Thunder)](https://github.com/WebPlatformForEmbedded/Thunder/) using [ThunderJS](https://github.com/WebPlatformForEmbedded/ThunderJS)
## Getting started:

1. Clone this repository
2. Run `npm install` to install all the depencies
3. Point `host` to the IP address of your STB in `config.js`
4. Run `npm start` and select a scenario to run

## Scenarios

The `scenarios`-folder contains different scenarios that can be run. A scenario is no more then a sequence of instructions for API calls that should be executed by ThunderJS.

The `calls`-folder contains different predefined API calls that exist on the WPEframework API (or convenience methods that exist in ThunderJS).

### Creating scenarios

To create a new scenario, start by adding a new `.js`-file in the `scenarios`-folder. This file should _export_ an `array` or `object` that contains the calls.

The calls can be predefined ones imported from the `calls`-folder, or you can specify them manually in the scenario file.

Read more about the predefined calls and the structure for specifiying your own calls below.

A basic scenario file could look something like this:

```js
import { controller_startdiscovery } from '../calls/Controller'
import DeviceInfo from '../calls/DeviceInfo'

export default {
  controller_startdiscovery,
  DeviceInfo.activate,
  DeviceInfo.addresses,
  // more calls ...
}
```



Next, open `scenarios/index.js` and import the scenario you just created. Then add it to the exported object with available scenarios.

```js
import simple from './simple'
import myscenario from './myscenario'

export default {
  simple,
  myscenario,
  // optionally you can specify a more descriptive key to show up in the select list
  'My first scenario': myscenario
}
```

Now when you run `npm start` you will be able to select the new scenario from the list.

## Calls

The `calls`-folder contains predefined specifications of API calls that exist in WPEframework, as well as some custom convenience calls that have been added to ThunderJS.

You can use these calls to build your own scenarios of API calls to run.

All predefined calls are specified as _factory functions_ that return an _object literal_ that will be interpreted by the API runner to make the actual API call.

When a predifined call can be customized (i.e. pass params, or  dynamically set the plugin), you can do so by passing an argument to the factory function. If you want to use the defaults, or there simply is nothing to customize, you can just pass the factory function as is.

See below a list of currently predefined calls and their options for customization.

## Manualy specifying a call

While it's convenient to use a predifined call, sometimes you might want to do something custom, or need to make a call that hasn't been specified yet.

You can easily make your own specifications. A call specification is just a simple _object literal_ that contains:

- a `name` key (describing in a few word what the API call does)
- a `plugin` key
- a `method` key
- optionally a `params` key

Example of the _Start network discovery_ call on the _Controller_:

```js
{
  name: 'Start network discovery',
  plugin: 'Controller',
  method: 'startdiscovery',
  params: {
    ttl: 1,
  },
}
```

In a scenario you can mix predefined calls and custom calls as you wish.

```js
// import the predefined WebKitBrowser calls
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  WebKitBrowser.activate,
  WebKitBrowser.setvisibility('visible'), // passing in param 'visible'
  // custom call
  {
    name: 'Visit metrological.com!',
    plugin: 'WebKitBrowser',
    method: 'url',
    params: 'http://metrological.com,
  },
  WebKitBrowser.deactivate,
```

_Note that there already exists a **seturl** call on the **WebKitBrowser** object_


### Predefined calls

The following calls are currently predefined and available for use. Calls can be imported _grouped by plugin_ or as _separate methods_ by using _object deconstruction_.

#### Controller Plugin

**Start network discovery**

```js
import { controller_startdiscovery } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_startdiscovery,
  // or
  Controller.startdiscovery({
    ttl: 10
  })
]
```

Accepts an object with a `ttl` key-value as an optional argument. Otherwise ttl defaults to `1`.

**Store config to persistent memory**

```js
import { controller_storeconfig } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_storeconfig,
  // or
  Controller.storeconfig
]
```

**Download a file to persistent memory**

```js
import { controller_download } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_download({
    source: '',
    destination: '',
    hash: '',
  }),
  // or
  Controller.download({
    source: '',
    destination: '',
    hash: '',
  })
]
```

**Delete a file from persistent memory**

```js
import { controller_delete } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_delete({
    path: '',
  }),
  // or
  Controller.delete({
    path: '',
  })
]
```

**Activate plugin**

```js
import { controller_activate_plugin } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_activate_plugin('WebKitBrowser'),
  // or
  Controller.activate_plugin('WebKitBrowser')
]
```

Default plugin is 'DeviceInfo'

**Deactivate plugin**

```js
import { controller_deactivate_plugin } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_deactivate_plugin('WebKitBrowser'),
  // or
  Controller.deactivate_plugin('WebKitBrowser')
]
```

Default plugin is 'DeviceInfo'

**Get status of plugin**

```js
import { controller_status } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_status('WebKitBrowser'),
  // or
  Controller.status('WebKitBrowser')
]
```

Default plugin is 'DeviceInfo'

**Get information about active connections (links)**

```js
import { controller_links } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_links,
  // or
  Controller.links
]
```

**Get information about the framework process**

```js
import { controller_processinfo } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_processinfo,
  // or
  Controller.processinfo
]
```

**Get the status of the subsystems**

```js
import { controller_subsystems } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_subsystems,
  // or
  Controller.subsystems
]
```

**Get the SSDP network discovery results**

```js
import { controller_discoveryresults } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_discoveryresults,
  // or
  Controller.discoveryresults
]
```

**Get the value of an environment variable**

```js
import { controller_environment } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_environment('SHELL'),
  // or
  Controller.environment('SHELL')
]
```

Environment variable defaults to 'SHELL'

**Get the configuration object of a service**

```js
import { controller_configuration } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_configuration('DeviceInfo'),
  // or
  Controller.configuration('DeviceInfo')
]
```

Plugin defaults to WebKitBrowser

**Reboot the device**

```js
import { controller_harakiri } from '../calls/Controller'
// or
import Controller from '../calls/Controller'

export default [
  controller_harakiri('DeviceInfo'),
  // or
  Controller.harakiri('DeviceInfo')
]
```

#### DeviceInfo

**Activate DeviceInfo plugin**

```js
import { deviceinfo_activate } from '../calls/DeviceInfo'
// or
import DeviceInfo from '../calls/DeviceInfo'

export default [
  deviceinfo_activate,
  // or
  DeviceInfo.activate
]
```

Note this is the same as calling `controller_activate_plugin('DeviceInfo')`

**Deactivate DeviceInfo plugin**

```js
import { deviceinfo_deactivate } from '../calls/DeviceInfo'
// or
import DeviceInfo from '../calls/DeviceInfo'

export default [
  deviceinfo_deactivate,
  // or
  DeviceInfo.deactivate
]
```

Note this is the same as calling `controller_deactivate_plugin('DeviceInfo')`

**Get systeminfo**

```js
import { deviceinfo_systeminfo } from '../calls/DeviceInfo'
// or
import DeviceInfo from '../calls/DeviceInfo'

export default [
  deviceinfo_systeminfo,
  // or
  DeviceInfo.systeminfo
]
```

**Get version**

```js
import { deviceinfo_version } from '../calls/DeviceInfo'
// or
import DeviceInfo from '../calls/DeviceInfo'

export default [
  deviceinfo_version,
  // or
  DeviceInfo.version
]
```

Note this is a ThunderJS convenience method, that calls systeminfo under the hood

**Get free ram**

```js
import { deviceinfo_freeram } from '../calls/DeviceInfo'
// or
import DeviceInfo from '../calls/DeviceInfo'

export default [
  deviceinfo_freeram,
  // or
  DeviceInfo.freeram
]
```

Note this is a ThunderJS convenience method, that calls systeminfo under the hood

**Get addresses**

```js
import { deviceinfo_addresses } from '../calls/DeviceInfo'
// or
import DeviceInfo from '../calls/DeviceInfo'

export default [
  deviceinfo_addresses,
  // or
  DeviceInfo.addresses
]
```

**Get socketinfo**

```js
import { deviceinfo_socketinfo } from '../calls/DeviceInfo'
// or
import DeviceInfo from '../calls/DeviceInfo'

export default [
  deviceinfo_socketinfo,
  // or
  DeviceInfo.socketinfo
]
```

#### WebkitBrowser

**Activate WebKitBrowser plugin**

```js
import { webkitbrowser_activate } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_activate,
  // or
  WebKitBrowser.activate
]
```

Note this is the same as calling `controller_activate_plugin('WebKitBrowser')`

**Deactivate WebKitBrowser plugin**

```js
import { webkitbrowser_deactivate } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_deactivate,
  // or
  WebKitBrowser.deactivate
]
```

Note this is the same as calling `controller_deactivate_plugin('WebKitBrowser')`

**Set url of WebKitBrowser**

```js
import { webkitbrowser_seturl } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_seturl('http://google.com'),
  // or
  WebKitBrowser.seturl('http://google.com')
]
```

Url defaults to https://www.metrological

**Get url of WebKitBrowser**

```js
import { webkitbrowser_geturl } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_geturl,
  // or
  WebKitBrowser.geturl
]
```

**Set visiblity of WebKitBrowser**

```js
import { webkitbrowser_setvisibility } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_setvisibility('hidden'),
  // or
  WebKitBrowser.setvisibility('hidden')
]
```

Defaults to 'visible'

**Get visibility of WebKitBrowser**

```js
import { webkitbrowser_getvisibility } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_getvisibility,
  // or
  WebKitBrowser.getvisibility
]
```

**Get frames per second of WebKitBrowser**

```js
import { webkitbrowser_getfps } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_getfps,
  // or
  WebKitBrowser.getfps
]
```

**Set state of WebKitBrowser**

```js
import { webkitbrowser_setstate } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_setstate('suspended'),
  // or
  WebKitBrowser.setstate('suspended')
]
```

State defaults to 'resumed'

**Get state of WebKitBrowser**

```js
import { webkitbrowser_getstate } from '../calls/WebKitBrowser'
// or
import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  webkitbrowser_getstate,
  // or
  WebKitBrowser.getstate
]
```
