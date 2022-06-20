import type { AnimatedLottieViewProps } from 'lottie-react-native'
import { ComponentType } from 'react'

let implementation
if (process.env.TARO_ENV === 'weapp') {
  implementation = require('./lib/mp')
} else if (process.env.TARO_ENV === 'h5') {
  implementation = require('./lib/web')
} else {
  implementation = require('./lib/rn')
}
const lottie: ComponentType<AnimatedLottieViewProps> = implementation.default || implementation
export default lottie