const BulkSMS = require('./')
const SMS = new BulkSMS('[USER]', '[PASSWORD]')
SMS.send('[NUMBER]', 'Hi!', (err, result) => {
  if (err)
    return console.error(err)

  console.log(result)
})