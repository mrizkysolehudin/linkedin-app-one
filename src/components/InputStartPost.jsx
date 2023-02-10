import {
	Article,
	BusinessCenter,
	PhotoSizeSelectActual,
	VideoCameraBack,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const InputStartPost = () => {
	return (
		<div className="rounded-lg border border-gray-300 bg-white p-3 dark:border-none dark:bg-[#1D2226]">
			<section className="flex">
				<Avatar
					alt="Remy Sharp"
					src="/static/images/avatar/1.jpg"
					sx={{ width: 43, height: 43 }}
					className="cursor-pointer bg-orange-500"
				/>

				<input
					type="text"
					placeholder="Start a post"
					className="ml-2 w-full cursor-pointer rounded-full border border-gray-400 px-3 placeholder:font-semibold placeholder:text-gray-800 dark:border-gray-500 dark:bg-[#1D2226] dark:placeholder:text-gray-300 dark:hover:placeholder:text-gray-100 "
				/>
			</section>

			<section className="mt-3 flex justify-center gap-x-8 text-sm font-semibold">
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
