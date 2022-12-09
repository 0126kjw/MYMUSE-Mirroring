import { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styled from '@emotion/styled';
import Image from 'next/image';

const DetailSliderLayout = styled.div`
	.slider {
		width: 1190px;
		height: 600px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		/* border: solid 5px black; */
		@media screen and (max-width: 1200px) {
			width: 100%;
			height: 60vh;
		}
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transform: translateX(-50%);
		transition: all 0.5s ease;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.current {
		opacity: 1;
		transform: translateX(0);
	}

	.arrow {
		position: absolute;
		border: 1px solid white;
		color: black;
		width: 5rem;
		height: 5rem;
		cursor: pointer;
		top: 480px;
		background: transparent;
	}

	.arrow:hover {
		background: #fff;
		color: #777;
	}
	.prev {
		left: 10%;
	}
	.next {
		right: 10%;
	}
`;

const DetailSlider = ({ _id, imgSrcUrl, srcName, srcUrl, ID }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderData = [
		`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${ID}_image01.jpg`,
		`https://res.cloudinary.com/dtq075vja/image/upload/v1670317186/9gle/${ID}_image02.jpg`,
	];
	const slideLength = sliderData.length;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	};
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
	};

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	return (
		<DetailSliderLayout>
			<div className='slider'>
				{sliderData.map((eachImgUrl, index) => {
					return (
						<div
							className={index === currentSlide ? 'slide current' : 'slide'}
							key={index}
						>
							{index === currentSlide && (
								<>
									<img
										src={eachImgUrl}
										alt='slide'
										style={{ objectFit: 'fill' }}
									/>
								</>
							)}
						</div>
					);
				})}
				<div className=''>
					<SlArrowLeft className='arrow prev' onClick={prevSlide} />
					<SlArrowRight className='arrow next' onClick={nextSlide} />
				</div>
			</div>
		</DetailSliderLayout>
	);
};

export default DetailSlider;
