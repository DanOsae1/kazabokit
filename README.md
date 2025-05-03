# KazABokit

[![Netlify Status](https://api.netlify.com/api/v1/badges/092d43f6-5204-4187-9a63-464cb4abf52d/deploy-status)](https://app.netlify.com/sites/grand-strudel-cd1d8f/deploys)

KazABokit is a French Caribbean street food web application that showcases the vibrant flavors of Guadeloupe. This project is built using modern web technologies like React, Vite, and TailwindCSS, and is designed to provide a seamless user experience.

## Features

- **Hero Section**: Highlights the brand and its unique offerings.
- **About Us**: Shares the story behind KazABokit and its culinary heritage.
- **Menu**: Displays a variety of dishes with descriptions.
- **Events**: Lists upcoming events where KazABokit will be featured.
- **Newsletter**: Allows users to subscribe for updates.
- **Contact Form**: Enables users to send inquiries directly.
- **404 Page**: Custom "Page Not Found" design for invalid routes.

## Tech Stack

- **Frontend**: React with Vite for fast development and SWC for optimized builds.
- **Styling**: TailwindCSS for utility-first styling and custom animations.
- **Email Integration**: EmailJS for handling contact form submissions.
- **Infrastructure**: Google Cloud Run for hosting, Terraform for infrastructure as code.
- **CI/CD**: GitHub Actions for automated builds and deployments.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/kazabokit.git
   cd kazabokit
   ```
2. Install depdencies
    ```bash
    npm install
    ```
3. Create a .env file in the root directory and add the following: 
    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLICKEY=your_public_key
    ```
4. Start the development server: 
    ```
    npm run dev
    ```
5. Open the app in the browser at http://localhost:5173:

## Deployment

Netlify

The app is deployed on Netlify. Push changes to the main branch to trigger a deployment.

## File Structure

```
src/
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── pages/            # Page-level components
├── assets/           # Static assets (images, etc.)
├── App.jsx           # Main app component
├── main.jsx          # Entry point
├── index.css         # Global styles
public/
├── index.html        # HTML template
```

## Environment Variables

The following environment variables are required:

- VITE_EMAILJS_SERVICE_ID: EmailJS service ID.
- VITE_EMAILJS_TEMPLATE_ID: EmailJS template ID.
- VITE_EMAILJS_PUBLICKEY: EmailJS public key.

## Contributing

1. Fork the repository.
2. Create a new branch:
3. Commit your changes:
4. Push to the branch:
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Vite
- React
- TailwindCSS
- EmailJS
- Google Cloud Run
- Netlify
