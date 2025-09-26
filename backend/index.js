import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Conversation Schema
const messageSchema = new mongoose.Schema({
  role: String, // 'user' or 'assistant'
  content: String,
  timestamp: { type: Date, default: Date.now }
});

const conversationSchema = new mongoose.Schema({
  sessionId: String,
  messages: [messageSchema],
  createdAt: { type: Date, default: Date.now }
});

const Conversation = mongoose.model('Conversation', conversationSchema);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Save a conversation
app.post('/api/conversation', async (req, res) => {
  try {
    const { sessionId, messages } = req.body;
    let convo = await Conversation.findOne({ sessionId });
    if (convo) {
      convo.messages = messages;
      await convo.save();
    } else {
      convo = await Conversation.create({ sessionId, messages });
    }
    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a conversation
app.get('/api/conversation/:sessionId', async (req, res) => {
  try {
    const convo = await Conversation.findOne({ sessionId: req.params.sessionId });
    if (!convo) return res.status(404).json({ error: 'Not found' });
    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
