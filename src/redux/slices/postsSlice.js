import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 5,
      title: "Post 5",
      image:
        "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
    },
    {
      id: 4,
      title: "Post 4",
      image:
        "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
    },
    {
      id: 3,
      title: "Post 3",
      image:
        "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
    },
    {
      id: 2,
      title: "Post 2",
      image:
        "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
    },
    {
      id: 1,
      title: "Post 1",
      image:
        "https://i.pinimg.com/originals/e0/18/0f/e0180f82c6c5273050a86a282a597872.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia quasi soluta tenetur facere magni facilis tempora id? Perferendis in at minus quia porro quaerat veniam numquam molestias animi sit.",
    },
  ],
  postForView: null,
  freshPosts: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    editPost: (state, action) => {},
    getPost: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload);
    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3);
    },
    addPost: (state, action) => {},
  },
});

export const { setPosts, editPost, getPost, getFreshPosts, addPost } =
  postsSlice.actions;

export default postsSlice.reducer;
