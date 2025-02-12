import {mongoose} from 'mongoose'

const atlasURI = process.env.ATLAS_URI;


const connectDB = async () => {
  try {

    console.log("\n\nConnecting to MongoDB Atlas...");
    await mongoose.connect(atlasURI);
    console.log("\n✅ MongoDB Connected!");
  } catch (error) {
    console.error("\n❌ MongoDB Connection Error:\t\t", error,"\n\n");
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;