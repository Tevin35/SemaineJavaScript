class User{

    //this, c'est mon élément d'instance
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    sayHello(){
        return "Bonjour " + this.firstname + " " + this.lastname;
    }

    sayGoodBye(){
        return "Bye bye " + this.firstname + " " + this.lastname;
    }

}

class Student extends User{

    constructor(firstname, lastname, age, promotion){
        super(firstname, lastname, age);
        this.promotion = promotion;
    }

    sayGoodBye() {
        return super.sayGoodBye() + " Promotion -> " + this.promotion;
    }

}

//polymorphisme ? -> chercher sur google
let stud1 = new Student("Henri", "Death", 5, "canapé")
console.log(stud1)
console.log(stud1.sayHello())
console.log(stud1.sayGoodBye())