import { decipherMessage } from './challenge2.js'

const codedMessage = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
const message = decipherMessage(codedMessage)

console.log(message)