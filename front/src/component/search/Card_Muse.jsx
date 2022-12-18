import { useState } from 'react';
import { useRouter } from 'next/router';
import { IdBook } from 'src/data/idBook';
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const Card_Muse_Layout = styled.div`
	width: 900px;
	height: 200px;
	background-color: whitesmoke;
	padding: 10px;

	border: solid 2px ${cssUnit.colors.Gray};
	margin: 50px auto;
	display: flex;

	word-break: keep-all;

	.ImgSection {
		img {
			width: 300px;
			height: 200px;
			object-fit: fill;
		}
		@media screen and (max-width: 600px) {
			overflow: hidden;
		}
	}
	.TextSection {
		//width: calc(100% - 300px);
		width: 900px;
		overflow: hidden;

		.museName {
			margin: 10px;
			font-size: ${cssUnit.fontSize.medium};
			font-family: ${cssUnit.fontFamily.Hahmlet};

			@media screen and (max-width: 600px) {
				//width: 90%;

				word-break: keep-all;
			}
		}
		.museDesc {
			font-family: ${cssUnit.fontFamily.PreTended};
			font-weight: 300;
			line-height: 150%;
			text-align: left;

			text-overflow: ellipsis;
			overflow: hidden;

			margin: 50px 30px 30px 30px;

			word-break: keep-all;

			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;

			@media screen and (max-width: 600px) {
				width: 90%;
				margin: 50px 10px 30px 10px;
			}
		}
	}
	@media screen and (max-width: 1600px) {
		//width: 85%;
		margin: 30px auto;
	}

	@media screen and (max-width: 1100px) {
		width: 90%;
		height: 400px;
		display: block;
		overflow: hidden;
		.TextSection {
			width: 100%;
		}
	}

	@media screen and (max-width: 600px) {
		width: 90%;
		height: 500px;
	}

	@media screen and (max-width: 300px) {
		.ImgSection {
			img {
				width: 250px;
				height: 166px;
			}
		}
		width: 85%;
		height: 200%;
	}

	:hover {
		border: solid 2px ${cssUnit.colors.DarkGold};
		background-color: ${cssUnit.colors.RealLightGray};
		padding: 10px;
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
			<Card_Muse_Layout key={x._id} onClick={moveToDetail} style={{ cursor: 'pointer' }}>
				<div className='ImgSection'>
					<img
						src={`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${ID}_image01.jpg`}
						style={{ cursor: 'pointer' }}
						onClick={moveToDetail}
					></img>
				</div>
				<div className='TextSection'>
					<div className='museName'>{x.name}</div>
					<p className='museDesc'>{x.description}</p>
				</div>
			</Card_Muse_Layout>
		</>
	);
};

export default Card_Muse;
