const mock = require('./mock')

const basePath = '/salesforce'

const get = {
  method: 'GET',
  path: `${basePath}/`,
  handler: (req, reply) => reply(mock.salesForce),
}

module.exports = {
  get
}
