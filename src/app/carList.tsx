import { promises as fs } from "node:fs";
import Link from "next/link";
import type { CarEntity } from "..";

export async function get_data(): Promise<CarEntity[]> {
	const file = await fs.readFile(`${process.cwd()}/src/app/cars.json`, "utf8");
	const data = JSON.parse(file);
	console.log("数据总长度为", data.length);
	return data as Array<CarEntity>;
}

function makeBilibiliUrl(text: string) {
	const bilibili_url = `https://search.bilibili.com/all?vt=28149324&keyword=${text}&from_source=webtop_search&spm_id_from=333.788&search_source=5`;
	return bilibili_url;
}
export default async function Page() {
	const data = await get_data();
	const rows = data.map((item) => {
		const bilibili_url = {
			gt7: makeBilibiliUrl(`gt7 ${item.name}`),
			gt7_vr: makeBilibiliUrl(`gt7 vr ${item.name}`),
			gt7_none: makeBilibiliUrl(item.name),
		};
		return {
			name: item.name,
			brand: item.brand,
			gr_level: item.gr_level,
			bilibili_url: bilibili_url,
		};
	});

	return (
		<>
			{
				<div>
					<table>
						<tbody>
							{rows.map((item) => (
								<tr key={item.name}>
									<th className="text-left w-1/2">
										<a
											href={item.bilibili_url.gt7}
											target="_blank"
											rel="noreferrer"
										>
											{item.name}
										</a>
									</th>
									<th className="text-left w-3">
										<a
											href={item.bilibili_url.gt7_vr}
											target="_blank"
											rel="noreferrer"
										>
											VR
										</a>
									</th>
									<th className="text-left w-3">
										<a
											href={item.bilibili_url.gt7_none}
											target="_blank"
											rel="noreferrer"
										>
											All
										</a>
									</th>
									<th className="text-left w-3">
										<Link
											target="_blank"
											href={{
												pathname: "/player",
												query: { carName: item.name },
											}}
										>
											Player
										</Link>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			}
		</>
	);
}
