require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const YOUR_SITE_URL = process.env.YOUR_SITE_URL;
const YOUR_SITE_NAME = process.env.YOUR_SITE_NAME;

const systemMessage = `You are a helpful cooking assistant. Follow these rules strictly:
1. Focus on queries related to food, cooking, recipes, ingredients, or kitchen techniques.
2. Always provide full sentences when discussing different recipes or answering cooking-related questions.
3. When asked how to make something specific, provide a complete recipe with:
   - A list of all required ingredients with measurements
   - Step-by-step cooking instructions
   - Cooking time and temperature information
   - Serving size
   - Any special equipment needed
   - Tips for preparation and serving
4. Be comprehensive and detailed in your responses, ensuring all necessary information is included.
5. If a query is not related to food or cooking, politely redirect the conversation back to culinary topics.
6. When given a list of ingredients, provide at least 4 recipe names separated by commas. Do not include any additional information unless specifically requested.`;
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    console.log('Sending message to OpenRouter:', message);

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: message },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': YOUR_SITE_URL,
          'X-Title': YOUR_SITE_NAME,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Response from OpenRouter:', response.data);

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      let aiResponse = response.data.choices[0].message.content;
      
      // If it's a recipe detail request, format the response
      if (aiResponse.includes('Ingredients:')) {
        const [ingredients, ...steps] = aiResponse.split('\n\n');
        aiResponse = `${ingredients}\n\n${steps.join('\n')}`;
      }
      
      res.json({ response: aiResponse });
    } else {
      console.error('Unexpected response structure:', response.data);
      res.status(500).json({ error: 'Unexpected response structure from AI service.' });
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
