import { AddRounded, Bookmark } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const SideBar = () => {
	const { data: session } = useSession();

	return (
		<div className="hidden sm:block lg:w-[19%]">
			<article className="overflow-hidden rounded-lg border border-gray-300 bg-white dark:border-none dark:bg-[#1D2226]">
				<section className="relative left-0 top-0  z-10 flex h-14 w-full justify-center">
					<Image
						src="https://rb.gy/i26zak"
						alt="bg-profile"
						fill
						className=""
					/>

					<Avatar
						onClick={signOut}
						alt="profile-photos"
						src={session?.user?.image}
						sx={{ width: 56, height: 56 }}
						className="top-5 border-[1.5px] border-gray-200 bg-orange-500 hover:cursor-pointer"
					/>
				</section>

				<section className="mt-10 text-center">
					<p className="font-medium hover:cursor-pointer hover:underline hover:decoration-blue-500 dark:font-normal dark:text-white/90">
						{session?.user?.name.substring(0, 15)}
					</p>
					<p className="text-sm text-gray-500 dark:text-white/70">
						{session?.user?.email}
					</p>
				</section>

				<section
					className="mx-3 mt-7 cursor-pointer text-sm font-semibold text-gray-800 dark:opacity-70 dark:hover:opacity-90
">
					<div className="  flex   justify-between">
						<p className="dark:text-white ">
							Who viewed your profile
						</p>
						<p className="text-blue-500">221</p>
					</div>

					<div className="flex justify-between  ">
						<p className="dark:text-white">Views of your post</p>
						<p className="text-blue-500">1,232</p>
					</div>
				</section>

				<section className="mx-3 mt-6 cursor-pointer opacity-70 hover:opacity-90">
					<p className="text-xs ">
						Access exclusive tools & insights
					</p>
					<div className="relative flex items-center gap-x-2 text-sm font-semibold">
						<div className="top-0 left-0 h-3 w-3 rounded-sm bg-gradient-to-tr from-yellow-700 to-yellow-300"></div>{" "}
						<p>Try Premium for free</p>
					</div>
				</section>

				<section className="ml-2 mt-6 mb-3 flex cursor-pointer gap-x-1 text-sm font-semibold opacity-70 hover:opacity-90">
					<div>
						<Bookmark />
					</div>
					<p>My items</p>
				</section>
			</article>

			<article className="sticky top-[89px] left-0 mt-2 rounded-md border border-gray-300 bg-white  py-2  font-semibold text-blue-500 dark:border-none dark:bg-[#1D2226]">
				<div className="grid gap-y-2 px-2 pb-2 text-sm">
					<p className="cursor-pointer  hover:underline hover:decoration-blue-400 hover:decoration-1">
						Groups
					</p>
					<div className="flex justify-between">
						<p className="cursor-pointer  hover:underline hover:decoration-blue-400 hover:decoration-1">
							Events
						</p>
						<div>
							<AddRounded className="text-xl font-normal text-black dark:text-gray-300" />
						</div>
					</div>
					<p className="-mt-1 cursor-pointer hover:underline hover:decoration-blue-400 hover:decoration-1">
						Followed Hashtags
					</p>
				</div>

				<div className="cursor-pointer pt-3 pb-1 text-center text-sm text-gray-500/80 hover:text-gray-500 dark:border-t dark:border-gray-700 dark:text-gray-300 dark:hover:text-white">
					Discover More
				</div>
			</article>
		</div>
	);
};

export default SideBar;
