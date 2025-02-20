/ai-drive-bot
  ├── /frontend        # Frontend (HTML, CSS, JS)
  │   ├── index.html
  │   ├── styles.css
  │   ├── script.js
  |
  ├── /backend         # Backend (Node.js, Express)
  │   ├── server.js        # Main backend file
  │   ├── auth.js          # Google OAuth logic
  │   ├── drive.js         # Google Drive API operations
  │   ├── database.js      # MongoDB connection
* │   ├── gemini.js            # Gemini AI filename mapping logic
* │   ├── scan.js          # Image scanning (Google Vision API)
  │   ├── config.js        # Stores API keys and configuration
  |
* ├── package.json     # Node.js dependencies
* ├── .env             # Secret keys (Google API, MongoDB, Gemini API)
* ├── .gitignore       # Ignore sensitive files
* ├── README.md        # Project documentation
