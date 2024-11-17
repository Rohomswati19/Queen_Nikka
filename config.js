//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "254710602625";
global.owner = process.env.OWNER_NUMBER || "254710602625";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVBKNEZJb1V1WS9pM3VIVyt1VWhPSzJRWTIwU0U2YlRjRjBPOTFLNXAwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidExDR2pNNWNJMnBhbVZpV21iQXpwSmtCcjhqY1BzczdXRXFGUFpsZ1EyOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TWw3SXg5Tk9XL3g3UURSUkJPdisrRVhtSExVelVtWHVLMlpZZDE1ZmxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVFRxUGhhYi9iYVVNSFd5M2hzWTFWcnlETlUzZzYyZU1CV2daNEtaNVVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFYXpFaDJORU8rSTVLeTB1SUUyenR1WEQ3dnNndFBYaFp5M3ZYUEx2bVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFUczNRd0JiZ3Z0bVhicUNzaytJdS9NK0o4TERhdGNoZldZQ2xNeXBrMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURwcExFOHV5NXBGd1c4MHBSVFc3Zm45N2l2TFNhYTZtRi9VOGpRdVVuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3JXSU5taVpHNGc2NWFYdHFrbUpoS2ZydGlGcnJIbmdOUkR1dDhSMkxEaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtuQmFMejIyWkJoNkJtWU5nVWlEL3NJMW9oaEJ4T05MK0VsU1JXZ1c1M3dVcGpHeHNWb2NNNUw1Y1hXZFlqZWI4RzMxSnhielpwdnBLWlEya0J0YkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6IlE0OHAvZTYwU3BWdlVONXlsQjNhSTFna09PM01jNFY1c3NDK3cxQWpxVWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzgyNzU3OTc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYzNjFDRUY5RjdDQUEwRTFDRkJCRUZENDczMDgxNjE2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE4NTYxNjF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4Mjc1Nzk3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMDFCNzVENDE3REVGM0E4RUZGRDA2Qzc0RjZDNUY5NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxODU2MTYxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKNWhwUGVnNVRFLU1NbEFQbGtuT0t3IiwicGhvbmVJZCI6IjljOTc5ZGU5LWM3YjAtNDE2OC05N2M3LWEyYzBkODcwZmVjOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0SWFVb2pGcENieWc2b3lVMUFVK29neTBnNFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3QxT0cvL3V6QVFyaWg0VVFhMlZPYjRITk5NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQ4WThTRVZXIiwibWUiOnsiaWQiOiIyNTQ3ODI3NTc5Nzk6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGZmZiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDMveDNZUWpvN291UVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoianVaSUZGOC81MlJrOThQRnhUazVtME4vYjZmSzdWYkp0UU83eWxQMWhGQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQS8rdkt0YzRud1E5blJVM2I0djRmRnFmQUtGUU1qb29XWXR3N3pRWUZISU55MndiaWc4TitveERBRFZUak5iQ1NNcitLMmRYQ2J4d2dhM1VFQ1RYRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZDbEs1a2cwTC8rbXZEMndVbmRGbzdIcU9rM0E3WTFYV0NLa3J3dGxaeCtoV3Qwc1I2Q0RIL2RtNmlPdm1uY1FKVVpodGlmY29ZWVZqOE1yVTQ3V0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzgyNzU3OTc5OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk3bVNCUmZQK2RrWlBmRHhjVTVPWnREZjIrbnl1MVd5YlVEdThwVDlZUlEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE4NTYxNTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXljIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
