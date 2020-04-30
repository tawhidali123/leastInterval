// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

// However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

// You need to return the least number of intervals the CPU will take to finish all the given tasks.

// Example:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

function leastInterval(tasks, n){
  const frequentHash = {}
  // find the count of frequently repeated characters
  for(i = 0; i < tasks.length; i++){
    if(frequentHash[tasks[i]]){
      frequentHash[tasks[i]] = frequentHash[tasks[i]] + 1
    } else {
      frequentHash[tasks[i]] = 1
    }
  }

  const counts = Object.values(frequentHash)
   // sort in ascending order
  counts.sort((a,b) => a - b)

  const max = counts.pop() - 1
  
  // calculate idle slots for max frequently repeated character
  let idleSlots = max * n
  console.log(counts,max, idleSlots)
  for(let i = counts.length - 1; i >= 0; i--){
    idleSlots -= Math.min(counts[i], max)
  }

  if(idleSlots > 0){
    return idleSlots + tasks.length
  } else {
    return tasks.length
  }







}


leastInterval(["A","A","A","B","B","B"], 2)