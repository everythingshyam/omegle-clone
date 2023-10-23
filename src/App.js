// import logo from './logo.svg';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import './styles/App.css';
import MainContainer from './components/MainContainer';
function App() {
	return (
		<div className='App'>
			<HeaderComp />
			<MainContainer />
			<FooterComp />
		</div>
	);
}

export default App;
