import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>React Code Splitting</h1>
			<p>
				Code-splitting your app can help you <b>“lazy-load”</b> just the things
				that are currently needed by the user, which can dramatically improve
				the performance of your app. While you haven’t reduced the overall
				amount of code in your app, you’ve avoided loading code that the user
				may never need, and reduced the amount of code needed during the initial
				load.
			</p>
			<h2>KEY POINTS</h2>
			<ul>
				<li>Dynamially load code</li>
				<li>
					<b>"lazy-load"</b> just the things that are currently needed by the
					user
				</li>
				<li>Can drastically improve performance of app</li>
				<li>The amount of code is the same and hasn't been reduced</li>
				<li>
					Avoid loading code that the user may never need during the initial
					load
				</li>
			</ul>
		</div>
	);
}

export default App;
