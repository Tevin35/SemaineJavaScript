

let sport = {
    nom : "Curling",
    description : "Pétanque sur glace",
    nbJoueurs : 3
}
console.log(sport);
console.log(sport.nom);
console.log(sport['description']);
sport.pays="Jamaïque"
console.log(sport);

let sport2 = {
    nom : "Badminton",
    description : "Jeu de raquettes",
    nbJoueurs : 2,
    afficher: function() {
    console.log("Sport = " + this.nom + ", description = " + this.description)
    }
}

sport2.afficher()