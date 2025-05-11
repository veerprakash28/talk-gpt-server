const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
module.exports.getGPTResponse = async (req, res, next) => {
  try {
    console.log(req.body);
    let prompt = `${req.body.prompt}`;
    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    let gptResponse = response.text;
    gptResponse = gptResponse.replace(/\n/g, "");

    if (response) {
      return res.status(200).json({
        success: true,
        data: gptResponse,
      });
    } else {
      throw new Error("No response from Gemini API");
    }
  } catch (err) {
    console.log("Something went wrong", err);
    res.status(500).send({
      message: "Something went wrong!",
      err: err.message,
    });
  }
};
