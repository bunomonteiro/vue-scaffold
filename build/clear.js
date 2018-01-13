const rm = require('rimraf')
const path = require('path')
const ora = require('ora')

const config = require('../config')

const spinner = ora('Clearing production files...')
spinner.start()

rm(config.build.assetsRoot, err => {
  if (err) throw err
  spinner.stop()
  console.log("Clear complete.")
})
