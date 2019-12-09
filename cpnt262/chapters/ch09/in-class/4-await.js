const posts = [
  {
    title: "Post One",
    postBody: "This is Post One"
  },
  {
    title: "Post Two",
    postBody: "This is Post Two"
  }
];

const post = {
    title: "Post Three",
    postBody: "This is Post Three"
  };

function getPosts() {
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post,index){
      output += `${post.title}\n`;
    });

    console.log(output);

  }, 1000);
}

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      posts.push(post);
      console.log('Post created');

      const error = false;

      if (!error) {
        // invoke .then
        resolve();
      } else {
        // invoke .catch
        reject('Error: something bad happened');
      }
    }, 999); 

  })
}

async function init() {
  await createPost(post);
  getPosts();
}

init();

// createPost(post)
//   .then(getPosts)
//   .catch(function(error){console.log(error)});

// getPosts();