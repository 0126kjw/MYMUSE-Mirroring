import { useEffect } from 'react';
import KakaoBtn from '../detail/KakaoShare';

const Layout = ({ children }) => {
	useEffect(() => {
		if (!Kakao.isInitialized()) {
			window.Kakao.init(process.env.NEXT_PUBLIC_KAKAOSHARE_API_KEY);
		}
	}, []);

	return <>{children}</>;
};

export default Layout;
