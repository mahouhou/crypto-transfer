import { proxy, useSnapshot } from 'valtio'

const state = proxy({ startProgress: false })

export default state;