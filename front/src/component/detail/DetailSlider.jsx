import { useState, useEffect, useCallback, useMemo } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styled from '@emotion/styled';
import Image from 'next/image';
import cssUnit from 'src/lib/cssUnit';

const DetailSliderLayout = styled.div`
	.slider {
		width: 1209px;
		//width: 1190px;
		height: 600px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;

		//box-shadow: 0px 0px 5px 0px;
		/* border: solid 5px black; */

		@media screen and (max-width: 1200px) {
			width: 100%;
			height: 30vh;
			//height: auto;
		}
	}

	.slide {
		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;

		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		opacity: 0;
		transform: translateX(-50%);
		transition: all 0.5s ease;
	}

	.current {
		opacity: 1;
		transform: translateX(0);
	}

	.arrow {
		position: absolute;

		width: 5rem;
		height: 5rem;

		//top: 480px;
		top: 45%;

		border: 1px solid white;
		color: ${cssUnit.colors.DeepBlack};

		border-radius: 10%;
		cursor: pointer;

		background-color: transparent;
	}

	.arrow:hover {
		border-radius: 10%;
		background: ${cssUnit.backgroundColors.White};
		color: ${cssUnit.colors.DarkGold};

		animation: arrow-wave 1.6s infinite;
	}
	.prev {
		left: 5%;
		@media screen and (max-width: 600px) {
			width: 2.5em;
			height: 2.5rem;
		}
		@media screen and (max-width: 300px) {
			width: 1.5em;
			height: 1.5rem;
		}
	}
	.next {
		right: 5%;
		@media screen and (max-width: 600px) {
			width: 2.5em;
			height: 2.5rem;
		}
		@media screen and (max-width: 300px) {
			width: 1.5em;
			height: 1.5rem;
		}
	}

	@keyframes arrow-wave {
		0% {
			opacity: 0;
		}
		/* 50% {
			opacity: 0.5;
		} */
		100% {
			opacity: 1;
		}
	}
`;

const DetailSlider = ({ sliderimgs }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	console.log('sliderimgs', sliderimgs);
	//useMemo 의미 없음
	const sliderData = sliderimgs;
	const slideLength = sliderData.length;

	const nextSlide = useCallback(() => {
		return setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	}, [currentSlide]);
	const prevSlide = useCallback(() => {
		return setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
	}, [currentSlide]);

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	return (
		<>
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
										<Image
											src={eachImgUrl}
											alt='slide'
											fill
											size='width:100%, height:100%'
											style={{
												objectFit: 'cover',
												layout: 'fill',
											}}
											//priority='true'
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
		</>
	);
};

export default DetailSlider;
