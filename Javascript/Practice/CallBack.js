console.log("Hello");
setTimeout(() => {
    console.log("World");
}, 2000);

setTimeout(function() {
    console.log("World");
}, 2000);

function callBack() {
    console.log("World");
}

setTimeout(callBack, 2000);


console.log("End");