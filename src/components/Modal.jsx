import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Form from "./Form";
import Post from "./Post";
import { useRecoilValue } from "recoil";
import { getPostsState } from "@/atoms/postAtom";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

const gifYouUp = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.2,
			ease: "easeIn",
		},
	},
	exit: {
		opacity: 0,
		scale: 0,
		transition: {
			duration: 0.15,
			ease: "easeOut",
		},
	},
};

const Modal = ({ type, handleClose }) => {
	const post = useRecoilValue(getPostsState);

	console.log(post);

	return (
		<Backdrop onClick={handleClose}>
			{type === "dropIn" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className="absolute top-28 left-4 z-[9999] w-11/12 rounded-lg bg-white px-4 py-3 dark:bg-[#1D2226] sm:left-[28%] sm:w-5/12"
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit">
					<div className="flex justify-between dark:after:absolute dark:after:top-14 dark:after:left-0 dark:after:flex dark:after:w-full dark:after:bg-white/50 dark:after:pb-[0.5px]">
						<p className=" text-xl">Create a post</p>
						<div
							onClick={handleClose}
							className="cursor-pointer rounded-full px-2 py-1.5 hover:bg-black/10 dark:hover:bg-white/10">
							<CloseRoundedIcon className="text-black/70 dark:text-white/90" />
						</div>
					</div>
					<div className="mt-5 flex items-center gap-x-2">
						<Avatar
							src={post.userImg}
							alt={post.userName}
							sx={{ width: 46, height: 46 }}
							className=" bg-orange-500 hover:cursor-pointer"
						/>
						<p>{post.userName}</p>
					</div>

					<Form />
				</motion.div>
			)}

			{type === "gifYouUp" && (
				<>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						className="fixed left-[3.6rem] top-14 z-[9999] hidden w-full  max-w-6xl rounded-xl  bg-white  dark:bg-[#1D2226]  sm:flex"
						variants={gifYouUp}
						initial="hidden"
						animate="visible"
						exit="exit">
						<img
							src={post.photoUrl}
							alt=""
							className="w-[70%] rounded-l-xl object-cover"
						/>

						<Post post={post} modalPost />
					</motion.div>

					{/* mobile screen */}
					<motion.div
						onClick={(e) => e.stopPropagation()}
						className="fixed left-[3.6rem] top-48 z-[9998]  w-full  max-w-6xl rounded-xl  bg-transparent  sm:hidden"
						variants={gifYouUp}
						initial="hidden"
						animate="visible"
						exit="exit">
						<div
							onClick={handleClose}
							className="absolute -top-3 right-[100px] flex rounded-full border-2 border-white ">
							<CloseRoundedIcon className="h-4 w-4" />
						</div>
						<img
							src={post.photoUrl}
							alt=""
							className="w-[70%] rounded-md object-cover"
						/>
					</motion.div>
				</>
			)}
		</Backdrop>
	);
};

export default Modal;
