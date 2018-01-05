var amqp = require('amqplib/callback_api');
var url = process.env.AMQP_URL || 'amqp://guest:guest@localhost:5672';

module.exports = function(cb) {
  amqp.connect(url,function(err, conn) {
    if (err) {
      throw new Error(err);
    }

    cb(conn);
  });
};
