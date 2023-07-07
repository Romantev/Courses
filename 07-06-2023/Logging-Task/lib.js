import fs from "node:fs/promises";

export const createLog = async (myCase) => {
  let logStatus = myCase;
  let logLevel = "Info";

  if (logStatus === "Successful") {
    logLevel = "Info";
  } else if (logStatus === "Failed") {
    logLevel = "Error";
  } else if (logStatus === "Problem") {
    logLevel = "Warn";
  }
  const randomUserID = Math.floor(Math.random() * 999999999 + 10000000);
  const logDate = new Date().toUTCString();

  const content = `${logLevel} :: ${logDate} :: User ${randomUserID} Log ${logStatus}\n`;

  const pathLog = new URL("./logs/log.txt", import.meta.url);
  const pathInfo = new URL("./logs/info.txt", import.meta.url);
  const pathError = new URL("./logs/error.txt", import.meta.url);
  const pathWarn = new URL("./logs/warn.txt", import.meta.url);

  try {
    await fs.access("./logs");
    await fs.appendFile(pathLog, content, { encoding: "utf-8" });
  } catch (err) {
    await fs.mkdir("./logs");
    await fs.appendFile(pathLog, content, { encoding: "utf-8" });
  }
  if (logStatus === "Successful") {
    await fs.appendFile(pathInfo, content, { encoding: "utf-8" });
  } else if (logStatus === "Failed") {
    await fs.appendFile(pathError, content, { encoding: "utf-8" });
  } else if (logStatus === "Problem") {
    await fs.appendFile(pathWarn, content, { encoding: "utf-8" });
  }
};
