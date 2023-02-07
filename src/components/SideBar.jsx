import { AddRounded, Bookmark } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

const SideBar = () => {
	return (
		<div className="w-[19%]">
			<article className="overflow-hidden rounded-lg border border-gray-300 bg-white">
				<section className="relative left-0 top-0  z-10 flex h-14 w-full justify-center">
					<Image
						src="https://rb.gy/i26zak"
						alt="bg-profile"
						fill
						className=""
					/>

					<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
						sx={{ width: 56, height: 56 }}
						className="top-5 border-[1.5px] border-gray-200 bg-orange-500"
					/>
				</section>

				<section className="mt-10 text-center">
					<p className="font-medium hover:underline hover:decoration-blue-500">
						Muchammad Rizky
					</p>
					<p className="text-sm text-gray-500">
						mrizkysolehudin11@gmail.com
					</p>
				</section>

				<section className="mx-3 mt-7 text-sm font-semibold text-gray-800">
					<div className="  flex justify-between ">
						<p>Who viewed your profile</p>
						<span className="text-blue-500">221</span>
					</div>

					<div className="flex justify-between ">
						<p>Views of your post</p>
						<span className="text-blue-500">1,232</span>
					</div>
				</section>

				<section className="mx-3 mt-6 opacity-90 hover:opacity-100">
					<p className="text-xs ">
						Access exclusive tools & insights
					</p>
					<p className="relative flex items-center gap-x-2 text-sm font-semibold">
						<div className="top-0 left-0 h-3 w-3 rounded-sm bg-gradient-to-tr from-yellow-700 to-yellow-300"></div>{" "}
						<p>Try Premium for free</p>
					</p>
				</section>

				<section className="ml-2 mt-6 mb-3 flex gap-x-1 text-sm font-semibold opacity-90 hover:opacity-100">
					<Bookmark />
					<p>My items</p>
				</section>
			</article>

			<article className="mt-2 rounded-md border border-gray-300 bg-white px-2 py-2  font-semibold text-blue-500">
				<div className="grid gap-y-2 text-sm">
					<p>Groups</p>
					<div className="flex justify-between">
						<p>Events</p>

						<AddRounded className="text-xl font-normal text-black" />
					</div>
					<p>Followed Hashtags</p>
				</div>

				<div className="mt-5 pb-1 text-center text-sm text-gray-500">
					Discover More
				</div>
			</article>
		</div>
	);
};

export default SideBar;
