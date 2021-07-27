const winston = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'info',
    transports: [new winston.transports.Console({level: 'info'}),
        new winston.transports.File({
            filename: 'logs/loggers.log'
        }),
        new winston.transports.DailyRotateFile({
            filename: 'application-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
],
format: winston.format.simple()
})
;

module.exports = logger;