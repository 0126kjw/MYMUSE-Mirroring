import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

const TypingSentence = styled.h2`
	font-size: ${cssUnit.fontSize.medium};
	font-family: ${cssUnit.fontFamily.GowunBT};

	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;

	overflow: hidden;
	word-break: keep-all;

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};
`;

const AutoTyper = ({ sentence, color }) => {
	const [text, setText] = useState('');
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setText(text + sentence[idx]);
			setIdx((prv) => prv + 1);
		}, 100);
		if (idx === sentence.length) {
			clearInterval(interval);
			return;
		}
		return () => clearInterval(interval);
	}, [idx]);

	return <TypingSentence color={color}>{text}</TypingSentence>;
};

export default AutoTyper;
