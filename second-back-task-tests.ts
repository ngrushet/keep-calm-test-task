const actions = ["start", "connect", "message", "end"];
console.log(FirstBackTask.getResult(actions)); // 1

const actions2 = ["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"];
console.log(FirstBackTask.getResult(actions2)); // 2