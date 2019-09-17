# rc-confirm-alert

Yet another confirm alert for React

## Installation
`npm install rc-confirm-alert`

## Usage

```javascript
import { reactAlert } from 'rc-confirm-alert';

reactAlert({
  width: '500px',
  title: 'Are you sure?',
  onCancel: () => doSomethingOnCancel(),
  onConfirm: () => doSomethingOnConfirm(),
});
```

Custom UI:

```javascript
import { reactAlert } from 'rc-confirm-alert';

reactAlert({
  render: (props) => <CustomUI {...props} />,
  onCancel: () => { ... },
  onConfirm: () => { ... },
});
```

```javascript
function customUI({ cancel, confirm }) { ... }
```
