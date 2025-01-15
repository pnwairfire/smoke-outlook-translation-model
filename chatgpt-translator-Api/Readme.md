This is an test api. Server.js connected to ChatGPT Api and returned sample translation. 
Next Step: Work with Front-End; 
Test key if works:
Tcurl -X POST https://api.openai.com/v1/chat/completions \
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