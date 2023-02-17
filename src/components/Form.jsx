import { modalState } from "@/atoms/modalAtom";
import { handlePostState } from "@/atoms/postAtom";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const Form = () => {
	const [inputPost, setInputPost] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");

	const { data: session } = useSession();
	const [modalOpen, setModalOpen] = useRecoilState(modalState);
	const [handlePost, setHandlePost] = useRecoilState(handlePostState);

	const uploadPost = async (e) => {
		e.preventDefault();

		const response = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({
				inputPost,
				photoUrl,
				userName: session.user.name,
				email: session.user.email,
				userImage: session.user.image,
				createdAt: new Date().toString(),
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		await response.json();

		setHandlePost(true);
		setModalOpen(false);
	};

	return (
		<form>
			<textarea
				value={inputPost}
				onChange={(e) => setInputPost(e.target.value)}
				rows="4"
				placeholder="What do you want to talk about?"
				className="mt-1 w-full p-2 outline-none disabled:bg-white/75 disabled:text-black/40 dark:bg-[#1D2226] dark:placeholder:text-white/60"></textarea>

			<input
				value={photoUrl}
				onChange={(e) => setPhotoUrl(e.target.value)}
				type="text"
				placeholder="Add a photo URL (optional)"
				className="w-[85%] py-1 px-2  outline-none dark:bg-[#1D2226] dark:placeholder:text-white/60"
			/>
			<button
				onClick={uploadPost}
				type="submit"
				disabled={!inputPost.trim() && !photoUrl.trim()}
				className="ml-2 rounded-3xl bg-blue-400 px-4 pb-1.5 pt-1 font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-white/40  disabled:text-black/40 dark:disabled:bg-white/60  dark:disabled:text-black/50">
				Post
			</button>
		</form>
	);
};

export default Form;
