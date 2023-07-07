import fs from "node:fs/promises";

let isPost = false;

//* ============= fetching comments =============
async function fetchComments(postid) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log("Fehler beim zweiten Fetch: ", err));
}

//* ============= fetching posts =============
function fetchingPost() {
  if (!isPost) {
    const dataPath = new URL("./data.json", import.meta.url);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(async (data) => {
        const formattedData = data.map(async (post) => {
          //* waiting for fetching comments is completed
          const fetchedData = await fetchComments(post.id);
          //* formating Data
          return {
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
            comments: fetchedData,
          };
        });
        //* waiting for formattedData is completed & creating file with content
        const result = await Promise.all(formattedData);
        fs.writeFile(dataPath, JSON.stringify(result, null, 2));
      })
      .catch((err) => {
        console.log("Fehler: ", err);
      });
    isPost = true;
  }
}
fetchingPost();

//* Level 2
// //* fetch Comments and create new folder & file
// let isComments = false;

// function fetchingComments() {
//   if (!isComments) {
//     const folderPath = new URL("./data", import.meta.url);
//     const commentsPath = new URL("./data/comments.json", import.meta.url);

//     fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//       .then((res) => res.json())
//       .then((data) => {
//         const formattedData = data.map((elm) => {
//           return {
//             comments: elm.body,
//           };
//         });
//         fs.mkdir(folderPath);
//         fs.writeFile(commentsPath, JSON.stringify(formattedData, null, 2));
//       })
//       .catch((err) => {
//         console.log("Fehler: ", err);
//       });
//   }
//   isComments = true;
// }
// fetchingComments();
