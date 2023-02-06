import React from "react";

const HeaderItem = ({ title, Icon, className, active }) => {
	return (
		<div
			className={`relative  flex cursor-pointer flex-col items-center transition duration-150 hover:text-black dark:hover:text-white ${
				active
					? "text-black dark:text-white"
					: "text-gray-500 dark:text-gray-300"
			}`}>
			<Icon className={className} />

			<div className={`text-sm`}>{title}</div>

			{active && (
				<span className="mt-1 hidden h-0.5 w-[calc(100%+10px)] bg-black dark:bg-white lg:inline-flex" />
			)}
		</div>
	);
};

export default HeaderItem;
