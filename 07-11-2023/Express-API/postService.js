import fs from "node:fs/promises";

export const getPosts = async () => {
  const postsFIleURL = new URL("./data.json", import.meta.url);
  let fileContent = await fs.readFile(postsFIleURL, { encoding: "utf-8" });
  fileContent = JSON.parse(fileContent);
  return fileContent;
};

export const getPostByID = async (id) => {
  const posts = await getPosts();
  const selectedPosts = posts.find((post) => post.id == id);
  return selectedPosts;
};
