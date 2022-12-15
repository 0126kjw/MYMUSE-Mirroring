import styled from '@emotion/styled';

export const CircleOut = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	animation: fade-in 3s 1.8s;

	@keyframes fade-in {
		100% {
			opacity: 1;
			filter: blur(0);
		}
	}
`;
export const CircleInside = styled.div`
	width: 20px;
	height: 20px;

	margin: 10px;
	background: black;
	border-radius: 50%;

	box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);

	transform: scale(1);
	animation: pulse-black 2s infinite;

	:hover {
		cursor: pointer;
	}

	@keyframes pulse-black {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 40px rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}
	}

	@keyframes bounce {
		100% {
			top: -20px;
			text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc,
				0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
				0 50px 25px rgba(0, 0, 0, 0.2);
		}
	}
`;
