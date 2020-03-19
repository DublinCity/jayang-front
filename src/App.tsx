import React from 'react';
import Navigation from './Header';
// import Main from './Main';
import GlobalStyle from './GlobalStyle';
import Intro from './Intro';
import IntroContent from './IntroContent';
import CoreValue from './CoreValue';
import Banner from './Banner';
import Location from './Location';
import Community from './Community';
import Footer from './Footer';

function App() {
	return (
		<>
			<GlobalStyle />
			<Navigation />
			<Intro>
				<IntroContent />
			</Intro>
			<Community />
			<CoreValue />
			<Banner />
			<Location />
			<Footer />
		</>
	);
}

export default App;
