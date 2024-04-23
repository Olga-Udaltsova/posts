import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsAPI } from "../../api/postsAPI";

const initialState = {
  posts: {
    list: null,
    loading: false,
  },
  postForView: {
    postForView: null,
    loading: false,
  },
  freshPosts: {
    freshPost: null,
    loading: false,
  },
  pages: {
    quantity: null,
    loading: false,
  },
};

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return await postsAPI.fetchPosts();
});

export const getPostById = createAsyncThunk(
  "posts/fetchById",
  async (postId) => {
    return await postsAPI.fetchById(postId);
  }
);

export const getPostsByParameters = createAsyncThunk(
  "posts/fetchPostsByParameters",
  async (args) => {
    return await postsAPI.fetchPostsByParameters(args);
  }
);

export const getFreshPosts = createAsyncThunk(
  "posts/fetchFreshPosts",
  async (limit) => {
    return await postsAPI.fetchFreshPosts(limit);
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    editPost: (state, action) => {
      state.posts.list = state.posts.list.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
      state.freshPosts.freshPost = state.freshPosts.freshPost.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    },
    addPost: (state, action) => {
      const newPost = { ...action.payload };

      newPost.id = new Date().getTime();

      state.posts.list = state.posts.list
        ? [newPost, ...state.posts.list]
        : [newPost];

      state.freshPosts.freshPost = state.freshPosts.freshPost
        ? [newPost, ...state.freshPosts.freshPost]
        : [newPost];
    },
    showPost: (state, action) => {
      state.postForView = {
        postForView: action.payload,
        loading: false,
      };
    },
    deletePost: (state, action) => {
      state.posts.list = state.posts.list.filter(
        (post) => post.id !== action.payload.id
      );
      state.freshPosts.freshPost = state.freshPosts.freshPost.filter(
        (post) => post.id !== action.payload.id
      );
      state.postForView = {
        postForView: null,
        loading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostById.pending, (state, action) => {
      state.postForView = {
        loading: true,
      };
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.postForView = {
        postForView: action.payload,
        loading: false,
      };
    });
    builder.addCase(getPosts.pending, (state, action) => {
      state.pages = {
        loading: true,
      };
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.pages = {
        quantity: Math.ceil(action.payload.length / 10),
        loading: false,
      };
    });
    builder.addCase(getFreshPosts.pending, (state, action) => {
      state.freshPosts = {
        loading: true,
      };
    });
    builder.addCase(getFreshPosts.fulfilled, (state, action) => {
      state.freshPosts = {
        freshPost: action.payload,
        loading: false,
      };
    });
    builder.addCase(getPostsByParameters.pending, (state, action) => {
      state.posts = {
        loading: true,
      };
    });
    builder.addCase(getPostsByParameters.fulfilled, (state, action) => {
      state.posts = {
        list: action.payload,
        loading: false,
      };
    });
  },
});

export const { editPost, addPost, showPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
