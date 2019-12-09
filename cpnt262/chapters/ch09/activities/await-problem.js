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

async function init() {
  await greet(threat);
  greet(formal);
}

init();

// greet(threat).then(greet(formal));
