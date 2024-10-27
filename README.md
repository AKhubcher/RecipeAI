# RecipeAI: Your Intelligent Cooking Assistant

RecipeAI is an interactive web application that leverages AI to assist users with cooking-related queries, recipe suggestions, and culinary advice. It's designed to be your personal sous-chef, helping you explore new recipes, understand cooking techniques, and make the most of your ingredients.

## Features

- **AI-Powered Cooking Assistant**: Get instant answers to your cooking questions and recipe inquiries.
- **Multiple Chat Sessions**: Start new conversations while keeping your previous chats accessible.
- **Recipe Suggestions**: Ask for recipes based on ingredients you have on hand.
- **Detailed Instructions**: Get step-by-step cooking instructions for specific recipes.
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing.
- **Responsive Design**: Use RecipeAI on desktop or mobile devices.

## Technologies Used

- React.js for the frontend
- Node.js and Express for the backend
- OpenRouter API for AI-powered responses
- React Router for navigation
- FontAwesome for icons
- Axios for HTTP requests

## How to Run RecipeAI

- Follow these steps to get RecipeAI up and running on your local machine:

1. **Clone the Repository**
   ```
   git clone https://github.com/yourusername/RecipeAI.git
   cd recipeai
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory and add the following:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key
   YOUR_SITE_URL=http://localhost:3000
   YOUR_SITE_NAME=RecipeAI
   ```
   - Replace `your_openrouter_api_key` with your actual OpenRouter API key.

4. **Start the Backend Server**
   ```
   npm run server
   ```

5. **Start the Frontend Development Server**
   - Open a new terminal window and run:
   ```
   npm start
   ```

6. **Access the Application**
   - Open your web browser and go to `http://localhost:3000`

## Usage

- Type your cooking-related questions or ingredient lists in the chat input.
- Click the "New Chat" button to start a fresh conversation.
- Use the sidebar to navigate between different chats or access the Profile, Settings, and Help pages.
- Toggle between light and dark modes in the Settings page.

## Acknowledgments

- Thanks to OpenRouter for providing the AI capabilities.
- Icons provided by FontAwesome.
- Built with React and Express.

Enjoy cooking with RecipeAI!
