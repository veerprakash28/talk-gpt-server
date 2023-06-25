const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.SECRET_KEY,
});

const openai = new OpenAIApi(configuration);
module.exports.getGPTReponse = async (req, res, next) => {
  try {
    console.log(req.body);
    let prompt = `${req.body.prompt}`;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 1.0,
      max_tokens: 1000,
      top_p: 0.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    let gptResponse = response.data.choices[0].text;
    gptResponse.replace(/\n/g, "");

    if (response) {
      return res.status(200).json({
        success: true,
        data: gptResponse,
      });
    } else {
      throw err;
    }
  } catch (err) {
    console.log("Something went Wrong", err);
    res.send({
      message: "Something went Wrong!",
      err,
    });
  }
};
