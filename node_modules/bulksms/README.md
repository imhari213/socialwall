BulkSMS API
==========
[![NPM version](https://img.shields.io/npm/v/bulksms.svg)](https://www.npmjs.com/package/bulksms)
[![Build Status](https://travis-ci.org/hugoabonizio/bulksms.svg?branch=master)](https://travis-ci.org/hugoabonizio/bulksms)

BulkSMS is a simple implementation of [BulkSMS](http://www.bulksms.com/) API for NodeJS that allows you to easily integrate SMS services into your application.

## Installation

This module requires Node v6.0.0+.

```npm install bulksms --save```

## Usage

To use this module you need an account from www.bulksms.com (you start with 5 free credits).

```javascript
const BulkSMS = require('bulksms')
const SMS = new BulkSMS('[USER]', '[PASSWORD]')
SMS.send('[NUMBER]', 'Hello, this is just a test!', (err, result) => {
  if (err)
    return console.error(err)

  console.log(result)
})
```

## Contributing

1. Fork it ( https://github.com/hugoabonizio/bulksms/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Contributors

- [hugoabonizio](https://github.com/hugoabonizio) Hugo Abonizio - creator, maintainer