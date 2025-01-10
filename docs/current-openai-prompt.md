# AirFire 2024 ChatGPT Usage

_Updated January 10, 2025_

The following code snippets are taken from operational code run by the USFS
AirFire group and demonstrate how ChatGPT is currently used:

## Executable Script

A NodeJS script is run every 10 minutes to translate any recently published
outlooks. The top level script queries a database for text blocks, requests
a translation from OpenAI and then inserts these translations into the database.

For this project, the relevant parts are described below.

## Setup

A `.env` file has the following:

```
# OpenAI
OPENAI_API_KEY="*****"
```

A filed named `services/translation.js` has the following setup code:

```
// NOTE:  These are CommonJS modules and cannot use "import { <name> }" syntax
import OpenAI from "openai";

// ChatGPT settings
const openai_model = "gpt-4-turbo";
const openai_temperature = 0.2;
const openai_language_code = "es";
const openai_prompt = `
You are an official English to Spanish translator translating air quality forecasts
from English into Spanish. Use the following word-translation pairs when translating:

GOOD => BUENO
MODERATE => MODERADA
USG => IGS
UNHEALTHY => INSALUBRE
VERY UNHEALTHY => MUY INSALUBRE
HAZARDOUS => PELIGROSA

Translate the following air quality discussion into Spanish:
`;
```

## Calling ChatGPT

The `services/translation.js` file defines an internal function that performs
translations separately for each block of text.

```
async function _chatGPT_translate({
  client = null,
  prompt = null,
  text = null,
  input_code = "en",
  output_code = "es",
  model = "gpt-4-turbo",
  temperature = 0.4,
}) {
  if (text === null || text === undefined) {
    logger.trace("no text to translate");
    return "";
  } else {
    text = text.trim();
  }

  // Saw "null" once
  if (text === "null" || text === "") {
    logger.trace("no text to translate");
    return "";
  }

  const start = Date.now();

  const chatCompletion = await client.chat.completions.create({
    model: model,
    temperature: temperature,
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: text },
    ],
  });

  const end = Date.now();
  logger.trace(`translation time: ${end - start} ms`);

  // TODO:  Handle errors
  let translatedText = chatCompletion.choices[0].message.content;

  return translatedText;
}
```
