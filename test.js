class People {
    constructor(name) {
        this.name = name
    }
    say(){
        console.log("hello")
    }
}


var people = new People("老王")

console.log(people.name)
people.say()