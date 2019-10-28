import * as React from 'react';
import { useReactAlert } from '../src/index';


export function App() {
	const [counter, setCounter] = React.useState(0);
	const dialog = useReactAlert();

	return (
		<React.Fragment>
			<button onClick={() => dialog.open()}>Open Modal</button>
			<button onClick={() => setCounter(c => c + 1)}>Inc</button>
		</React.Fragment>
	)
};

export default { title: 'Modal' };
