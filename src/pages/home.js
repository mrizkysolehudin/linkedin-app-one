import HeaderItem from "@/components/HeaderItem";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Link from "next/link";
import { signIn, getProviders } from "next-auth/react";
import { CloseRounded, Menu } from "@mui/icons-material";

const home = ({ providers }) => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div>
			<Head>
				<title>Home | LinkedIn App</title>
			</Head>

			<header className="mx-auto -mt-1 flex max-w-4xl justify-between">
				<section className="relative top-4 left-4 h-20 w-36 ">
					<Link href="/" className="">
						<Image src="https://rb.gy/vtbzlp" alt="logo" fill />
					</Link>
				</section>

				<section className="lg:hidden">
					<div
						onClick={() => setOpenMenu(!openMenu)}
						className="m-4 flex items-center rounded-full bg-amber-800/20 p-2">
						<Menu className="h-5 w-5 text-black lg:h-10 lg:w-10" />
					</div>
				</section>

				{openMenu && (
					<div
						onClick={() => setOpenMenu(!openMenu)}
						className="absolute top-0 left-0 z-40 flex h-full w-full justify-end bg-black/30">
						<section
							onClick={(e) => e.stopPropagation()}
							className="absolute top-0 right-0 z-50 h-screen w-1/2 bg-blue-500">
							<div
								onClick={() => setOpenMenu(!openMenu)}
								className="absolute top-0 right-4 z-50 mt-2 -ml-1 flex items-center justify-center rounded-full  bg-white">
								<CloseRounded className="h-8 w-8 text-blue-500 lg:h-12 lg:w-12" />
							</div>

							<div className="mx-auto w-1/2 md:text-2xl md:font-semibold">
								<ul className=" mt-14 list-none ">
									<li className="mt-3">Discover</li>
									<li className="mt-3">People</li>
									<li className="mt-3">Learning</li>
									<li className="mt-3">Jobs</li>
								</ul>

								{Object.values(providers).map(
									(provider, index) => (
										<div key={index}>
											<button
												onClick={() =>
													signIn(provider.id, {
														callbackUrl: "/",
													})
												}
												className="mt-3">
												Sign In
											</button>
										</div>
									)
								)}
							</div>
						</section>
					</div>
				)}

				<section className="hidden items-center divide-gray-300 sm:divide-x  lg:flex">
					<div className=" flex items-center gap-x-8 pr-4">
						<HeaderItem Icon={ExploreIcon} title="Discover" home />
						<HeaderItem Icon={GroupIcon} title="People" home />
						<HeaderItem
							Icon={OndemandVideoSharpIcon}
							title="Learning"
							home
						/>
						<HeaderItem
							Icon={BusinessCenterIcon}
							title="Jobs"
							home
						/>
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

			<main className="mx-auto mt-12 max-w-xs sm:max-w-6xl">
				<h1 className="text-[1.75rem] font-bold text-amber-800/80 sm:text-5xl  sm:font-normal">
					Welcome to your <br />
					professional community
				</h1>

				<div className="relative h-full text-black">
					<div className="z-10 mt-12 grid  gap-5 sm:text-xl">
						<button className="flex w-[95%]  items-center justify-between rounded-lg bg-white px-4 py-4  shadow hover:shadow-xl sm:w-[29rem]">
							Search for a job
							<ArrowForwardIosRoundedIcon />
						</button>
						<button className="flex w-[95%] items-center justify-between rounded-lg bg-white px-4 py-4  shadow hover:shadow-xl sm:w-[29rem]">
							Find a person you know
							<ArrowForwardIosRoundedIcon />
						</button>
						<button className="flex w-[95%] items-center justify-between rounded-lg bg-white px-4 py-4  shadow hover:shadow-xl sm:w-[29rem]">
							Learn a new skill
							<ArrowForwardIosRoundedIcon />
						</button>
					</div>

					<div className="-z-1 absolute -top-40 right-0 hidden h-[220%] w-[50%] sm:block">
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
