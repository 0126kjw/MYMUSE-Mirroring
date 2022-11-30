import { getMuseumLists } from 'pages/api/museum';
import { useEffect } from 'react';

const TestCompo = () => {
	useEffect(() => {
		const getData = async () => {
			const result = await getMuseumLists();
			console.log(result);
			return result.data;
		};
		getData().then((res) => {
			if (res == undefined) {
				throw new Error();
				//how to navigate Error page in Next.js?
			}
			const data = res;
			return data;
		});
	}, []);

	return (
		<>
			<div>API Testing (checking Console)--get complete</div>
		</>
	);
};

export default TestCompo;
