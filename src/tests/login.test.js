import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/login';

test('Facebook component renders correctly and logs in', async () => {
  const { getByText, getByAltText } = render(<Login />);

  // Check that "Sign In with Facebook" button is present
  const signInButton = getByText(/Sign In with Facebook/i);
  expect(signInButton).toBeInTheDocument();

  // Click the "Sign In with Facebook" button
  fireEvent.click(signInButton);

  // Wait for the response from Facebook API
  await waitFor(() => {
    // Check that user's name and profile picture are displayed
    const welcomeMessage = getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();

    const profilePicture = getByAltText(/profile/i);
    expect(profilePicture).toBeInTheDocument();
  });
});
