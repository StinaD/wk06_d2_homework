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
    dinosaur3 = new Dinosaur('Stegosaurus', 'Herbivore', 60);
    park = new Park('Jurassic Park', 15, [dinosaur1, dinosaur2])
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
    park.removeDinosaur(dinosaur2.species);
    const actual = [dinosaur1.species, dinosaur3.species];
    assert.deepStrictEqual(actual, ['Zuul', 'Stegosaurus']);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDinosaur()
    assert.strictEqual(actual, 'Troodon')
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
