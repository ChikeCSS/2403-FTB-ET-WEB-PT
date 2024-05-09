/**
 * 👉 STEP 1: Add a method to the pet object called `hello` that logs 'Thor says hello' to the console
 *
 * 👉 STEP 2: Add a method to the pet object called `makeSound` that logs what sound the pet makes
 */

const pet = {
  name: "Thor",
  type: "cat",
  sound: "meow",
  hello: () => console.log("Thor says hello"),
  makeSound: function () {
    console.log(`${this.name} makes the sound ${this.sound}`);
  },
};

/**
 * 👉 STEP 3: Rewrite the pet object as a class
 *
 * hints:
 *      - the constructor will have the same properities as the pet object above
 *      - make sure to include the `makeSound` method as well
 */
class Pet {
  constructor(name, type, sound) {
    this.name = name;
    this.type = type;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes the sound ${this.sound}`);
  }

  setAge(age) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

/**
 * 👉 STEP 4: Create 2 pets using the Pet class and call the `makeSound` method for both
 */
const thor = new Pet("Thor", "cat", "meow");
thor.makeSound();
thor.setAge(7);
console.log("thor's age", thoe.getAge());

const deku = new Pet("Deku", "dog", "bark");
deku.makeSound();
deku.setAge(3);
console.log("Deku's age", deku.getAge());