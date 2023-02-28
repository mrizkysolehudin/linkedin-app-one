import React from "react";

const HeaderItem = ({ title, Icon, className, active, home, smallScreen }) => {
	return (
		<div
			className={`relative  flex cursor-pointer ${
				smallScreen ? "gap-x-3" : "flex-col"
			} items-center transition duration-150   ${
				active
					? "text-black dark:text-white"
					: home
					? "text-gray-500 hover:text-gray-900"
					: "text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
			}`}>
			<Icon className={className} />

			<div className={`text-sm `}>{title}</div>

			{active && (
				<span className="mt-1 hidden h-0.5 w-[calc(100%+10px)] bg-black dark:bg-white lg:inline-flex" />
			)}
		</div>
	);
};

export default HeaderItem;
