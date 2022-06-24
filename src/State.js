import { proxy, useSnapshot } from 'valtio';

const state = proxy({ startProgress: false, showForm: false });

export default state;