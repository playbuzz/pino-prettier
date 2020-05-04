const { inspect } = require('util');

module.exports = {
    levelFirst: true,
    colorize: true,
    translateTime: 'HH:MM:ss.l',
    ignore: 'pid,hostname,caller,name,from,version',
    customPrettifiers: new Proxy({}, {
        get: () => v => inspect(v, { depth: 10, colors: true }),
    }),
};
