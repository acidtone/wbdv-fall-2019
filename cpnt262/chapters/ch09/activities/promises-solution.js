function greet(callback) {
  return new Promise(function(resolve,reject){
    const data = {
      firstName: "John",
      lastName: "Wick",
      salutation: "Mr."
    }

    callback(data);
    resolve(); 
  })
}

function threat(data) {
  console.log(`You're dead, ${data.lastName}!`);
}

function formal(data){
  console.log(`Greetings, ${data.salutation} ${data.lastName}.`);
}

greet(threat).then(greet(formal));
