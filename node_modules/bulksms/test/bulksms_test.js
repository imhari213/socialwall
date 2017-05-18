const expect = require('chai').expect
const nock = require('nock')
const BulkSMS = require('../')

describe('Send SMS', function () {
  before(function () {
    nock('https://bulksms_.vsms.net')
      .post('/eapi/submission/send_sms/2/2.0', {
        username: 'user',
        password: 'pass',
      })
      .reply(200, "0|IN_PROGRESS|999999999\n")

    nock('https://bulksms_.vsms.net')
      .post('/eapi/submission/send_sms/2/2.0')
      .reply(200, "1|ERROR\n")
  })

  it('sends properly', function (done) {
    const SMS = new BulkSMS('user', 'pass')
    SMS.send('99999999', 'test', (err, result) => {
      expect(err).to.be.null
      expect(result.code).to.be.equal(0)
      expect(result.status).to.be.equal('IN_PROGRESS')
      expect(result.batch_id).to.be.equal(999999999)
      done()
    })
  })

  it('fails when providing invalid authentication', function (done) {
    const SMS = new BulkSMS('wrong', 'password')
    SMS.send('99999999', 'test', (err, result) => {
      expect(err).to.not.null
      done()
    })
  })

  it('throws when there are missing params', function (done) {
    let create = () => { new BulkSMS() }
    expect(create).to.throw(/Expected/)
    done()
  })
})