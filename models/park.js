const Park = function (name, ticketprice, dinosaurs){
  this.name = name;
  this.ticketprice = ticketprice;
  this.dinosaurs = dinosaurs
};


Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur){
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === dinosaur.species){
      this.dinosaur.splice(i, 1);
      break;
    }
  }
};

Park.prototype.mostPopularDinosaur = function(){
  let mostPopular = ''
  let visitors = 0
  for (const dino of this.dinosaurs) {
      if (dino.guestsAttractedPerDay > visitors) {
        vistors = dino.guestsAttractedPerDay;
        mostPopular = dino.species;
      }
  };
  return mostPopular
};


module.exports = Park;
