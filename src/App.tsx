import React from 'react';
import Header from './Header';
// import Main from './Main';
import GlobalStyle from './GlobalStyle';
import Intro from './Intro';
import IntroContent from './IntroContent';
import WorshipInfo from './WorshipInfo';

function App() {
	return (
		<>
			<GlobalStyle />
			<Intro>
				<Header></Header>
				<IntroContent />
			</Intro>
			<WorshipInfo />
			{/* <Main></Main> */}
		</>
	);
}

export default App;
