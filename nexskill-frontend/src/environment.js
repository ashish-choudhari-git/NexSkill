let IS_PROD = false;
const server = IS_PROD
  ? "https://nexskill.onrender.com"
  : "http://localhost:4000";

export default server;
