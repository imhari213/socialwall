'use strict'
const request = require('request')

module.exports = class BulkSMS {
  constructor(user, pass) {
    if (arguments.length !== 2)
      throw 'Expected 2 arguments: username and password'

    this.user = user
    this.pass = pass
  }

  send(msisdn, message, cb) {
    request.post({
      url: 'https://bulksms.vsms.net/eapi/submission/send_sms/2/2.0',
      form: {
        username: this.user,
        password: this.pass,
        message: message,
        msisdn: msisdn
      }
    }, (err, res, body) => {
      if (err)
        return cb(err, {})

      let raw = body.split('|')
      let result = {
        code: Number(raw[0]),
        status: raw[1],
        batch_id: Number(raw[2]),
      }

      if (result.code !== 0)
        return cb(`Error: ${result.code} ${result.status}`, {})

      cb(null, result)
    })
  }
}