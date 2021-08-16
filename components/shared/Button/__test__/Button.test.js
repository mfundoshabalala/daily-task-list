import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button />, div);
});

it('renders button correctly', () => {
	const { getByTestId } = render(<Button>Click me please</Button>);
	expect(getByTestId('button')).toHaveTextContent('Click me please');
});
