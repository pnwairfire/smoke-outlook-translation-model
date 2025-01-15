import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port =3000;

app.use(express.json());
app.use(cors());

const openai = new OpenAI(
    {
        apiKey : process.env.OPENAI_API_KEY
    }
);

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

app.post("/SmokeOutLookTranslation",async function(req,res) {
    await delay(1000); 
    const userText = req.body.text;

    try{
        const completion = await openai.chat.completions.create
        (
            {
                model : "gpt-3.5-turbo",
                messages: [
                    {
                        "role" : "system","content" : "Translate to Spainish: "
                    },
                    {
                     "role" :"user","content":userText   
                    }
                ],
                temperature:0.2,
                max_tokens:200
                

            }
        );
       

        res.json({ "This is our test translation": completion.choices[0].message.content });
    }
    catch(error)
    {
        console.error("Error:", error); 
        res.status(500).json({error:"here is the error message"+error.message});
    }

    
}
);
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});