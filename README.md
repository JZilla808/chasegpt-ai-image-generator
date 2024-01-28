
# Welcome to the ChaseGPT AI Image Generator

This innovative web application leverages the power of OpenAI's ChatGPT and DALL-E models to generate creative images based on user prompts. It's a showcase of integrating AI with modern web technologies to create a seamless and interactive user experience.

## Features

- **AI-Powered Suggestions:** Utilizes ChatGPT to generate text prompts and DALL-E to turn those prompts into unique images.
- **Modern Web Technologies:** Built with Next.js and React for a fast and scalable front-end.
- **Stylish Design:** Styled with Tailwind CSS for a responsive and modern interface.
- **TypeScript Support:** Ensures type safety and improves developer experience with TypeScript.
- **Serverless Architecture:** Implements a microservice architecture using Azure Functions for efficient scaling and management.
- **Real-Time Data Fetching:** Leverages useSWR for real-time data fetching and state management.
- **User Notifications:** Integrates React Hot Toast for engaging and informative toast notifications.

## Microservice Architecture

This project employs a microservice architecture using Azure Functions, enabling independent operation of different parts of the application. This design choice significantly improves the scalability and reliability of the application. By leveraging serverless architectures, it ensures efficient resource usage and easier maintenance, making the application robust for handling various user demands.

## Getting Started

To get started with this project, ensure that you have Node.js and pnpm installed on your machine.

1. **Clone the repository:**
   ```bash
   gh repo clone JZilla808/chasegpt-ai-image-generator
   cd chasegpt-ai-image-generator
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```

4. **View the Application:**
   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Scripts

- `start`: Runs the Azure Functions locally.
- `test`: Placeholder for future test scripts.

## Dependencies

- `@azure/functions`: Azure Functions for JavaScript.
- `@azure/storage-blob`: Azure Storage SDK for JavaScript.
- `axios`: Promise-based HTTP client for the browser and Node.js.
- `openai`: OpenAI JavaScript SDK.
