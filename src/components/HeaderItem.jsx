import { useSession } from "next-auth/react";
import React from "react";

const HeaderItem = ({ title, Icon, active, home, smallScreen, avatar }) => {
	const { data: session } = useSession();

	return (
		<div
			className={`relative  flex cursor-pointer py-1 ${
				smallScreen ? "gap-x-3" : "flex-col"
			} items-center transition duration-150   ${
				active
					? "text-black dark:text-white"
					: home
					? "text-gray-500 hover:text-gray-900"
					: "text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
			}`}>
			{avatar ? (
				<Icon src={session?.user?.image} className="h-8 w-8" />
			) : (
				<Icon className="h-8 w-8" />
			)}

			<div
				className={`text-sm ${
					smallScreen ? "text-white dark:text-gray-300" : ""
				}`}>
				{title}
			</div>

			{active && (
				<span className="mt-1 hidden h-0.5 w-[calc(100%+10px)] bg-black dark:bg-white lg:inline-flex" />
			)}
		</div>
	);
};

export default HeaderItem;
