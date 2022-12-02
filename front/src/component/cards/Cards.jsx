import { useState } from 'react';
//import Image from 'next/legacy/image';
import Image from 'next/image';
import { CardArticle, TextSection, Label } from 'src/styles/compoStyles/cardStyle';

const Card = ({ x }) => {
	//DATE formatting
	const formatDate = (period) => {
		const dt = new Date(period);
		return `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`;
	};

	//console.log(x);
	return (
		<>
			<CardArticle key={x._id}>
				<a target='_blank' href={'https://tickets.interpark.com/goods/' + x.href}>
					<div className='eachImg'>
						{/* <Image
							src={x.imgSrc}
							alt='logo'
							width={180}
							height={210}
							//unoptimized={true}
							style={{
								objectFit: 'cover',
								layout: 'fill',
							}}
						/> */}
						<Image
							src={x.imgSrc}
							fill
							alt={`${x.title} 전시 이미지`}
							sizes='(max-width: 180px) 100vw, '
							style={{
								objectFit: 'contain',
								layout: 'responsive',
							}}
						/>
					</div>
				</a>
				<TextSection>
					<>
						<Label size={55}>{x.title}</Label>
						<Label size={20}>
							{formatDate(x.period[0])} - {formatDate(x.period[1])}
						</Label>
						<Label size={50}>{x.place}</Label>
					</>
				</TextSection>
			</CardArticle>
		</>
	);
};

export default Card;
