//Dummy Test Page
//styling
import cssUnit from 'src/lib/cssUnit';
import { Section, Wrap } from 'src/styles/common';
import { MainContainer } from 'src/styles/pageStyles/mainStyle';
import TestCompo from 'src/component/TestCompo';
import TitleSection from 'src/component/common/TitleSection';

const Test = () => {
	return (
		<>
			<MainContainer>
				<TitleSection>
					<Wrap>
						<h1>TESTING PAGE</h1>
						<Section size={'150px'} color={cssUnit.colors.DarkGold}>
							<TestCompo />
						</Section>
						<Section size={'150px'} color={cssUnit.colors.White}>
							<span> Add testing component . . . . </span>
						</Section>
					</Wrap>
				</TitleSection>
			</MainContainer>
		</>
	);
};

export default Test;
