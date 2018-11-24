const get = require('lodash/get')
const set = require('lodash/set')

const config = {
  type: "s",
  shadowsocks: {
    address: "127.0.0.1:4000",
  },
  manager: {
    address: "0.0.0.0:4001",
    password: process.env.MANAGER_PASSWORD
  },
  db: {
    host: "db.deaf-mutes.us",
    port: 3306,
    user: "shadowsocks",
    password: process.env.MYSQL_PASSWORD,
    database: "shadowsocks"
  }
}

exports.all = () => config
exports.get = path => get(config, path)
exports.set = (path, value) => set(config, path, value)