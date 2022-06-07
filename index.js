// [CRUD] JavaScript
const messages = {
  users: [
    {
      username: "levxyca",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "levxyca",
      content: "Yep!",
    },
  ],
};

// CREATE
function createPost(data) {
  messages.posts.push({
    id: messages.posts.length + 1,
    owner: data.owner,
    content: data.content,
  });
}

createPost({ owner: "levxyca", content: "Bip bop!" });
console.log(messages.posts);

// READ
function readPosts() {
  return messages.posts;
}

console.log(readPosts());

// UPDATE
function updateContentPost(id, newContent) {
  const postUpdate = readPosts().find((postMessage) => {
    return postMessage.id === id;
  });

  console.log(postUpdate);
  postUpdate.content = newContent;
}

updateContentPost(1, "Wow!");

// DELETE

function deletePost(id) {
  const listPostsUpdated = readPosts().filter((postCurrent) => {
    return postCurrent.id !== id;
  });
  messages.posts = listPostsUpdated;
}

deletePost(2);
