const TopDescription = ({ currentMap }) => {
	return (
		<>
			{currentMap.mapKind == 'inner' && <div className='mapDescBox'>{currentMap.name}</div>}
			{currentMap.mapKind == 'outer' && <div className='mapDescBox'>서울시</div>}
		</>
	);
};

export default TopDescription;
