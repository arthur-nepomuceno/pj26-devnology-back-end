import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running successfully on port: ${PORT}`)
});
