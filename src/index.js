import dotenv from "dotenv";
import { app } from "./app.js";
import { consoleLogger } from "../utils/logger.js";
import { asyncHandler } from "../utils/async.handler.js";
import { getExcelFilePath } from "../services/excel.services.js";

dotenv.config({
  path: "./.env",
});

app.listen(process.env.PORT || 3001, () => {
  consoleLogger.info(
    `HTTP Server is listening | PORT: ${process.env.PORT || 3000}`
  );
});

app.all("/", (_, res) => {
  consoleLogger.info("Just got a request for PILLP API's.");
  res.send(`
        <center>
          <b style="font-size: 42px;">
            PILLP Backend API's are running!<br>
            Apparently, it is running on port ${process.env.PORT || 3000}.
            <br>
            <br>
            <b style="font-size: 32px;">[The Syntax Dev Team] 👨‍💻 Rohan Debnath</b>
          </b>
        </center>
      `);
});

app.get("/health", (_, res) => res.send("Healthy"));

app.get(
  "/api/v1/download-employee-leaves",
  asyncHandler(async (req, res) => {
    return res.download(getExcelFilePath("employee"));
  })
);

app.get(
  "/api/v1/download-hr-manager-leaves",
  asyncHandler(async (req, res) => {
    return res.download(getExcelFilePath("hr"));
  })
);
