import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Form from "./Form";

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

const Modal = () => {
	return (
		<Backdrop>
			<motion.div
				className="relative top-28 left-[28%] w-5/12 rounded-lg bg-white px-4 py-3 dark:bg-[#1D2226]"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit">
				<div className="flex justify-between dark:after:absolute dark:after:top-14 dark:after:left-0 dark:after:flex dark:after:w-full dark:after:bg-white/50 dark:after:pb-[0.5px]">
					<p className=" text-xl">Create a post</p>
					<div className="cursor-pointer rounded-full px-2 py-1.5 hover:bg-black/10 dark:hover:bg-white/10">
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
		</Backdrop>
	);
};

export default Modal;
