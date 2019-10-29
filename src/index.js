/* eslint react/prop-types: 0 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const states = {
	default: 'rgba(0,0,0,0.8)',
};

const Scrim = styled.div`
	background-color: ${(props) => states[props.bg] || states.default};
	font-family: sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Card = styled.div`
	width: ${(props) => props.width || '200px'};
	height: ${(props) => props.height || 'auto'};
	background-color: white;
	border-radius: 8px;
	padding: 2em;
`;

const Btn = styled.button`
	font-weight: 500;
	font-size: 14px;
	background-color: #26CFA2;
	width: 140px;
	height: 46px;
	color: white;
	outline: 0;
	border: 0;
	box-shadow: none;
	cursor: pointer;
	border-radius: 6px;
`;

const CancelBtn = styled(Btn)`
	color: #5A697D;
	border: 1px solid #E9EBED;
	background-color: white;
`;


class Store {
	createNode() {
		let div = document.getElementById('rc-alert');

		if (div) {
			return div;
		}

		div = document.createElement('div');
		div.setAttribute('id', 'rc-alert');
		document.body.appendChild(div);
		return div;
	}

	removeNode() {
		const div = document.getElementById('rc-alert');
		ReactDOM.unmountComponentAtNode(div);
		div.parentNode.removeChild(div);
	}
}


function Alert({
	store,
	bg,
	width,
	height,
	title,
	render,
	onCancel,
	onConfirm,
}) {
	const scrimRef = React.useRef();

	const handleConfirm = () => {
		onConfirm();
		store.removeNode();
	};

	const handleCancel = () => {
		onCancel();
		store.removeNode();
	};

	const handleOverlayClick = (e) => {
		if (scrimRef.current === e.target) {
			store.removeNode();
		}
	};

	return (
		<Scrim ref={scrimRef} onClick={handleOverlayClick} bg={bg}>
			{ render
				? render({ confirm: handleConfirm, cancel: handleCancel })
				: (
					<Card width={width} height={height}>
						<h2>{title}</h2>
						<CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
						{' '}
						<Btn onClick={handleConfirm}>Confirm</Btn>
					</Card>
				)}
		</Scrim>
	);
}

Alert.defaultProps = {
	onConfirm: () => null,
	onCancel: () => null,
	width: 500,
	title: 'Are you sure?',
};

function reactAlert(props) {
	const ModalStore = new Store();

	ReactDOM.render(<Alert {...props} />, ModalStore.createNode());
}

function useReactAlert(props) {
	const ModalStore = new Store();

	return {
		open: () => { ReactDOM.render(<Alert {...props} store={ModalStore} />, ModalStore.createNode()); },
		close: () => ModalStore.removeNode(),
	};
}

export { reactAlert, useReactAlert };
