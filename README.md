# rc-confirm-alert

Yet another confirm alert for React

## Installation
`npm install rc-confirm-alert`

## Usage

```javascript
reactAlert({
	width: '500px',
	title: 'Are you sure?',
	onCancel: () => {
		doSomethingOnCancel();
	},
	onConfirm: () => {
		doSomethingOnConfirm();
	}
});
```

Custom UI:

```javascript
reactAlert({
	render: (props) => <CustomUI {...props} />
});
```
