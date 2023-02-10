import { Delete, MoreHoriz, ThumbUpAltOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const Post = () => {
	const text = {
		desc: `Ubud is a town on the Indonesian island of Bali in Ubud
  District, located amongst rice paddies and steep ravines in
  the central foothills of the Gianyar regency. Promoted as an
  arts and culture centre, it has developed a large tourism
  industry.[2] It forms a northern part of the Greater
  Denpasar metropolitan area (known as Sarbagita). Ubud, often
  mistaken for a small city, is an administrative district
  (kecamatan) with a population of 74,800 (as of the 2020
  Census)[1] in an area of 42.38 km2. The central area of Ubud
  desa (village) has a population of 11,971 and an area of
  6.76 km2,[3] and receives more than three million foreign
  tourists each year.[4] The area surrounding the town is made
  up of small farms, rice paddies, agroforestry plantations,
  and tourist accommodations. As of 2018, more tourists
  visited Ubud than Denpasar in south.`,
	};

	return (
		<article className="mt-7 rounded-lg border border-gray-300 bg-white pt-3 pb-2 dark:border-none dark:bg-[#1D2226]">
			<section className="flex cursor-pointer items-center justify-between px-3">
				<div className="flex items-center gap-x-2">
					<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
						sx={{ width: 43, height: 43 }}
						className="bg-orange-500"
					/>

					<div className="text-gray-700">
						<p className="text-sm">mrizkysolehudin11@gmail.com</p>
						<p className="text-xs">4 days ago</p>
					</div>
				</div>

				<div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200/80">
					<MoreHoriz className="text-gray-600" />
				</div>
			</section>

			<section className="mt-2 ">
				<p className="px-3">
					{text.desc.length > 153
						? text.desc.substring(0, 153) + "...see more"
						: text.desc}
				</p>
				<img
					src="https://asset.kompas.com/crops/ffJyln67JC-ao7CbfeulSGxfcB0=/0x0:1080x720/750x500/data/photo/2020/04/16/5e97c509b1314.jpg"
					alt="img-post"
					className="w-full cursor-pointer pt-2"
				/>
			</section>

			<section className="mx-2 mt-4 flex font-semibold text-gray-600">
				<button className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded hover:bg-gray-200/90">
					<ThumbUpAltOutlined className="-scale-x-100" />
					<p>Like</p>
				</button>
				<button className=" flex h-11 w-1/2 items-center justify-center gap-x-2 rounded hover:bg-gray-200/90">
					<Delete className="-scale-x-100" />
					<p>Delete Post</p>
				</button>
			</section>
		</article>
	);
};

export default Post;
