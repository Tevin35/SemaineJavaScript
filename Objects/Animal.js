export class Animal{

    //Le nom du constructeur est Nemo et le Type est poisson par défaut quand les infos ne sont pas remplis !
    constructor(name = "Nemo", type = "Poisson") {
        this.nom = name
        this.type = type
    }

    eat(food){
        console.log(this.nom + " mange " + food)
    }

}