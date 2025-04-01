import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './Contactus';
import emailjs from 'emailjs-com';

// Mock emailjs to avoid real API calls
jest.mock('emailjs-com', () => ({
  send: jest.fn(),
}));

describe('ContactForm Component', () => {
  it('renders form inputs and submit button', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('displays validation errors for empty fields', async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('sends an email successfully and shows success message', async () => {
    emailjs.send.mockResolvedValueOnce({ status: 200 });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello there!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
    });

    expect(emailjs.send).toHaveBeenCalled();
  });

  it('shows error message on email sending failure', async () => {
    emailjs.send.mockRejectedValueOnce(new Error('Sending failed'));

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText('Failed to send message. Try again later.')).toBeInTheDocument();
    });
  });
});