const dummyAnalyticsData = [
    {
      provider: "OpenAI",
      model: "GPT-4",
      requests: 1500,
      costPerRun: 0.02,
      totalCost: 30.0,
      apiKey: "sk-openai-12345",
    },
    {
      provider: "Google",
      model: "Palm 2",
      requests: 1000,
      costPerRun: 0.03,
      totalCost: 30.0,
      apiKey: "sk-google-67890",
    },
    {
      provider: "DeepStack",
      model: "Custom Vision",
      requests: 800,
      costPerRun: 0.015,
      totalCost: 12.0,
      apiKey: "sk-deepstack-54321",
    },
    {
      provider: "Anthropic",
      model: "Claude 2",
      requests: 600,
      costPerRun: 0.025,
      totalCost: 15.0,
      apiKey: "sk-anthropic-11223",
    },
    {
      provider: "Hugging Face",
      model: "Bloom",
      requests: 700,
      costPerRun: 0.018,
      totalCost: 12.6,
      apiKey: "sk-huggingface-99887",
    },
  ];
  
  export default dummyAnalyticsData;
  