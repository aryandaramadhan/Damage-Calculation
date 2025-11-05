function attack(damage){
    return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack){
    let totalDamage = 0;
    for(let i = 0; i < numberOfAttacks; i++){
        totalDamage += attack(damagePerAttack);
    }
    return totalDamage;
}
console.log(damageCalculation(9, 25));

console.log(damageCalculation(10, 4));

console.log(damageCalculation(5, 20));