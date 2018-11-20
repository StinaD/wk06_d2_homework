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
    if (this.dinosaurs[i] === dinosaur){
      this.dinosaurs.splice(i, 1);
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
  return mostPopular;
};


// Park.prototype.mostPopularDinosaur = function(){
//   let mostPopular = ''
//   for (let i = 1; i < this.dinosaurs.length; i++) {
//     for (let j = 0; j < i ; j++ );
//       if (this.dinosaurs[i] < this.dinosaurs[j]) {
//         mostPopular = this.dinosaur[j]
//       };
//   };
//   return mostPopular;
// };

Park.prototype.findBySpecies = function(species){
  let dinosaursBySpecies = [];
  for (const dino of this.dinosaurs) {
    if (dino.species === species ) {
        dinosaursBySpecies.push(dino)
    };
  };
  return dinosaursBySpecies;
};


Park.prototype.dailyVisitorCount = function(){
  let count = 0;
  for (const dino of this.dinosaurs) {
    count += dino.guestsAttractedPerDay
  };
  return count;
};

Park.prototype.annualVisitorCount = function(){
  let dailyCount = this.dailyVisitorCount();
  let annualCount = (dailyCount * 365);
  return annualCount;
};

Park.prototype.annualRevenue = function(){
  const tickets = this.annualVisitorCount();
  const revenue = (tickets * this.ticketprice);
  return revenue;
};


Park.prototype.removeBySpecies = function(type){
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === type) {
      this.dinosaurs.splice(i, 1);
    }
  }
};


Park.prototype.dinosaurDietInfo = function(){
  let diet = {'carnivore': 0, 'omnivore': 0, 'herbivore': 0};
  for (const dinosaur of this.dinosaurs) {
    diet[dinosaur.diet] = diet[dinosaur.diet] + 1;
  };
  return diet;
};


module.exports = Park;
