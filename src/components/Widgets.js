import { FiberManualRecordRounded, InfoRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import TimeAgo from "timeago-react";

const Widgets = ({ articles }) => {
	return (
		<div className=" hidden w-[29%] lg:block">
			<section className="h-min rounded-lg border border-gray-300 bg-white pt-2 pb-2 dark:border-none dark:bg-[#1D2226]  ">
				<div className="mb-1 flex justify-between px-3 pb-1 font-bold">
					<h5>LinkedIn News</h5>
					<InfoRounded className="cursor-pointer" />
				</div>

				{articles.slice(0, 5).map((item, index) => (
					<articles
						key={index}
						className="flex cursor-pointer items-center py-2 px-2 hover:bg-gray-300/60 dark:hover:bg-gray-600/20">
						<FiberManualRecordRounded className="w-2" />
						<div className="ml-2 ">
							<p className=" text-sm font-semibold">
								{item.title.substring(0, 42)}...
							</p>
							<TimeAgo
								datetime={item.publishedAt}
								className="text-xs text-gray-500 dark:text-gray-400"
							/>
						</div>
					</articles>
				))}
			</section>

			<section className="sticky top-[89px] mt-4 h-64 w-full rounded-lg border border-gray-300 bg-white dark:border-none dark:bg-[#1D2226]">
				<Image
					src="https://rb.gy/kbfeaa"
					fill
					className="cursor-pointer object-contain"
				/>
			</section>
		</div>
	);
};

export default Widgets;
