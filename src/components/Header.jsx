import Image from "next/image";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderItem from "./HeaderItem";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";

const Header = () => {
	return (
		<header className="fixed left-0 top-0 w-full bg-white py-1">
			<div className="mx-auto flex max-w-6xl justify-between px-9">
				<section className="relative flex w-2/12 items-center gap-x-6 ">
					<Image
						src="https://rb.gy/dpmd9s"
						alt="logo"
						width={45}
						height={45}
					/>

					<div className="flex items-center ">
						<SearchRoundedIcon />
						<p className="ml-1 text-sm text-gray-500">Search</p>
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

					<button className="relative flex w-12 items-center rounded-xl bg-gray-500">
						<span>🌜</span>

						<div className="absolute left-0.5 z-20 h-5 w-5 rounded-full bg-white"></div>

						<span className="absolute right-0">🌞</span>
					</button>
				</section>
			</div>
		</header>
	);
};

export default Header;
