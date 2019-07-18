import Chalk from 'chalk'
import Contra from 'contra'
import ThunderJS from 'thunderjs'

import config from '../config'
const thunderJS = ThunderJS(config)

export default calls => {
  Contra.each.series(
    calls,
    (call, next) => {
      if (typeof call === 'function') {
        call = call()
      }

      console.log(Chalk.yellow('======================================================'))
      console.log(Chalk.yellow(call.name))
      console.log(Chalk.yellow('======================================================'))

      thunderJS[call.plugin]
        [call.method](call.params)
        .then(result => {
          console.log(Chalk.green(['✅', call.plugin, call.method].join(' ')))
          console.log(Chalk.green(JSON.stringify(result, null, 2)))
        })
        .catch(err => {
          console.log(Chalk.red(['❌', call.plugin, call.method].join(' ')))
          console.log(Chalk.red(JSON.stringify(err, null, 2)))
        })
        .finally(() => {
          console.log('\n\n')
          setTimeout(() => {
            next()
          }, call.timeout || 1500)
        })
    },
    () => {
      console.log(Chalk.yellow('======================== Done ========================'))
    }
  )
}
