import {render, screen} from '@testing-library/react';
import {withRouter} from 'react-router-dom';
import App from './App';
import Home from './components/Home';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders "Welcome to Pizza Joint"', () => {
  render(withRouter(<Home />));

  const h2 = screen.getByText(/Welcome to Pizza Joint/i);
  expect(h2).toBeInTheDocument();
});
