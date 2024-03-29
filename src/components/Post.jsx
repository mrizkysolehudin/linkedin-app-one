import { modalState, modalTypeState } from "@/atoms/modalAtom";
import { getPostsState, handlePostState } from "@/atoms/postAtom";
import {
	Delete,
	MoreHoriz,
	ThumbUpAltOutlined,
	ThumbUpAltRounded,
	ReplyRounded,
	CloseRounded,
	CommentRounded,
	CommentOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import TimeAgo from "timeago-react";

const Post = ({ post, modalPost }) => {
	const { data: session } = useSession();

	const [handlePost, setHandlePost] = useRecoilState(handlePostState);

	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [modalType, setModalType] = useRecoilState(modalTypeState);
	const [postsState, setPostsState] = useRecoilState(getPostsState);

	const [showInput, setShowInput] = useState(false);
	const [liked, setLiked] = useState(false);

	const truncate = (text) =>
		text.length > 153 ? text.substring(0, 153) + "...see more" : text;

	const deletePost = async () => {
		await fetch(`/api/posts/${post._id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		setHandlePost(true);
		setModalOpen(false);
	};

	return (
		<article
			className={clsx(
				modalPost
					? "w-full pr-1"
					: "mt-7 rounded-lg border border-gray-300 bg-white pt-3 pb-2 dark:border-none dark:bg-[#1D2226]"
			)}>
			<section
				className={clsx(
					modalPost
						? "flex w-full justify-between p-2"
						: "flex cursor-pointer items-center justify-between px-3"
				)}>
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

				{modalPost ? (
					<div
						onClick={() => setModalOpen(!modalOpen)}
						className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200/80 dark:hover:bg-gray-200/10">
						<CloseRounded className="text-gray-600 dark:text-gray-400" />
					</div>
				) : (
					<div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200/80 dark:hover:bg-gray-200/10">
						<MoreHoriz className="text-gray-600 dark:text-gray-400" />
					</div>
				)}
			</section>

			<section className={modalPost ? "mt-1" : "mt-2"}>
				{showInput || modalPost ? (
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
				{!modalPost && (
					<img
						onClick={() => {
							setModalOpen(modalState);
							setModalType("gifYouUp");
							setPostsState(post);
						}}
						src={post?.photoUrl}
						alt={post.photoUrl}
						className="w-full cursor-pointer pt-2"
					/>
				)}
			</section>

			<section className="mx-2 mt-4 flex font-semibold text-gray-600">
				{modalPost ? (
					<button className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded hover:bg-gray-200/90 dark:text-white/70 dark:hover:bg-black/30 dark:hover:text-white/90">
						<CommentOutlined />
						<p className="-mt-0.5">Comment</p>
					</button>
				) : liked ? (
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

				{session?.user?.email === post?.email ? (
					<button
						onClick={deletePost}
						className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded hover:bg-gray-200/90 focus:text-red-400 dark:text-white/70 dark:hover:bg-black/30 dark:hover:text-white/90">
						<Delete className="-scale-x-100" />
						<p>Delete Post</p>
					</button>
				) : (
					<button className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded hover:bg-gray-200/90 focus:text-blue-500  dark:text-white/70 dark:hover:bg-black/30 dark:hover:text-white/90">
						<ReplyRounded className="-scale-x-100" />
						<p>Share</p>
					</button>
				)}
			</section>

			{modalPost && <div className="mt-3 h-[0.2px] bg-gray-400/40" />}
		</article>
	);
};

export default Post;
