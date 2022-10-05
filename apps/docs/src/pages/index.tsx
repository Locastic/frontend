import { TestComponent } from '../components/TestComponent';

import React, { useEffect } from 'react';

export default function Docs() {
	console.log('test');
	return (
		<div>
			<h1>Locastic Documentation</h1>
			<TestComponent />
			<button>Click me</button>
		</div>
	);
}
