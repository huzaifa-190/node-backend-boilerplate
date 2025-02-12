import "dotenv/config"; // Load environment variables

import connectDB from './db/index.js'
import {app} from './app.js'


// Connect to Database and Start Server
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`\n\n🚀 Server running on ${process.env.API_BASE_URL}${process.env.PORT || 5173}`);
  });
}).catch((error) => {
  console.error("\n\n❌ MongoDB Connection Error:\t\t", error,"\n\n");
  process.exit(1); // Exit process with failure
})

