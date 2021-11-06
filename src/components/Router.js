import React from 'react';

const Notes = () => {
	return (
		<>
			<h2>Router 6 Differences</h2>
			<ul>
				<li>
					In index.js wrap BrowserRouter around the app and remember to import
					it
				</li>
				<li>In App.js import Routes, Route, Link from 'react-router-dom'</li>
				<li>
					In App.js to create a link use... &lt;Link
					to='/dashboard'&gt;Dashboard&lt;/Link&gt;
				</li>
				<li>In App.js instead of Switch use "Routes"</li>
				<li>In App.js each individual Route is nested as a child of Routes</li>
				<li>No need to use "exact" for exact path anymore</li>
				<li>
					E.g.) &lt;Route path='/dashboard' element=&lt;Dashboard /&gt; /&gt;
				</li>
			</ul>
		</>
	);
};

export default Notes;
