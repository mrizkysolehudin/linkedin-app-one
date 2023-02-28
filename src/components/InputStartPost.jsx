import { modalState, modalTypeState } from "@/atoms/modalAtom";
import {
	Article,
	BusinessCenter,
	PhotoSizeSelectActual,
	VideoCameraBack,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const InputStartPost = () => {
	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [modalType, setModalType] = useRecoilState(modalTypeState);

	const { data: session } = useSession();

	return (
		<div className="rounded-lg border border-gray-300 bg-white p-3 dark:border-none dark:bg-[#1D2226]">
			<section className="flex">
				<Avatar
					alt={session?.user.name}
					src={session?.user.image}
					sx={{ width: 43, height: 43 }}
					className="cursor-pointer bg-orange-500"
				/>

				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.99 }}
					onClick={() => {
						setModalOpen(true);
						setModalType("dropIn");
					}}
					type="text"
					className="ml-2 w-full cursor-pointer rounded-full border border-gray-400 px-3 text-start font-semibold text-gray-800 dark:border-gray-500 dark:bg-[#1D2226] dark:text-gray-300 dark:hover:text-gray-100 ">
					Start a post
				</motion.button>
			</section>

			<section className="mt-3 flex justify-center gap-x-4 text-sm font-semibold sm:gap-x-8">
				<div className="group flex cursor-pointer items-center gap-x-2">
					<PhotoSizeSelectActual className="text-blue-500" />
					<p className="dark:opacity-70 dark:group-hover:opacity-90">
						Photo
					</p>
				</div>
				<div className="group flex cursor-pointer items-center gap-x-2">
					<VideoCameraBack className="text-green-500" />
					<p className="dark:opacity-70 dark:group-hover:opacity-90">
						Video
					</p>
				</div>
				<div className="group flex cursor-pointer items-center gap-x-2">
					<BusinessCenter className="text-blue-400" />
					<p className="dark:opacity-70 dark:group-hover:opacity-90">
						Job
					</p>
				</div>
				<div className="group flex cursor-pointer items-center gap-x-2">
					<Article className="text-red-500" />
					<p className="dark:opacity-70 dark:group-hover:opacity-90">
						Write Article
					</p>
				</div>
			</section>
		</div>
	);
};

export default InputStartPost;
