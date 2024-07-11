const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_56_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICAzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpSlFuNWl0QVRjNlh5UDEyQUpDbExJUTlmRkxwbDZIY09BQjdIOFhaV3VZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQbnJlb3VPclRqYTFiRXVHcjJmYW5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImMzZmQ2MTFjLTBlNjQtNDY0NS1hNDJmLTkzNDYyODUxNjIzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAxMjgsXG4gICAgICAxMzMsXG4gICAgICAxNzMsXG4gICAgICAyNDksXG4gICAgICA0LFxuICAgICAgODcsXG4gICAgICAxNixcbiAgICAgIDE4NSxcbiAgICAgIDYzLFxuICAgICAgOCxcbiAgICAgIDE2OCxcbiAgICAgIDE3MixcbiAgICAgIDE2NyxcbiAgICAgIDUzLFxuICAgICAgMTMyLFxuICAgICAgODYsXG4gICAgICAxNjEsXG4gICAgICA5MixcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDE3MyxcbiAgICAgIDI1NCxcbiAgICAgIDE1MCxcbiAgICAgIDc5LFxuICAgICAgODcsXG4gICAgICAxMCxcbiAgICAgIDEwMSxcbiAgICAgIDEyMyxcbiAgICAgIDIxOSxcbiAgICAgIDYxLFxuICAgICAgMzMsXG4gICAgICAxMjAsXG4gICAgICAyMTAsXG4gICAgICAxMjgsXG4gICAgICAxNzIsXG4gICAgICAxNjEsXG4gICAgICA3NSxcbiAgICAgIDE5NSxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZEWFZFM0EyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYwODM0NzU2OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MzAzMzE3NDkyNTM5NDo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLV1czNEFIRUllanZMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9pQWpELyt2eVFkTFZGbXE5dkZpdmdCR0FmaDdhRG93RU1hek1EbG42aVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaWVrbzlHSnFXREZuK1g2NUFuMWdCNWNNWkJBbit2TzZFOUxGTDRjSHdzRzNYaHpFTVhQbE4rWVJLc0xwN0hpb1hIL0NLVDl1M282NmFuSGo5SkJoRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjBGYlVwQ0tydENSZzNHOHpFRFBKNFJlcFJFZVlFMTBURTZzMkw3NjlLZVVkNC9URnB3cFJCdXR0NXVKYkxEWDFkNHNvWlp0UXYyT2pFaXZvQ1BqQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MDgzNDc1Njo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjUyMTcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnVRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCdVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrZ2xrUCtmMzNTeHphOVh2Rk8yN0dFeFhlR1hoTEt4U1dqQ3A1ZWxvcFl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODA2MDc1MjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYzNDc1ODI4NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
