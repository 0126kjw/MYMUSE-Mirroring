import { sliderData } from 'data/slider-data';
import { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styled from '@emotion/styled';

const DetailSliderLayout = styled.div`
	.slider {
		width: 800px;
		height: 100vh;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
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
	}

	@media screen and (min-width: 600px) {
		.slide img {
			width: 100%;
			height: 100%;
		}
	}

	.current {
		opacity: 1;
		transform: translateX(0);
	}

	.arrow {
		background: transparent;
		border: 1px solid white;
		color: black;
		width: 5rem;
		height: 5rem;
		cursor: pointer;
		position: absolute;
		top: 50%;
		z-index: 999;
	}

	.arrow:hover {
		background: #fff;
		color: #777;
	}

	.next {
		right: 20%;
	}

	.prev {
		left: 20%;
	}
`;

const DetailSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = sliderData.length;

	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === slideLength - 1 ? 0 : currentSlide + 1,
		);
	};
	const prevSlide = () => {
		setCuttentSlide(
			currentSlide === 0 ? slideLength - 1 : currentSlide - 1,
		);
	};

	useEffect(() => {
		setCuttentSlide(0);
	}, []);

	return (
		<DetailSliderLayout>
			<SlArrowLeft className='arrow prev' onClick={prevSlide} />
			<SlArrowRight className='arrow next' onClick={nextSlide} />
			<div className='slider'>
				{sliderData.map((slide, index) => {
					return (
						<div
							className={
								index === currentSlide
									? 'slide current'
									: 'slide'
							}
							key={index}
						>
							{index === currentSlide && (
								<>
									<img src={slide.image} alt='slide' />
								</>
							)}
						</div>
					);
				})}
			</div>
		</DetailSliderLayout>
	);
};

export default DetailSlider;
