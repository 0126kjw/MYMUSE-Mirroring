import { sliderData } from 'src/data/slider-data';
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
		/* border-radius: 50%; */
		color: black;
		width: 5rem;
		height: 5rem;
		cursor: pointer;
		top: 480px;
		background: transparent;
		/* background-color: red; */
		/* background: #fff; */
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

const DetailSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
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
				{sliderData.map((slide, index) => {
					return (
						<div
							className={index === currentSlide ? 'slide current' : 'slide'}
							key={index}
						>
							{index === currentSlide && (
								<>
									<img src={slide.image} alt='slide' />
									{/* <Image
										src={slide.image}
										alt='slide image'
										width={150}
										height={70}
										style={{ objectFit: 'contain', layout: 'fill' }}
									/> */}
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
