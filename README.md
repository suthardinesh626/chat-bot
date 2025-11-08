# 🤖 CHILL GUY AI Chatbot

A modern AI chatbot powered by Google's Gemini 2.0 Flash model, built with Express.js and ready for deployment on Vercel.

## ✨ Features

- 🚀 Fast responses with Gemini 2.0 Flash
- 🎨 Modern, responsive web interface
- 🔒 Secure API endpoint
- ☁️ Production-ready for Vercel deployment
- 💬 Real-time chat interface

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **AI Model**: Google Gemini 2.0 Flash
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.x or higher
- A Google AI API key (free tier available)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

**Get your free Gemini API key:**
- Visit: https://makersuite.google.com/app/apikey
- Sign in with your Google account
- Click "Create API Key"

### 3. Run Locally

```bash
npm start
```

Visit `http://localhost:3000` to use the chatbot!

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add your environment variable in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `GEMINI_API_KEY` with your API key

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable:
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key
6. Click "Deploy"

## 📡 API Endpoints

### POST `/api/chat`

Send a message to the chatbot.

**Request:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "success": true,
  "response": "I'm doing great! How can I help you today?",
  "model": "gemini-2.0-flash"
}
```

### GET `/api/health`

Check if the API is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Chatbot API is running"
}
```

## 🎯 Usage Examples

### Using cURL

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is AI?"}'
```

### Using JavaScript (Fetch)

```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ 
    message: 'What is AI?' 
  })
});

const data = await response.json();
console.log(data.response);
```

## 🔧 Configuration

### Change AI Model

Edit `index.js` and update the model name:

```javascript
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash" // or "gemini-1.5-flash", "gemini-1.5-pro"
});
```

### Adjust Port

Set the `PORT` environment variable in your `.env` file:

```env
PORT=3000
```

## 📝 Project Structure

```
openai-chat-bot/
├── index.js              # Main Express server
├── package.json          # Dependencies
├── vercel.json          # Vercel configuration
├── .env                 # Environment variables (not in git)
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── public/
    └── index.html      # Frontend chat interface
```

## 🔒 Security Notes

- Never commit your `.env` file
- Keep your API keys secure
- Use environment variables in production
- Rate limiting is handled by Gemini's free tier (15 RPM)

## 📊 Free Tier Limits

Google Gemini Free Tier:
- **15 requests per minute**
- **1,500 requests per day**
- No credit card required

## 🐛 Troubleshooting

### API Key Error
- Make sure your `GEMINI_API_KEY` is set correctly in `.env`
- Verify your API key at https://makersuite.google.com/app/apikey

### Port Already in Use
- Change the port in your `.env` file
- Or stop the process using the port

### Module Not Found
- Run `npm install` to install all dependencies

## 📜 License

ISC

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 👨‍💻 Author

Built with ❤️ for the community

