import { useEffect } from 'react';

const Layout = ({ children }) => {
	useEffect(() => {
		window.Kakao.init(process.env.NEXT_PUBLIC_KAKAOSHARE_API_KEY);
	}, []);

	return <>{children}</>;
};

export default Layout;
