import { render } from '@testing-library/react';

import App from './App';

test('should render App component without crashing', () => {
  render(<App />);
});
