---
sidebar_position: 4
---

# Configuring the logger

`Wppconnect Bot` use [winston](https://github.com/winstonjs/winston) package for log management.

`wppconnect.defaultLogger` is a instance of `winston.createLogger`.

## Default Log level

The default log level is `info`

```javascript
// Supports ES6
// import * as wppconnect from '@wppconnect-team/wppconnect';
const wppconnect = require('@wppconnect-team/wppconnect');

// Levels: 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'
// All logs: 'silly'
wppconnect.defaultLogger.level = 'silly';

// If you want stop console logging
wppconnect.defaultLogger.transports.forEach((t) => (t.silent = true));
```

## Using a custom logger

```javascript
// Supports ES6
// import * as wppconnect from '@wppconnect-team/wppconnect';
// import * as winston from 'winston';
const wppconnect = require('@wppconnect-team/wppconnect');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

wppconnect
  .create({
    session: 'sessionName',
    logger: logger,
  })
  .then((client) => {
    start(client);
  })
  .catch((erro) => {
    console.log(erro);
  });
```

## Log to file

By default, wppconnect use the Console transport for logging.

If you want to save the log to a file, you can configure
using the [winston transport](https://github.com/winstonjs/winston#transports)

```javascript
// Supports ES6
// import * as wppconnect from '@wppconnect-team/wppconnect';
// import * as winston from 'winston';
const wppconnect = require('@wppconnect-team/wppconnect');
const winston = require('winston');

// Optional: Remove all default transports
wppconnect.defaultLogger.clear(); // Remove all transports

// Create a file transport
const files = new winston.transports.File({ filename: 'combined.log' });
wppconnect.defaultLogger.add(files); // Add file transport

// Optinal: create a custom console with error level
const console = new winston.transports.Console({ level: 'erro' });
wppconnect.defaultLogger.add(console); // Add console transport

// Optinal: Remove the custom transport
wppconnect.defaultLogger.remove(console); // Remove console transport
```
