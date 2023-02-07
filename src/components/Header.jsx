import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderItem from "./HeaderItem";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Header = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	const spring = {
		type: "spring",
		damping: 30,
		stiffness: 700,
	};

	// After mounting, we have access to the theme
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<header className="fixed left-0 top-0 z-50 w-full bg-white py-1 dark:bg-[#1D2226]">
			<div className="mx-auto flex max-w-6xl justify-between px-9">
				<section className="relative flex w-2/12 items-center gap-x-6 ">
					{mounted && (
						<>
							{resolvedTheme === "dark" ? (
								<Image
									src="https://rb.gy/bizvqj"
									alt="logo"
									width={45}
									height={45}
									priority
								/>
							) : (
								<Image
									src="https://rb.gy/dpmd9s"
									alt="logo"
									width={45}
									height={45}
								/>
							)}
						</>
					)}

					<div className="flex items-center ">
						<SearchRoundedIcon />
						<input
							placeholder="Search..."
							className="ml-1 h-8 rounded-xl border border-black px-3 text-sm text-gray-500 dark:border-white dark:text-white"
						/>
					</div>
				</section>

				<section className="flex items-center gap-x-6">
					<HeaderItem Icon={HomeRoundedIcon} title="Home" active />
					<HeaderItem Icon={GroupIcon} title="My Networks" />
					<HeaderItem Icon={BusinessCenterIcon} title="Jobs" />
					<HeaderItem Icon={ChatIcon} title="Messaging" />
					<HeaderItem
						Icon={NotificationsIcon}
						title="Notifications"
					/>
					<HeaderItem Icon={Avatar} title="Me" />
					<HeaderItem Icon={AppsOutlinedIcon} title="Work" />

					<button
						onClick={() =>
							setTheme(
								resolvedTheme === "dark" ? "light" : "dark"
							)
						}
						className={`relative flex w-[3.25rem] items-center rounded-2xl bg-gray-700 py-1 px-1 dark:bg-gray-600 ${
							resolvedTheme === "dark"
								? "justify-end"
								: "justify-start"
						}`}>
						<span className="absolute left-0">🌜</span>

						<motion.div
							layout
							transition={spring}
							className=" z-20 h-5 w-5 rounded-full bg-white"
						/>

						<span className="absolute right-0.5">🌞</span>
					</button>
				</section>
			</div>
		</header>
	);
};

export default Header;
