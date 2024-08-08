type Post = { id: string; title: string; description: string; date: string };

let posts: Post[] = [];

export const getPosts = () => posts;

export const addPost = (post: Post) => {
  posts.push(post);
};
export const deletePost = (id: string) => {
  posts.filter((post) => post.id !== id);
};
export const updatePost = (id: string, title: string, description: string) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    (post.title = title), (post.description = description);
  } else {
    throw new Error("No post found");
  }
};

export const getPostById = (id: string) => {
  return posts.filter((post) => post.id === id);
};
