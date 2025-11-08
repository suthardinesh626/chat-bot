import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'CHILL GUY API is running' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ 
        error: 'Message is required. Send a message to the CHILL GUY.',
        success: false 
      });
    }

    // Generate response from Gemini
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    res.json({ 
      success: true,
      response: text,
      model: "gemini-2.0-flash"
    });

  } catch (error) {
    console.error("API Error:", error.message);
    
    let errorMessage = "An unexpected error occurred.";
    let statusCode = 500;

    if (error.message?.includes("401") || error.message?.includes("API key")) {
      errorMessage = "Invalid Gemini API key. Please check your configuration.";
      statusCode = 401;
    } else if (error.message?.includes("429") || error.message?.includes("quota")) {
      errorMessage = "API quota exceeded. Please try again later.";
      statusCode = 429;
    } else if (error.message?.includes("500") || error.message?.includes("503")) {
      errorMessage = "Gemini server error. Please try again later.";
      statusCode = 503;
    }

    res.status(statusCode).json({ 
      success: false,
      error: errorMessage 
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start server
app.listen(PORT, () => {
  console.log(`CHILL GUY API running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/chat`);
});

export default app;
