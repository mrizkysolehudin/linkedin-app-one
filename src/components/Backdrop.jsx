import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			onClick={onClick}
			className="absolute top-0 left-0 z-50 h-full w-screen bg-black/70"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			{children}
		</motion.div>
	);
};

export default Backdrop;
