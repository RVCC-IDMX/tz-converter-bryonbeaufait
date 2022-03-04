const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

const targetTimezone = 'Europe/Paris';

console.log(
  `The time at the ${targetTimezone} timezone is ${moment()
    .tz(targetTimezone)
    .format()}`
);
