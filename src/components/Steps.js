import React from 'react';

const Notes = () => {
	return (
		<>
			<h2>STEPS</h2>
			<ol>
				<li>
					STEP 1: Dynamically import each component using React.lazy() and
					dynamic imports which are modern JavaScript features
				</li>
				<li>STEP 2: Use the lazy load components in the routes</li>
				<li>
					STEP 3: Wrap lazy components with &lt;React.Suspense&gt;. Since the
					routes are within the router it should be the parent of &lt;Routes&gt;
				</li>
			</ol>
			<p>
				Once this is done rebuild the project, run npx serve from the build
				directory, open the browser, go to the network tab, clear cache & hard
				refresh and look at the data. Pay attention to the bottom bar. It
				dynamically loads and increases as each link is clicked. If the link
				isn't clicked it doesn't waste bandwidth or time loading.
			</p>
		</>
	);
};

export default Notes;
