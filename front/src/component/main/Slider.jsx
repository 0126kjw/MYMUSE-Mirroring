import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { sliderData } from 'src/data/slider-data';
import { IdBook } from 'src/data/idBook';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import cssUnit from 'src/lib/cssUnit';
import { CircleInside, CircleOut } from 'src/styles/compoStyles/sliderStyle';
import goToDetailPage from 'src/utils/goToDetailPage';

const SliderLayout = styled.div`
	cursor: pointer;
	.slider {
		width: 100%;
		height: 600px;
		position: relative;
		overflow: hidden;

		@media screen and (max-width: 900px) {
			height: 500px;
		}

		@media screen and (max-width: 600px) {
			height: 300px;
		}
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
		@media screen and (max-width: 900px) {
			//height: 80vh;
			height: 50%;
		}
	}

	.slide img {
		width: 100%;
		height: 100%;
		@media screen and (max-width: 900px) {
			//height: 75vh;
			height: 50%;
		}
	}

	.content {
		position: absolute;
		margin-top: 15%;
		opacity: 0;
		width: 76%;
		height: 50%;
		left: 10%;
		bottom: 200px;
		padding: 2%;
		background: rgba(0, 0, 0, 0.7);
		animation: slide-up 1s ease 0.5s;
		animation-fill-mode: forwards;
		visibility: hidden;

		h2 {
			font-family: ${cssUnit.fontFamily.NanumM};
		}

		p {
			font-size: 20px;
			line-height: 30px;

			font-family: ${cssUnit.fontFamily.GowunBT};
			font-family: ${cssUnit.fontFamily.PreTended};
			font-weight: 300;

			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			text-overflow: ellipsis;

			text-overflow: ellipsis;
			overflow: hidden;
			word-break: keep-all;
		}

		@media screen and (max-width: 900px) {
			height: 50%;
			padding-bottom: 70px;
			//height: 80vh;

			animation: slide-up-mobile1 1s ease 0.5s;
			animation-fill-mode: forwards;
			visibility: hidden;

			//overflow: hidden;

			p {
				text-overflow: ellipsis;
				overflow: hidden;
				word-break: keep-all;

				font-size: 16px;
				padding: 5px;

				display: -webkit-box;
				-webkit-line-clamp: 2; // 원하는 라인수
				-webkit-box-orient: vertical;
			}
		}

		@media screen and (max-width: 600px) {
			//height: 80vh;
			height: 70%;

			animation: slide-up-mobile2 1s ease 0.5s;
			animation-fill-mode: forwards;
			visibility: hidden;

			p {
				text-overflow: ellipsis;
				overflow: hidden;
				word-break: keep-all;

				font-size: 16px;
				padding: 5px;

				display: -webkit-box;
				-webkit-line-clamp: 2; // 원하는 라인수
				-webkit-box-orient: vertical;
			}
		}

		@media screen and (max-width: 300px) {
			//height: 80vh;
			height: 20%;

			animation: slide-up-mobile3 1s ease 0.5s;
			animation-fill-mode: forwards;
			visibility: hidden;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			overflow: hidden;

			h2 {
				word-break: break-all;
				//: 10px;
				//z-index: 10;
				//text-overflow: ellipsis;
				font-size: large;

				display: -webkit-box;
				-webkit-line-clamp: 1; // 원하는 라인수
				-webkit-box-orient: vertical;
			}

			p {
				display: none;
			}
		}
	}

	@keyframes slide-up {
		0% {
			visibility: visible;
			top: 23rem;
		}
		100% {
			visibility: visible;
			top: 40%;
		}
	}
	//600-900
	@keyframes slide-up-mobile1 {
		0% {
			visibility: visible;
			top: 23rem;
		}
		100% {
			visibility: visible;
			top: 50%;
		}
	}
	//600-300
	@keyframes slide-up-mobile2 {
		0% {
			visibility: visible;
			top: 23rem;
		}
		100% {
			visibility: visible;
			top: 30%;
		}
	}

	//under 300
	@keyframes slide-up-mobile3 {
		0% {
			visibility: visible;
			top: 23rem;
		}
		100% {
			visibility: visible;
			top: 20%;
		}
	}

	.content > * {
		color: #fff;
		margin-bottom: 1rem;
	}

	.current {
		opacity: 1;
		transform: translateX(0);

		@media screen and (max-width: 300px) {
			overflow: hidden;
		}
	}

	.current .content {
		opacity: 1;
	}

	.arrow {
		/* border: 2px solid #fff; */
		border-radius: 50%;
		/* background: transparent; */
		background-color: black;
		color: #fff;
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		position: absolute;
		top: 45%;
		// z-index: 1;
	}

	.arrow:hover {
		background: #fff;
		color: black;
	}

	.next {
		right: 1.5rem;
	}
	.prev {
		left: 1.5rem;
	}

	.todetail {
		background-color: black;
		border-radius: 10%;
		color: white;
	}

	hr {
		height: 2px;
		background: #fff;
		width: 50%;
	}

	@media screen and (max-width: 900px) {
		//height: 80vh;
		height: 500px;
		overflow: hidden;
	}

	@media screen and (max-width: 400px) {
		//height: 80vh;
		height: 300px;
		overflow: hidden;
	}

	@media screen and (max-width: 300px) {
		//height: 80vh;
		height: 150px;
		overflow: hidden;
	}
`;

const Slider = () => {
	const router = useRouter();
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = sliderData.length;
	// slideLength = 1 2 3 4 5 6 7 8
	// currentSlide = 0 1 2 3 4 5 6 7

	const autoScroll = true;
	let slideInterval;
	let intervalTime = 6000;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
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

	const headingToDetail = () => {
		const museName = sliderData[currentSlide].heading;
		goToDetailPage(museName, router);
	};

	return (
		<SliderLayout>
			<div className='slider'>
				{sliderData.map((slide, index) => {
					return (
						<div
							className={index === currentSlide ? 'slide current' : 'slide'}
							key={index}
							onClick={headingToDetail}
						>
							{index === currentSlide && (
								<div className='currentSlide'>
									<img
										src={slide.image}
										alt='slide'
										style={{ objectFit: 'cover' }}
									/>
									<div className='content'>
										<h2>{slide.heading}</h2>
										<p>{slide.desc}</p>
										{/* <hr />
										<button className='todetail' style={{ cursor: 'pointer' }}>
											상세보기
										</button> */}
									</div>
								</div>
							)}
						</div>
					);
				})}
				<CircleOut className='arrow prev'>
					<CircleInside>
						<AiOutlineArrowLeft onClick={prevSlide} />
					</CircleInside>
				</CircleOut>
				<CircleOut className='arrow next'>
					<CircleInside>
						<AiOutlineArrowRight onClick={nextSlide} />
					</CircleInside>
				</CircleOut>
				{/* <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
				<AiOutlineArrowRight className='arrow next' onClick={nextSlide} /> */}
			</div>
		</SliderLayout>
	);
};

export default Slider;
