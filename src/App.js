import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components
const Notes = React.lazy(() => import('./components/Notes'));
const Steps = React.lazy(() => import('./components/Steps'));
const Router = React.lazy(() => import('./components/Router'));
const Profile = React.lazy(() => import('./components/Profile'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
	return (
		<div className='App'>
			<h1>React Code Splitting</h1>
			<nav>
				<Link to='/'>Home</Link> | <Link to='/router'>Router</Link> |{' '}
				<Link to='/steps'>Steps</Link> | <Link to='/profile'>Profile</Link> |{' '}
				<Link to='/dashboard'>Dashboard</Link>
			</nav>
			<React.Suspense fallback={<h2>Loading...</h2>}>
				<Routes>
					<Route path='/' element={<Notes />} />
					<Route path='/steps' element={<Steps />} />
					<Route path='/router' element={<Router />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</React.Suspense>
		</div>
	);
}

export default App;
