import WebKitBrowser from '../calls/WebKitBrowser'

export default [
  WebKitBrowser.activate,
  WebKitBrowser.status,
  WebKitBrowser.seturl, // defaults to https://www.metrological.com
  WebKitBrowser.geturl,
  WebKitBrowser.setvisibility('hidden'),
  WebKitBrowser.getvisibility,
  WebKitBrowser.setvisibility('visible'),
  WebKitBrowser.getvisibility,
  WebKitBrowser.setstate('suspended'),
  WebKitBrowser.getstate,
  WebKitBrowser.setstate, // defaults to resumed
  WebKitBrowser.getstate,
  WebKitBrowser.seturl('https://google.com'),
  WebKitBrowser.geturl,
  WebKitBrowser.seturl('http://netflix.com/'),
  WebKitBrowser.geturl,
  WebKitBrowser.seturl('http://cnn.com/'),
  WebKitBrowser.geturl,
  WebKitBrowser.deactivate,
  WebKitBrowser.status,
]
