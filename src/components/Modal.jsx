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

	return (
		<Backdrop onClick={handleClose}>
			{type === "dropIn" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className="absolute top-28 left-[28%] z-[9999] w-5/12 rounded-lg bg-white px-4 py-3 dark:bg-[#1D2226]"
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
							src="/static/images/avatar/1.jpg"
							alt="Remy Sharp"
							sx={{ width: 46, height: 46 }}
							className=" bg-orange-500 hover:cursor-pointer"
						/>
						<p>Muchammad Rizky Solehudin</p>
					</div>

					<Form />
				</motion.div>
			)}

			{type === "gifYouUp" && (
				<motion.div
					onClick={(e) => e.stopPropagation()}
					className="fixed left-[3.6rem] top-14 z-[9999] flex  w-full max-w-6xl  rounded-xl  bg-white  dark:bg-[#1D2226]"
					variants={gifYouUp}
					initial="hidden"
					animate="visible"
					exit="exit">
					<img
						src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/nusa-penida.jpg"
						alt=""
						className="w-[70%] rounded-l-xl object-cover"
					/>

					<Post post={post} modalPost />
				</motion.div>
			)}
		</Backdrop>
	);
};

export default Modal;
