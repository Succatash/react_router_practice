import {Route, Routes, Link} from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
	return (
		<div id='container'>
			<h1 style={{textAlign: 'center'}}>Hello React Router!</h1>

			<Navbar
				links={
					<>
						<Link to='/blue'>Blue</Link>
						<Link to='/red'>Red</Link>
						<Link to='/green'>Green</Link>
						<Link to='/'>Home</Link>
					</>
				}
			/>

			<Main
				routes={
					<Routes>
						<Route path='/blue' element={<Blue />}></Route>
						<Route path='/red' element={<Red />}></Route>
						<Route path='/green' element={<Green />}></Route>
						<Route path='/' element={<Home />}></Route>
					</Routes>
				}
			/>

			<footer id='footer'>
				<Link to='/blue'>Blue</Link>
				<Link to='/red'>Red</Link>
				<Link to='/green'>Green</Link>
				<Link to='/'>Home</Link>
			</footer>
		</div>
	);
}

export default App;
