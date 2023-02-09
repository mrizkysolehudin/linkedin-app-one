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
		<div className="rounded-lg border border-gray-300 bg-white p-3">
			<section className="flex">
				<Avatar
					alt="Remy Sharp"
					src="/static/images/avatar/1.jpg"
					sx={{ width: 43, height: 43 }}
					className="bg-orange-500"
				/>

				<input
					type="text"
					placeholder="Start a post"
					className="ml-2 w-full rounded-full border border-gray-400 px-3 placeholder:font-semibold placeholder:text-gray-800 "
				/>
			</section>

			<section className="mt-3 flex justify-center gap-x-8 text-sm font-semibold">
				<div className="flex gap-x-2">
					<PhotoSizeSelectActual className="text-blue-500" />
					<p>Photo</p>
				</div>
				<div className="flex gap-x-2">
					<VideoCameraBack className="text-green-500" />
					<p>Video</p>
				</div>
				<div className="flex gap-x-2">
					<BusinessCenter className="text-blue-400" />
					<p>Job</p>
				</div>
				<div className="flex gap-x-2">
					<Article className="text-red-500" />
					<p>Write Article</p>
				</div>
			</section>
		</div>
	);
};

export default InputStartPost;
