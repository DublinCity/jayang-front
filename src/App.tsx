import React from 'react';
import Navigation from './Header';
// import Main from './Main';
import GlobalStyle from './GlobalStyle';
import Intro from './Intro';
import IntroContent from './IntroContent';
import WorshipInfo from './WorshipInfo';
import Banner from './Banner';
import Location from './Location';
import Footer from './Footer';

function App() {
	return (
		<>
			<GlobalStyle />
			<Navigation />
			<Intro>
				<IntroContent />
			</Intro>
			<WorshipInfo />
			<Banner />
			<Location />
			<Footer />
		</>
	);
}

export default App;
