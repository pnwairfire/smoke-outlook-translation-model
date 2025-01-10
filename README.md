# Smoke Outlook Translation Model

_Updated January 08, 2025_

UW iSchool practicum exploring training at ChatGPT model on Outlook translations.

## Description

The USFS AirFire group maintains systems that forecasters use to create Smoke
Outlooks, i.e. wildfire smoke forecasts. These are initially written in English.
Then they are auto-translated into Spanish with ChatGPT. Finally, the translations
are manually edited by a native speaker. The goal of this project is to use our
corpus of existing outlooks and translations to train a ChatGPT model for improved
translations. A simple user interface will also be needed to allow professional
translators to compare translations using the trained and untrained models.

## Goals

We hope to reduce the amount of time staff spend translating outlooks while
maintaining high quality translations. If all goes well, we will end up with: 1)
a trained model for improved translations; 2) tailored prompts; and 3) a small
user interface to test ChatGPT models. If successful, this approach will be used
to support translation targets other than Spanish.

## Deliverables

Deliverables include: 1) a trained ChatGPT model and short HOWTO documentation;
and 2) a simple ExpressJS web service to compare translation output from two
different models (we already having a working prototype translation UI).

## Specific Skills Needed

Familiarity with javascript/NodeJS is key. Interaction with the ChatGPT API will
be in javascript and the user interface will be built in ExpressJS so knowledge
of html/css is also needed for that part. Some familiarity with Spanish will no
doubt be helpful but is not necessarily required. Training the ChatGPT model will
involve following instructions on the OpenAI website and writing javascript code
to interact with the ChatGPT API. Github is used for version control.

# Background

In August of 2024, OpenAI announced the ability to fine-tune custom versions
of ChatGPT: https://openai.com/index/gpt-4o-fine-tuning/

This is potentially very useful for the USFS AirFire group's use of ChatGPT as
a translation service. The main goal of this project is to learn more about
this new functionality, try it out, and assess how difficult/expensive it would
be to train (aka fine tune) a custom ChatGPT on our corpus of translated
smoke outlooks.

Additional resources:

- https://platform.openai.com/docs/concepts
- https://platform.openai.com/docs/guides/text-generation
- https://platform.openai.com/docs/guides/prompt-engineering
- https://simplified.com/blog/ai-writing/how-to-train-chatgpt
- https://www.chatbase.co/blog/how-to-train-chatgpt-with-your-data
- https://custom.mt/guide-how-to-fine-tune-gpt-35-for-translation/
- https://platform.openai.com/docs/guides/fine-tuning
- https://platform.openai.com/docs/api-reference/fine-tuning
