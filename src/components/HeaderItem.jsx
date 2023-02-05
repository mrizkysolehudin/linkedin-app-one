import React from "react";

const HeaderItem = ({ title, Icon }) => {
	return (
		<div className="flex cursor-pointer flex-col items-center text-gray-500 transition duration-150 hover:text-gray-700">
			<Icon />

			<div className="text-sm">{title}</div>
		</div>
	);
};

export default HeaderItem;
