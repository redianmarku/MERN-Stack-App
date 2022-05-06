import axios from "axios";

const API_URI = "/api/goals/";

// Create Goal Service
const createGoal = async (goalData, token) => {
  const config = {
    header: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URI, goalData, config);

  return response.data;
};

const goalsService = {
  createGoal,
};

export default goalsService;
