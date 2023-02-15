import React from "react";

const Backdrop = ({ children }) => {
	return (
		<div className="absolute z-50 h-full w-screen bg-black/70">
			{children}
		</div>
	);
};

export default Backdrop;
