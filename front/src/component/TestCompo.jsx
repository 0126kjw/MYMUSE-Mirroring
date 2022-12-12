//import { getMuseumLists } from 'pages/api/museum';
import { useEffect } from 'react';
import API from 'src/utils/api';
const { GetSearach } = API();
const TestCompo = () => {
	useEffect(() => {
		const getData = async () => {
			const data = await GetSearach('exhibition', '국립중앙');
			//console.log('search: ', data);
			//return result.data;
		};
		getData();
		// getData().then((res) => {
		// 	if (res == undefined) {
		// 		throw new Error();
		// 		//how to navigate Error page in Next.js?
		// 	}
		// 	const data = res;
		// 	return data;
		// });
	}, []);

	return (
		<>
			<div>API Testing (checking Console)--get complete</div>
		</>
	);
};

export default TestCompo;
