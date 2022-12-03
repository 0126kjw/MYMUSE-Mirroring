import styled from '@emotion/styled';

const LoadingLayout = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: aqua;
`;
const Loading = () => {
	return (
		<>
			<LoadingLayout>
				<h1>로딩중입니다</h1>
			</LoadingLayout>
		</>
	);
};

export default Loading;
