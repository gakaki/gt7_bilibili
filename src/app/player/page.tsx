import { promises as fs } from "node:fs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { CarEntity } from "..";
import { get_data } from "../carList";

export default async function Page() {
	const searchParams = useSearchParams();
	const carName = searchParams.get("carName");

	const data = await get_data();
	const row = data.find((item) => item.name === carName);
	console.log(row);
// https://www.bilibili.com/read/cv7179492/
	const carSearchRows = (await fs.readFile(
		"./src/app/carSearch.json",
		"utf8",
	)) as unknown as CarEntity[];
	return (
		<>
			{
				<div className="container mx-auto p-4">
					<h1 className="text-3xl font-bold mb-6 text-center">Car Gallery</h1>
					{/* 使用 Tailwind CSS 创建每行5列的网格 */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
						{carSearchRows.map((car) => (
							<div key={car.name} className="bg-white rounded-lg shadow-lg p-4">
								{/* 显示车的图片 */}
								<img
									src={car.bilibiliURL.gt7}
									alt={car.name}
									className="w-full h-40 object-cover rounded-lg mb-4"
								/>
								{/* 显示车的名字 */}
								<h2 className="text-lg font-semibold text-center">
									{car.name}
								</h2>
							</div>
						))}
					</div>
				</div>
			}
		</>
	);
}
