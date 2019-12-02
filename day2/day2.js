// Part 1

function computer(opArr){ 
    let i = 0
    while(opArr[i] != 99) {
        const operation = opArr[i]
        const left_idx = opArr[i + 1]
        const right_idx = opArr[i + 2]
        const output_idx = opArr[i + 3]
    
        if(operation === 1) {
            // console.log("result", opArr[left_idx] + opArr[right_idx]);
            opArr[output_idx] = opArr[left_idx] + opArr[right_idx];
        } else {
            // console.log("result", opArr[left_idx] * opArr[right_idx]);
            opArr[output_idx] = opArr[left_idx] * opArr[right_idx];
        }
        i = i + 4;
    }
    // console.log(opArr);
    return opArr
}

let found = false
for(let i = 0; !found; i++) {
    for(let j = 0; j < 100 && !found; j++) {
        console.log("iterating i = ", i, "iterating j = ", j)
        let opArr = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,13,27,1,10,27,31,2,31,13,35,1,10,35,39,2,9,39,43,2,43,9,47,1,6,47,51,1,10,51,55,2,55,13,59,1,59,10,63,2,63,13,67,2,67,9,71,1,6,71,75,2,75,9,79,1,79,5,83,2,83,13,87,1,9,87,91,1,13,91,95,1,2,95,99,1,99,6,0,99,2,14,0,0]
        opArr[1] = i
        opArr[2] = j
        let result = computer(opArr);
        if(result[0] === 19690720) {
            console.log("i = ", i)
            console.log("j = ", j)
            found = true
            break;
        }
    }
}