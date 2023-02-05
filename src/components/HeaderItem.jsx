import React from "react";

const HeaderItem = ({ title, Icon, className, active }) => {
	return (
		<div
			className={`relative  flex cursor-pointer flex-col items-center  transition duration-150 hover:text-black ${
				active ? "text-black" : "text-gray-500"
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
