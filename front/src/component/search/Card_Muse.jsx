import { useState } from 'react';
import { useRouter } from 'next/router';
import { IdBook } from 'src/data/idBook';
import styled from '@emotion/styled';

export const Card_Muse_Layout = styled.div`
	width: 900px;
	height: 200px;
	background-color: whitesmoke;

	border: solid 3px black;
	margin: 50px auto;
	display: flex;

	.ImgSection {
		img {
			width: 300px;
			height: 200px;
			object-fit: fill;
		}
	}
	.TextSection {
		padding: 10px;
		overflow: hidden;
		.museName {
			margin: 10px;
			font-size: 20px;
		}
		.museDesc {
			margin: 10px;
		}
	}
	@media screen and (max-width: 1600px) {
		width: 75%;
		margin: 10px auto;
	}
	@media screen and (max-width: 900px) {
		width: 95%;
		height: 200%;
		display: block;
		/* margin: 10px auto; */
	}
	@media screen and (max-width: 300px) {
		.ImgSection {
			img {
				width: 200px;
				height: 130px;
			}
		}
		width: 95%;
		height: 200%;
		display: block;
	}
`;

const Card_Muse = ({ x }) => {
	const router = useRouter();

	// get ID
	let ID = '';
	IdBook.forEach((v) => {
		if (v.name == x.name) {
			ID = v.id;
		}
	});

	// 상세 페이지로
	const moveToDetail = () => {
		router.push(`/detail/${ID}`);
	};

	return (
		<>
			<Card_Muse_Layout key={x._id}>
				<div className='ImgSection'>
					<img
						src={`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${ID}_image01.jpg`}
						style={{}}
						onClick={moveToDetail}
					></img>
				</div>
				<div className='TextSection'>
					<div className='museName'>{x.name}</div>
					<div className='museDesc'>{x.description}</div>
				</div>
			</Card_Muse_Layout>
		</>
	);
};

export default Card_Muse;
