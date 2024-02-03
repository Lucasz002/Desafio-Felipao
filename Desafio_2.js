function calculateRankedMatches(victories, defeats) {
    let victoryBalance = victories - defeats;
    let level;

    if (victories < 10) {
        level = 'Iron';
    } else if (victories >= 11 && victories <= 20) {
        level = 'Bronze';
    } else if (victories >= 21 && victories <= 50) {
        level = 'Silver';
    } else if (victories >= 51 && victories <= 80) {
        level = 'Gold';
    } else if (victories >= 81 && victories <= 90) {
        level = 'Diamond';
    } else if (victories >= 91 && victories <= 100) {
        level = 'Legendary';
    } else if (victories > 100) {
        level = 'Immortal';
    }

    return `O Herói tem de saldo de ${victoryBalance} está no nível de ${level}.`;
}

console.log(calculateRankedMatches(15, 5));