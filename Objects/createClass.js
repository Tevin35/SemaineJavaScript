import {Animal} from "./Animal.js";

//Création d'animaux avec un nom et un type
let medor = new Animal("Médor", "chien")
let felix = new Animal("Félix", "chat")
console.log(medor)

felix.age = 12;

console.log(felix)

felix.eat("Paté")
medor.eat("Félix")

//new animal() est vide il fait appel aux paramètres par défaut du constructeur animal()
let fish = new Animal();

//Je défini que le nom, du coup il va prendre le type par défaut qui est poisson
let fish2 = new Animal("Lulu");

console.log(fish)
console.log(fish2)