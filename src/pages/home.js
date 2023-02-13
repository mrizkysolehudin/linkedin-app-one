import HeaderItem from "@/components/HeaderItem";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Link from "next/link";
import { signIn, getProviders } from "next-auth/react";

const home = ({ providers }) => {
	return (
		<div>
			<Head>
				<title>Home | LinkedIn App</title>
			</Head>

			<header className="mx-auto -mt-1 flex max-w-4xl justify-between">
				<section className="relative h-20 w-36 ">
					<Link href="/" className="">
						<Image src="https://rb.gy/vtbzlp" alt="logo" fill />
					</Link>
				</section>

				<section className="flex items-center  divide-gray-300  sm:divide-x">
					<div className="flex items-center gap-x-8 pr-4">
						<HeaderItem Icon={ExploreIcon} title="Discover" />
						<HeaderItem Icon={GroupIcon} title="People" />
						<HeaderItem
							Icon={OndemandVideoSharpIcon}
							title="Learning"
						/>
						<HeaderItem Icon={BusinessCenterIcon} title="Jobs" />
					</div>
					{Object.values(providers).map((provider, index) => (
						<div key={index}>
							<button
								onClick={() =>
									signIn(provider.id, {
										callbackUrl: "/",
									})
								}
								className="ml-4 rounded-full border border-blue-600 px-5 py-2 font-semibold text-blue-700 transition duration-150 hover:border-[1.5px]">
								Sign In
							</button>
						</div>
					))}
				</section>
			</header>

			<main className="mx-auto mt-12 max-w-6xl">
				<h1 className="text-5xl text-amber-800/80">
					Welcome to your <br />
					professional community
				</h1>

				<div className="relative h-full">
					<div className="z-10 mt-12 grid gap-5">
						<button className="flex w-[29rem] items-center justify-between rounded-lg bg-white px-4 py-4 text-xl shadow hover:shadow-xl">
							Search for a job
							<ArrowForwardIosRoundedIcon />
						</button>
						<button className="flex w-[29rem] items-center justify-between rounded-lg bg-white px-4 py-4 text-xl shadow hover:shadow-xl">
							Find a person you know
							<ArrowForwardIosRoundedIcon />
						</button>
						<button className="flex w-[29rem] items-center justify-between rounded-lg bg-white px-4 py-4 text-xl shadow hover:shadow-xl">
							Learn a new skill
							<ArrowForwardIosRoundedIcon />
						</button>
					</div>

					<div className="-z-1 absolute -top-40 right-0 h-[220%] w-[50%]">
						<Image src="https://rb.gy/vkzpzt" alt="img-home" fill />
					</div>
				</div>
			</main>
		</div>
	);
};

export async function getServerSideProps(context) {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}

export default home;
