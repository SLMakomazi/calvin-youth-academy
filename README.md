# Calvin Youth Academy

This is the official website for Calvin Youth Academy, featuring course information, application forms, and contact functionality.

## Features

- Responsive design for all devices
- Contact form with email notifications
- Online application form
- Course information and details
- Modern UI with smooth animations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- SMTP email service (for contact form and applications)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   SMTP_HOST=your-smtp-host
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USERNAME=your-email@example.com
   SMTP_PASSWORD=your-email-password
   EMAIL_FROM="Your Name <noreply@example.com>"
   ADMIN_EMAIL=admin@example.com
   ADMISSIONS_EMAIL=admissions@example.com
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
calvin-youth-academy/
├── backend/               # Backend server
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── routes/           # API routes
│   ├── .env              # Environment variables
│   └── index.js          # Main server file
├── frontend/             # Frontend React app
│   ├── public/           # Static files
│   └── src/              # Source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       └── App.js         # Main App component
└── README.md             # This file
```

## Available Scripts

### Backend

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests

### Frontend

- `npm start` - Start the development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from create-react-app

## Environment Variables

### Backend

- `NODE_ENV` - Application environment (development/production)
- `PORT` - Port to run the server on
- `FRONTEND_URL` - Frontend URL for CORS
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP server port
- `SMTP_SECURE` - Use SSL/TLS (true/false)
- `SMTP_USERNAME` - SMTP username
- `SMTP_PASSWORD` - SMTP password
- `EMAIL_FROM` - Sender email address
- `ADMIN_EMAIL` - Admin email for notifications
- `ADMISSIONS_EMAIL` - Email for application submissions

## Deployment

### Backend

1. Set `NODE_ENV=production` in your production environment variables
2. Make sure all required environment variables are set
3. Use a process manager like PM2 to keep the server running:
   ```bash
   npm install -g pm2
   pm2 start index.js --name "calvin-youth-academy"
   ```

### Frontend

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` directory to your hosting service (Netlify, Vercel, etc.)

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
