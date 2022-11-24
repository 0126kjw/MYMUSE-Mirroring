import { MainContainer, MainTitleContainer } from 'styles/pageStyles/mainStyle';
//import AiBot from '../../component/common/aiBot'
// component
import SearchBar from './searchBar';
import Slider from './slider';

const Main = () => {
	return (
		<>
			<MainContainer>
				<MainTitleContainer />
				<SearchBar></SearchBar>
				<Slider></Slider>
				{/* <AiBot></AiBot> */}
			</MainContainer>
		</>
	);
};

export default Main;
