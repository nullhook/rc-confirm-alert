/* eslint react/prop-types: 0 */
import * as React from 'react';
import { useReactAlert } from '../src/index';

function UI({ confirm, cancel }) {
	const [counter, setCounter] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(false);

	const handleConfirm = () => {
		setIsLoading(true);
		setTimeout(() => confirm(), 5000);
	};

	return (
		<div style={{ backgroundColor: 'white', width: '500px' }}>
			<h2>What do you want?</h2>
			<p>{counter}</p>
			<button type="button" onClick={() => setCounter((c) => c + 1)}>Inc</button>
			<button type="button" disabled={isLoading} onClick={handleConfirm}>Confirm</button>
			<button type="button" onClick={() => cancel()}>Cancel</button>
		</div>
	);
}

export function App() {
	const [, setCounter] = React.useState(0);
	const dialog = useReactAlert({ render: UI });

	return (
		<React.Fragment>
			<button type="button" onClick={() => dialog.open()}>Open Modal</button>
			<button type="button" onClick={() => setCounter((c) => c + 1)}>Inc</button>
		</React.Fragment>
	);
}

export default { title: 'Modal' };
