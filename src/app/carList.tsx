async function get_data() {
	const data = require("./cars.json");
	console.log("数据总长度为", data.length);
	return data;
}

export default async function Page() {
	const data = await get_data();

	return <></>;
}
