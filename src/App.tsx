import React from 'react';
import Header from './Header';
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
			<Intro>
				<Header></Header>
				<IntroContent />
			</Intro>
			<WorshipInfo />
			<Banner />
			<Location />
			<Footer>
				<div>footer</div>
			</Footer>
		</>
	);
}

export default App;
