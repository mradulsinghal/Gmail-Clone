# Google Email Clone

A full-stack, responsive Gmail clone built using the MERN stack (MongoDB, Express, React, Node.js). This application replicates core email functionality with a modern, glassmorphic UI design.

## Features
- **Inbox, Sent, Drafts, and Bin Folders:** Manage emails by categories natively with a fully functional routing system.
- **Compose Interface:** Write and send real emails to standard email addresses in a popup dialog.
- **Starred Messages:** Toggle and bookmark your favorite conversations.
- **Move to Bin & Delete:** Quickly delete and manage old messages.
- **Read View:** Read full email content, see metadata (sender, timestamp).
- **Smooth Animations & Routing:** Built with React Router and Material UI components.

## Tech Stack
- **Frontend:** React, Vite, React Router, Material UI (MUI).
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (Mongoose).
- **Mailing:** Nodemailer.

## Installation Flow

### 1. Clone the repository
```bash
git clone https://github.com/mradulsinghal/Gmail-Clone.git
cd Gmail-Clone
```

### 2. Install dependencies
From the root directory:
```bash
npm install
cd Client && npm install
cd ../server && npm install
```

### 3. Setup environment variables
In the `server/` directory, create a `.env` file and configure:
```env
PORT=8000
MONGODB_URI=<your-mongodb-connection-string>
EMAIL_USER=<your-gmail-address>
EMAIL_PASS=<your-gmail-app-password>
```

### 4. Run the application
Start the backend server:
```bash
cd server
node index.js
```

Start the frontend Vite server:
```bash
cd Client
npm run dev
```

## Preview
Open `http://localhost:5173` to view the app in your browser!
