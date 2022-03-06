const yargs = require('yargs');
const moment = require('moment-timezone');
const { format } = require('prettier');

moment.tz.setDefault('America/New_York');
const timezone = moment().tz('America/New_York').format();
const timezone_formatted = moment()
  .tz('America/New_York')
  .format('dddd, MMMM Do YYYY, h:mm:ss a');

let command = yargs.argv._[0];
let params = yargs.argv;

if (command === 'timezone') {
  if (params.time && params.format) {
    console.log(`The time here is: ${timezone_formatted}`);
    console.log(
      `The time at the ${params.time} timezone is: ${moment()
        .tz(params.time)
        .format('dddd, MMMM Do YYYY, h:mm:ss a')}`
    );
  } else if (params.time) {
    console.log(`The time here is: ${timezone}`);
    console.log(
      `The time at the ${params.time} timezone is ${moment()
        .tz(params.time)
        .format()}`
    );
  }
} else {
  console.log('Usage: node tz <timezone> [--time=target_timezone] [--format]');
}
