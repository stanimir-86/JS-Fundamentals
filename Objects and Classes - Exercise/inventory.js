function inventory(input) {

    let result = [];

    for (let elements of input) {
        let [hero, level, items] = elements.split(" / ");
        let heroes = {
            hero: hero,
            level: level,
            items: items.split(", ")
        }
        result.push(heroes);
    }

    result.sort((a, b) => a.level - b.level);

    for (let heroes of result) {

        console.log(`Hero: ${heroes.hero}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items.join(", ")}`);
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);