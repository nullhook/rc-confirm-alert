# rc-confirm-alert

Yet another confirm alert for React

## Installation
`npm install rc-confirm-alert`

## Usage

Use it as a function

```javascript
import { reactAlert } from 'rc-confirm-alert';

reactAlert({
  width: '500px',
  title: 'Are you sure?',
  onCancel: () => doSomethingOnCancel(),
  onConfirm: () => doSomethingOnConfirm(),
});
```

Also supports hooks

```javascript
import { useReactAlert } from 'rc-confirm-alert';

function UI() {
	const dialog = useReactAlert();

	return (
		<React.Fragment>
			<button onClick={() => dialog.open()}>Open Modal</button>
		</React.Fragment>
	);
}
```

Custom UI

```javascript
import { reactAlert } from 'rc-confirm-alert';

reactAlert({
  render: (props) => <CustomUI {...props} />,
  onCancel: () => { ... },
  onConfirm: () => { ... },
});
```

```javascript
function CustomUI({ cancel, confirm }) { ... }
```
