//Dummy Test Page
//styling
import cssUnit from 'lib/cssUnit';
import { Section, Wrap } from 'styles/common';
import { MainContainer } from 'styles/pageStyles/mainStyle';
import TestCompo from 'component/TestCompo';
import TitleSection from 'component/common/TitleSection';

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
