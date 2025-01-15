This is a test API. The server.js file is connected to the ChatGPT API and returns a sample translation. It only contains a POST method and runs on port 3000 with the route /SmokeOutLookTranslation.
The request body should be in the following format: {"text": "xxxxxxxxxx"}

The test API key is available in the shared document and has a $5 limit. Once the $5 limit is reached, OpenAI will reject further requests.
To use this API, install all dependencies by running npm install. After that, you can start the server and test it.

Before use this API please install all packages.

The next step is to integrate the API with the front end.

Curl Code for testing:
Test key if works:
curl -X POST https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer "our api key"" \
  --data-raw '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Translate Hello to Spanish"}],
    "temperature": 0.7
  }'

Test Api if works on port 3000:
curl -X POST "http://localhost:3000/SmokeOutLookTranslation" \
-H "Content-Type: application/json" \
-d '{"text": "Hi this is our test project!"}'   
