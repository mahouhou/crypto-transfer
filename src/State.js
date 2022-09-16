import { proxy, useSnapshot } from "valtio";

const state = proxy({
  startProgress: false,
  showForm: false,
  progressFinished: false,
});

export default state;
