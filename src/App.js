import logo from './logo.svg';
import Body from './components/Body';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
      <img src={logo} className="App-logo" alt="logo" />
			<Header />
			<Body />
		</div>
	);
}

export default App;
