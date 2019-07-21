let Fighter = function (obj) {
  const max = 100;
  let name = obj.name;
  let hp = obj.hp;
  let damage = obj.damage;
  let agility = obj.agility;
  let win = 0;
  let loss = 0;

  this.getName = function() {
    return name;
  }

  this.getDamage = function() {
    return damage;
  }

  this.getAgility = function() {
    return agility;
  }

  this.getHealth = function() {
    return hp;
  }

  this.atack = function(defFighter) {
    let successfulAtack = Math.floor(Math.random() * (max + 1));
    let possibility = max - defFighter.getAgility();
    if (successfulAtack <= possibility && defFighter.getHealth('defFighter') > 0) {
      defFighter.dealDamage(this.getDamage());
      console.log(`${this.getName()} makes ${this.getDamage()} to ${defFighter.getName()}`)
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }

  this.logCombatHistory = function() {
    console.log(`Name: ${this.getName()}, Wins: ${win}, Losses: ${loss} `);
  }
  
  this.heal = function(health) {
    if (hp + health < obj.hp) {
      hp += health;
    } else { 
      hp = obj.hp;
    }
  }
  
  this.dealDamage = function (hpDamage) {
    if(this.getHealth() - hpDamage < 0) {
      hp = 0;
    } else {
      hp -= hpDamage;
    }
  }

  this.addWin = function() {    
    return win++;    
  }
  this.addLoss = function() {    
    return loss++;
  }
}

function battle(obj1, obj2) {
  if (obj1.getHealth() <= 0 ){
    console.log(`${obj1.getName()} is dead and can't fight`);
    return;
  } 
  
  if (obj2.getHealth() <= 0 ){
    console.log(`${obj2.getName()} is dead and can't fight`);
    return;
  }
  let objAtack = true;

  while (obj1.getHealth() > 0 && obj2.getHealth() > 0) {
    if(objAtack) {
      obj1.atack(obj2);
    }else{
      obj2.atack(obj1);
    } 
    objAtack =!objAtack;
  }

  if(obj1.getHealth() <= 0) {
    obj1.addLoss();
    obj2.addWin();
  } else {
    obj1.addWin();
    obj2.addLoss();
  }
}
const fighter1 = new Fighter({name: 'John', damage: 30, hp: 100, agility: 30});
const fighter2 = new Fighter({name: 'Jim', damage: 20, hp: 100, agility: 25});