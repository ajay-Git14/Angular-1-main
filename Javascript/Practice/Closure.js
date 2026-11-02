function outer() {
    let FirstName = "Rahul";
    let LastName = "Mishra";
    function inner(){
        console.log(FirstName + " " + LastName);
    }
    return inner;
}
let result = outer();
result();

function counter() {
    let count = 0;
    return function() {

        count++;

        console.log(count);
    };
}

let increment = counter();

increment();
increment();
increment();

function bankAccount() {

    let balance = 1000;

    return function() {
        console.log(balance);
    };
}

let checkBalance = bankAccount();

checkBalance();

function trainer(name) {

    return function() {
        console.log("Trainer : " + name);
    };
}

let trainer1 = trainer("Deepak");
let trainer2 = trainer("Rahul");

trainer1();
trainer2();


function createConfig(apiUrl) {

    return function() {
        console.log(apiUrl);
    };
}

let devConfig =
    createConfig("http://localhost:4200");

let prodConfig =
    createConfig("https://api.company.com");

devConfig();
prodConfig();


function createStudentTracker() {

    let totalStudents = 0;

    return function() {

        totalStudents++;

        console.log(
            "Total Students : "
            + totalStudents
        );
    };
}

let addStudent =
    createStudentTracker();

addStudent();
addStudent();
addStudent();


