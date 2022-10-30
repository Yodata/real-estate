// runs on the server side
import {faker} from '@faker-js/faker'

module.exports = (req, res) => {
  res.send(req.body)
}
