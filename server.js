import express from 'express';  // defines
import "dotenv/config"; // configure .env file if exist in root folder

const app = express();

// staring server at port number APP_PORT
const APP_PORT = process.env.PORT || 5000;  // check if port defined in .env else set default 5000
app.listen(APP_PORT, () => {
  console.log('Listening to port ${APP_PORT}.')
});
