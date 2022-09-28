import "./App.css";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Title from "./components/Title";

function App() {
	return (
		<div className="App">
			<Banner />
			<main>
				<Title />
				<Gallery />
			</main>
		</div>
	);
}

export default App;
