var fs = require('fs');

let weights;
try {  
    var data = fs.readFileSync('day1/day1-data.txt', 'utf8');
    weights = data.toString();
} catch(e) {
    console.log('Error:', e.stack);
}

// Part 1
if(weights !== null) {
    let weightsArr = weights.split('\n');
    let cumulative = 0;
    weightsArr.forEach(function(item) {
        cumulative += Math.floor(item/3) - 2;
    })
    console.log("Cumulative needed for modules: " + cumulative);
}

// Part 2
if(weights !== null) {
    let weightsArr = weights.split('\n');
    let cumulative_fuel = 0;
    weightsArr.forEach(function(item) {
        let fuel_for_mod = Math.floor(item/3) - 2;
        cumulative_fuel += fuel_for_mod;
        
        while(fuel_for_mod > 0) {
            fuel_for_mod = Math.floor(fuel_for_mod/3) - 2;
            if(fuel_for_mod > 0 ) {
                cumulative_fuel += fuel_for_mod;
            }
        }
    });
    console.log("Cumulative needed for modules: " + cumulative_fuel);
}
