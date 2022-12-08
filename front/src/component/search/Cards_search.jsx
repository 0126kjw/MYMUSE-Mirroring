import { useState } from 'react';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { CardArticle, TextSection, Label } from 'src/styles/compoStyles/cardStyle';
import { IdBook } from 'src/data/idBook';

const Card = ({ x }) => {
	const router = useRouter();

	// get ID
	let ID = '';
	IdBook.forEach((v) => {
		if (v.name == x.name) {
			ID = v.id;
		}
	});

	// 상세 페이지 이동
	const moveToDetail = () => {
		router.push(`/detail/${ID}`);
	};
	// 박물관 페이지 이동
	const moveToWebsite = (url) => {
		window.open(url, '_blank');
	};

	return (
		<>
			<CardArticle key={x._id}>
				<div className='eachImg'>
					{/* <Image
						onClick={() => router.push(`/detail/${x.id}`)}
						src='https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/50_image01.jpg'
						fill
						alt={`${x.name} 박물관 이미지`}
						sizes='(max-width: 180px) 100vw, '
						style={{
							objectFit: 'contain',
							layout: 'responsive',
						}}
					/> */}
					<img
						src={`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${ID}_image01.jpg`}
						style={{
							// maxWidth: '300px',
							width: '300px',
							// height: '300px',
							objectFit: 'contain',
						}}
						onClick={moveToDetail}
					></img>
				</div>
				<TextSection>
					<>
						<Label size={55}>{x.name}</Label>
						<Label
							size={40}
							style={{
								cursor: 'pointer',
								fontSize: '15px',
							}}
							onClick={() => {
								moveToWebsite(x.website);
							}}
						>
							{x.website}
						</Label>
						<Label size={40}>{x.newAddress}</Label>
					</>
				</TextSection>
			</CardArticle>
		</>
	);
};

export default Card;
