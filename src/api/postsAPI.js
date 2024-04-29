export const postsAPI = {
  fetchPosts(args) {
    try {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?_sort=id&_order=${args.order}&q=${args.search}`
      )
        .then((response) => response.json())
        .then((posts) => posts);
    } catch (ex) {
      console.log(ex);
    }
  },

  fetchPostsByParameters(args) {
    try {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?_sort=id&_order=${args.order}&_page=${args.page}`
      )
        .then((response) => response.json())
        .then((posts) => posts);
    } catch (ex) {
      console.log(ex);
    }
  },

  fetchFreshPosts(limit = 3) {
    try {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`
      )
        .then((response) => response.json())
        .then((freshPost) => freshPost);
    } catch (ex) {
      console.log(ex);
    }
  },

  fetchById(id) {
    try {
      if (!id) {
        throw new Error("Id is broken");
      }
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => post);
    } catch (ex) {
      console.log(ex);
    }
  },
};
