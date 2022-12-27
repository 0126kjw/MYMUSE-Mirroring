const Template_basic = () => {
	return (
		<>
			<div className='msgFromAI'>
				<span className='mm'>
					MY<span className='gold'>MUSE</span>
				</span>
				에 오신 것을 환영합니다. <br></br>
				궁금한 부분을 질문해주세요!
			</div>
			<div className='emptyBox'></div>
			<div className='msgFromAI'>
				<h3>다음과 같은 대화와 안내가 가능합니다</h3>
				<p>- 간단한 인사</p>
				<p>- 진행중인 전시회 일정 안내</p>
				<p>- 구 별 박물관/미술관 안내</p>
				<p>- 특정기관 운영시간 안내</p>
				<p>- 특정기관 연락처 안내</p>
				<p>- 특정기관 입장료 안내</p>
				<p>- 특정기관 위치 안내</p>
				<p>- 기타 문의 </p>
			</div>
			<div className='emptyBox'></div>
			<div className='msgFromAI'>
				<span className='tip'>
					<span className='tipspan'>TIP</span> : 화면 좌상단(
					<span className='tipspan'>↖</span>)에서 챗봇 창의 크기 조정이 가능합니다
				</span>
			</div>
			<div className='emptyBox'></div>
		</>
	);
};
export default Template_basic;
