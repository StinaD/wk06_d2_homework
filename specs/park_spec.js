const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');


describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Zuul', 'Omnivore', 40);
    dinosaur2 = new Dinosaur('Troodon', 'Carnivore', 50);
    dinosaur3 = new Dinosaur('T-rex', 'Carnivore', 45);
    dinosaur4 = new Dinosaur('Stegosaurus', 'Herbivore', 30);
    dinosaur5 = new Dinosaur('Stegosaurus', 'Herbivore', 20);
    park = new Park('Jurassic Park', 15, [dinosaur1, dinosaur2,])
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketprice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur3);
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, 'Troodon');
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    let foundDinosaurs = park.findBySpecies('Stegosaurus')
    assert.strictEqual(foundDinosaurs.length, 2);
  });

  it('should be able to calculate visitors per day', function(){
    const actual = park.dailyVisitorCount();
    assert.strictEqual(actual, 90)
  });

  it('should be able to calculate visitors per year', function(){
    const actual = park.annualVisitorCount();
    assert.strictEqual(actual, 32850);
  });

  it('should be able to calculate annual revenue', function(){
    const actual = park.annualRevenue();
    assert.strictEqual(actual, 492750);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeBySpecies('T-rex');
    assert.strictEqual(park.dinosaurs.length, 3);
  });

  it('should return object with dinosaur diet info', function(){
    const actual = park.dinosaurDietInfo();
    assert.deepStrictEqual(actual, {'Omnivore': 1, 'Carnivore': 1, 'Herbivore': 0});
  });

});
