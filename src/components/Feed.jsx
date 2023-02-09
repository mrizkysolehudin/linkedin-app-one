import React from "react";
import InputStartPost from "./InputStartPost";
import Post from "./Post";

const Feed = () => {
	return (
		<div className="h-screen w-[44%]">
			<section>
				<InputStartPost />
			</section>

			<section className="-mt-1 pb-20">
				<Post />
			</section>
		</div>
	);
};

export default Feed;
