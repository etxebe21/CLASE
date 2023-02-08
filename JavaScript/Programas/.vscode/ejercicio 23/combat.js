
function combat(attacker, defender)
{
    const damage = attacker.level * attacker.strength + attacker.spell.damage;
    defender.life -= damage;
    attacker.mana -= attacker.spell.points;


}

function showAttr(mage)
{
    console.log("Name: " + mage.name);
    console.log("Life: " + mage.life);
    console.log("mana: " + mage.mana);
    console.log("strength: " + mage.strength);
    console.log("level: " + mage.level);
    console.log("spell: " + mage.spell);
    
}

export {
    combat, showAttr
}