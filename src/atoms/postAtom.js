import { atom } from "recoil";

export const handlePostState = atom({
	key: "handlePostState",
	default: false,
});

export const getPostsState = atom({
	key: "getPostsState",
	default: {},
});

export const useSSRPostsState = atom({
	key: "useSSRPostsState",
	default: true,
});
