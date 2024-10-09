class Child{
 goodbye = true
   
    father(){
        console.log(`I can have parent1's ${this.property}`);
    }

    mother(){
        console.log(`I can have parent2's ${this.property}`)
    }
}
class Parent1 extends Child{
    property = "agriculture land"
}
class Parent2 extends Child{
    property = "villa"
}
const parent1 = new Parent1();
const parent2 = new Parent2();
console.log(parent1.goodbye);
console.log(parent2.goodbye);
parent1.father()
parent2.mother()
