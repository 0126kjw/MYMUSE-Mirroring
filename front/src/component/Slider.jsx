import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from 'data/slider-data';
import styled from '@emotion/styled';

const SliderLayout = styled.div`
	.slider {
		width: 100%;
		/* height: 60vh; */
		height: 600px;
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
		transform: translateX(50%);
		transition: all 0.5s ease;
	}

	@media screen and (min-width: 600px) {
		.slide img {
			width: 100%;
			height: 100%;
		}
	}

	.slide img {
		height: 100%;
	}

	.content {
		position: absolute;
		top: 23rem;
		left: 5rem;
		opacity: 0;
		width: 50%;
		padding: 3rem;
		background: rgba(0, 0, 0, 0.3);
		-webkit-animation: slide-up 1s ease 0.5s;
		animation: slide-up 1s ease 0.5s;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		//   visibility: hidden;
	}

	@-webkit-keyframes slide-up {
		0% {
			visibility: visible;
			top: 23rem;
		}
		100% {
			visibility: visible;
			top: 17rem;
		}
	}

	@keyframes slide-up {
		0% {
			visibility: visible;
			top: 23rem;
		}
		100% {
			visibility: visible;
			top: 17rem;
		}
	}

	@media screen and (max-width: 600px) {
		.content {
			width: 80%;
		}
	}

	.content > * {
		color: #fff;
		margin-bottom: 1rem;
	}

	.current {
		opacity: 1;
		transform: translateX(0);
	}

	.current .content {
		opacity: 1;
	}

	.arrow {
		border: 2px solid #fff;
		border-radius: 50%;
		background: transparent;
		color: #fff;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		position: absolute;
		top: 35%;
		z-index: 999;
	}

	.arrow:hover {
		background: #fff;
		color: #777;
	}

	.next {
		right: 1.5rem;
	}
	.prev {
		left: 1.5rem;
	}

	hr {
		height: 2px;
		background: #fff;
		width: 50%;
	}
`;

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	// slideLength = 1 2 3 4 5 6 7 8
	// currentSlide = 0 1 2 3 4 5 6 7

	const autoScroll = true;
	let slideInterval;
	let intervalTime = 6000;

	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === slideLength - 1 ? 0 : currentSlide + 1,
		);
	};

	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? slideLength - 1 : currentSlide - 1,
		);
	};

	function auto() {
		slideInterval = setInterval(nextSlide, intervalTime);
	}

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	useEffect(() => {
		if (autoScroll) {
			auto();
		}
		return () => clearInterval(slideInterval);
	}, [currentSlide]);

	return (
		<SliderLayout>
			<div className='slider'>
				<AiOutlineArrowLeft
					className='arrow prev'
					onClick={prevSlide}
				/>
				<AiOutlineArrowRight
					className='arrow next'
					onClick={nextSlide}
				/>

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
									<div className='content'>
										<h2>{slide.heading}</h2>
										<p>{slide.desc}</p>
										<hr />
										<button className='--btn --btn-primary'>
											Get Started
										</button>
									</div>
								</>
							)}
						</div>
					);
				})}
			</div>
		</SliderLayout>
	);
};

export default Slider;
