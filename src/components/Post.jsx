import {
	Delete,
	MoreHoriz,
	ThumbUpAltOutlined,
	ThumbUpAltRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useState } from "react";
import TimeAgo from "timeago-react";

const Post = ({ post }) => {
	const [showInput, setShowInput] = useState(false);
	const [liked, setLiked] = useState(false);

	const truncate = (text) =>
		text.length > 153 ? text.substring(0, 153) + "...see more" : text;

	return (
		<article className="mt-7 rounded-lg border border-gray-300 bg-white pt-3 pb-2 dark:border-none dark:bg-[#1D2226]">
			<section className="flex cursor-pointer items-center justify-between px-3">
				<div className="flex items-center gap-x-2">
					<Avatar
						alt={post.userName}
						src={post.userImg}
						sx={{ width: 43, height: 43 }}
						className="bg-orange-500"
					/>

					<div className="group text-gray-700 dark:text-white/70 ">
						<p className="text-sm dark:group-hover:text-white/90">
							{post.email}
						</p>
						<TimeAgo
							datetime={post.createdAt}
							className="block text-xs text-gray-700/70 dark:text-white/70 dark:group-hover:text-white/90"
						/>
					</div>
				</div>

				<div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200/80 dark:hover:bg-gray-200/10">
					<MoreHoriz className="text-gray-600 dark:text-gray-400" />
				</div>
			</section>

			<section className="mt-2 ">
				{showInput ? (
					<p
						onClick={() => setShowInput(!showInput)}
						className="px-3 dark:text-white/90">
						{post?.input}
					</p>
				) : (
					<p
						onClick={() => setShowInput(!showInput)}
						className="px-3 dark:text-white/90">
						{truncate(post?.input)}
					</p>
				)}
				<img
					src={post?.photoUrl || null}
					alt={post.photoUrl}
					className="w-full cursor-pointer pt-2"
				/>
			</section>

			<section className="mx-2 mt-4 flex font-semibold text-gray-600">
				{liked ? (
					<button
						onClick={() => setLiked(!liked)}
						className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded text-blue-500 hover:bg-gray-200/90 dark:hover:bg-black/30 dark:hover:text-white/90">
						<ThumbUpAltRounded className="-scale-x-100" />
						<p>Like</p>
					</button>
				) : (
					<button
						onClick={() => setLiked(!liked)}
						className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded hover:bg-gray-200/90 dark:text-white/70 dark:hover:bg-black/30 dark:hover:text-white/90">
						<ThumbUpAltOutlined className="-scale-x-100" />
						<p>Like</p>
					</button>
				)}
				<button className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded hover:bg-gray-200/90 dark:text-white/70 dark:hover:bg-black/30 dark:hover:text-white/90">
					<Delete className="-scale-x-100" />
					<p>Delete Post</p>
				</button>
			</section>
		</article>
	);
};

export default Post;
