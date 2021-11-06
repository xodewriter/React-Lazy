import React from 'react';

const Notes = () => {
	return (
		<>
			<h2>KEY POINTS</h2>
			<ul>
				<li>
					Traditionally, all the component in a React app would be bundled into
					a single file
				</li>
				<li>
					This allows the browser to download the entire app once so that the
					user can navigate seamlessly without having the need to make another
					HTTP request to the servers
				</li>
				<li>
					This can cause bloating as more 3rd party packages are installed and
					the bundle size would increase causing the app to have a long initial
					load time
				</li>
				<li>
					Code splitting is the solution. A single bundle file split into
					smaller ones and the user only downloads the code as needed and if
					needed.
				</li>
				<li>
					It not only solves time, but reduces bandwidth which can be costly for
					both the user and the provider
				</li>
				<li>
					E.g.) For an analytics website, if the user wants to navigate to their
					profile page and then log off, there should be no need to download the
					bulky code from the dashboard page.
				</li>
				<li>
					npm run build shows each of the chunks that are used to create our
					App. In this example there are 4 chunks, but when we run our App all 4
					chunks run even though we aren't using them all. To prove this cd into
					the build directory and run the command ... npx serve
				</li>
				<li>
					Then... in the browser go to the network tab, empty the cash and hard
					reload it will show all the resources being fetched...e.g.) 13
					requests 1.6 MB transferred 4.3 MB resources Finish: 7.05 s
					DOMContentLoaded: 605 ms Load: 868 ms
				</li>
				<li>
					Then... The focus is on the chunk with the number.hash.chunk.js e.g.)
					2.d7c643b3.chunk.js which is basially for the Plotly.js library. Right
					now is 1.1 MB. It's still small number but only because its for a very
					basic example.
				</li>
				<li>
					The point... is when we're on the Home page we are also accessing the
					previous resources adding to the load time e.g.) 205ms and also
					unneccessarily using & wasting bandwidth e.g.) 1.1 MB
				</li>
				<li>
					Solution: Load only code needed for home page and then asynchronously
					fetch the code for the other routes when the user navigates to those
					pages.
				</li>
			</ul>
		</>
	);
};

export default Notes;
