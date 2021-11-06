import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import Notes from './components/Notes';
import Steps from './components/Steps';
import Router from './components/Router';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<div className='App'>
			<h1>React Code Splitting</h1>
			<nav>
				<Link to='/'>Home</Link> | <Link to='/router'>Router</Link> |{' '}
				<Link to='/steps'>Steps</Link> | <Link to='/profile'>Profile</Link> |{' '}
				<Link to='/dashboard'>Dashboard</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Notes />} />
				<Route path='/steps' element={<Steps />} />
				<Route path='/router' element={<Router />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
