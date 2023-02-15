import React from "react";

const Form = () => {
	return (
		<form>
			<textarea
				rows="4"
				placeholder="What do you want to talk about?"
				className="mt-1 w-full p-2 outline-none disabled:bg-white/75 disabled:text-black/40 dark:bg-[#1D2226] dark:placeholder:text-white/60"></textarea>

			<input
				type="text"
				placeholder="Add a photo URL (optional)"
				className="w-[85%] py-1 px-2  outline-none dark:bg-[#1D2226] dark:placeholder:text-white/60"
			/>
			<button
				type="submit"
				className="ml-2 rounded-3xl bg-blue-400 px-4 pb-1.5 pt-1 font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-white/40  disabled:text-black/40 dark:disabled:bg-white/60  dark:disabled:text-black/50">
				Post
			</button>
		</form>
	);
};

export default Form;
