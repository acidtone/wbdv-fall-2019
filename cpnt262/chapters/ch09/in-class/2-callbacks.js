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

function createPost(post, callback) {
  setTimeout(function(){
    posts.push(post);
    console.log('Post created');

    callback();
  }, 999); 
}

createPost(post, getPosts);

// getPosts();