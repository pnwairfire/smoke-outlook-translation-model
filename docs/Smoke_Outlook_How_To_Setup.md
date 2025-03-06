# How to Use the Smoke Outlook Translation Model UI

This guide will walk you through setting up and using the **Smoke Outlook Translation Model UI**, built with ExpressJS and OpenAI, for testing translations and comparing different models. Follow the instructions below to get started.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- Access to OpenAI API keys
- GitHub repository with the required project files

## Step 1: Clone the Repository

1. Navigate to the repository on GitHub.
2. Clone the repository to your local machine using the command:

    ```bash
    git clone https://github.com/your-repo-name/smoke-outlook-translation
    ```

## Step 2: Set Up Environment Variables

To securely store and use your OpenAI API key, create a `.env` file in the root directory of the project.(NOTE: This will be in the same location as your server.js file)

1. Create a `.env` file.
2. Add your OpenAI API key as follows:

    ```bash
    api_key=your_openai_api_key
    ```

## Step 3: Install Dependencies

Navigate to the project directory and install all required dependencies:

```bash
cd smoke-outlook-translation
npm install
```
This will install all the necessary packages listed in package.json.

## Step 4: Run the Server

Once the dependencies are installed, you can start the server by running:

```bash
npm run start
```
This will start the server, and the application will be available on your browser at:

```bash
localhost:3000
```
## Step 5: Using the Translation UI

1. Open a browser and go to localhost:3000.
2. Enter the desired content in the text box and set the temperature value (default is 0.7).
3. Click the Translate button.
4. The page will display translations using both the base model (gpt-4o) and the fine-tuned model (gpt-4o-2024-08-06).

## Step 6: View Translations

Once you submit the form, the results page will show:

- The original prompt and text you submitted.
- Translation 1 from the base model.
- Translation 2 from the fine-tuned model.

## Step 7: Troubleshooting

If you encounter issues, check the following:

- Ensure your OpenAI API key is correctly placed in the .env file.
- Verify that the server is running (check for any errors in the terminal).
- Confirm that the OpenAI API quota has not been exceeded.