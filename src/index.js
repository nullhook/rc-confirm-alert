import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const states = {
	default: 'rgba(0,0,0,0.8)',
}

const Scrim = styled.div`
	background-color: ${props => states[props.bg] || states['default']};
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
	width: ${props => props.width || '200px'};
	height: ${props => props.height || 'auto'};
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

class ReactAlert extends Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();

		this.state = {
			cancel: this.cancel,
			confirm: this.confirm,
		}
	}

	overlayClick = (e) => {
		if (this.ref.current === e.target) {
			removeNode();
		}
	}

	cancel = () => {
		this.props.onCancel();
		removeNode();
	}

	confirm = () => {
		this.props.onConfirm();
		removeNode();
	}

	render() {
		const { bg, width, height, title, render } = this.props;

		return (
			<Scrim ref={this.ref} onClick={this.overlayClick} bg={bg}>
				{ render
					? render(this.state)
					: (
							<Card width={width} height={height}>
								<h1>{title}</h1>
								<CancelBtn onClick={this.cancel}>Cancel</CancelBtn>
								{' '}
								<Btn onClick={this.confirm}>Confirm</Btn>
							</Card>
						)
				}
			</Scrim>
		);
	}
}

ReactAlert.defaultProps = {
	onConfirm: () => null,
	onCancel: () => null,
}

function createNode() {
	let div = document.getElementById('rc-alert');

	if (div) {
		return div;
	}

	div = document.createElement('div');
	div.setAttribute('id', 'rc-alert');
	document.body.appendChild(div);
	return div;
}

function removeNode() {
	const div = document.getElementById('rc-alert');
	ReactDOM.unmountComponentAtNode(div);
	div.parentNode.removeChild(div);
}

function reactAlert(props) {
	const divTarget = createNode();
	ReactDOM.render(<ReactAlert {...props} />, divTarget);
}


export { reactAlert, Card }
