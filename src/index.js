/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');

const USE_HTTPS = true; // change this

// NON HTTPS
if (!USE_HTTPS) {
  const server = app.listen(port);

  process.on('unhandledRejection', (reason, p) =>
    logger.error('Unhandled Rejection at: Promise ', p, reason)
  );

  server.on('listening', () =>
    logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
  );

} else {
  // HTTPS SUPPORT
  const https = require('https');
  const fs = require('fs');

  let authData = {
  // use your own keys
    // key: fs.readFileSync('/path/to/your/domain.key'),
    // cert: fs.readFileSync('/path/to/your/domain.crt')
    key: fs.readFileSync('/Users/nriesco/Dropbox/SMARTCOBPrivado/star.smartcob.cl.key'),
    cert: fs.readFileSync('/Users/nriesco/Dropbox/SMARTCOBPrivado/star.smartcob.cl.crt')
  };

  let serverHttps = https.createServer(authData, app);

  serverHttps.listen(app.get('port'), function () {
    console.log('Express https server listening on port ', port);
  });

  serverHttps.on('listening', () =>
    logger.info('Feathers application started on https://' + app.get('host') + ':' + port)
  );
}
