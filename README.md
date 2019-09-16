# rc-confirm-alert

Yet another confim alert for React

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

## Options
```
width,
title,
onCancel,
onConfirm,
render

```
