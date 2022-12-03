//import icon
import Image from 'next/image';
import down_arrow from '../../public/down_arrow.svg';
import { MoreButtonDiv, ButtonImage } from 'src/styles/compoStyles/buttonStyle';

const DownButton = ({ getMoreList }) => {
	return (
		<MoreButtonDiv>
			<ButtonImage onClick={() => getMoreList()}>
				<Image
					src={down_arrow}
					alt='button for more'
					width={40}
					height={40}
					//unoptimized={true}
					style={{
						objectFit: 'cover',
						layout: 'fill',
					}}
				/>
			</ButtonImage>
		</MoreButtonDiv>
	);
};

export default DownButton;
