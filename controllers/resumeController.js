const openai = require('../openai');

exports.generateFeedback = async (req, res) => {
  try {
    const { resumeText } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: `Review this resume and give improvements:\n${resumeText}`,
        },
      ],
    });

    res.json({ feedback: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.generateQuestions = async (req, res) => {
  try {
    const { role } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: `Generate 5 interview questions for ${role}`,
        },
      ],
    });

    res.json({ questions: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.evaluateAnswer = async (req, res) => {
  try {
    const { answer } = req.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: `Evaluate this interview answer:\n${answer}`,
        },
      ],
    });

    res.json({ evaluation: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
