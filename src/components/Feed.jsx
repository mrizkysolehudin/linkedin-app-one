import { handlePostState, useSSRPostsState } from "@/atoms/postAtom";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import InputStartPost from "./InputStartPost";
import Post from "./Post";

const Feed = ({ posts }) => {
	const [realtimePosts, setRealtimePosts] = useState([]);
	const [handlePost, setHandlePost] = useRecoilState(handlePostState);
	const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("/api/posts", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const responseData = await response.json();

			setRealtimePosts(responseData);
			setHandlePost(false);
			setUseSSRPosts(false);
		};

		fetchPosts();
	}, [handlePost]);

	return (
		<div className="w-[95%] sm:w-2/3 lg:w-[44%]">
			<section>
				<InputStartPost />
			</section>

			<section className="-mt-1 pb-20">
				{!useSSRPosts
					? realtimePosts.map((post) => (
							<Post key={post._id} post={post} />
					  ))
					: posts.map((post) => <Post key={post._id} post={post} />)}
			</section>
		</div>
	);
};

export default Feed;
