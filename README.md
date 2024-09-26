# 🎫 Ticket Bot

This project is a 24 hours challenge to make a simple Discord ticket bot using [discord.js](https://discord.js.org/).

⚠️ **Disclaimer:** This bot is using discord.js v12, it has not been updated to the latest version and I currently have no plans to do so.

## 💬 Commands

-   Info

| Command | Description                                          |
| ------- | ---------------------------------------------------- |
| botinfo | Displays in-depth information about the bot.         |
| help    | Returns the help page, or one specific command info. |
| ping    | Returns the bot's latency and API ping.              |
| uptime  | Check how long has the bot been online.              |

-   Owner

| Command | Description                           |
| ------- | ------------------------------------- |
| eval    | Evaluate a specified JavaScript code. |
| restart | Restarts the bot.                     |
| test    | Checks if the bot is working.         |

-   Ticket

| Command    | Description                             |
| ---------- | --------------------------------------- |
| add        | Adds a member to a specified ticket.    |
| close      | Closes the ticket.                      |
| delete     | Delete a specified ticket.              |
| new        | Creates a new ticket.                   |
| open       | Re-opens a ticket.                      |
| remove     | Removes a member to a specified ticket. |
| transcript | Transcripts a specified ticket.         |

## ⚙️ Environment Variables

To run this project, rename `example.env` to `.env` and fill out the following values:

```
BOT_TOKEN = your_bot_token
BOT_PREFIX = t!
BOT_OWNER = your_discord_id
```

## 🚀 Run Locally

Install Node.js
using chocolatey or [the installer](https://nodejs.org/en/download/prebuilt-installer)

```bash
  choco install nodejs-lts --version="20.17.0"
```

Clone the project

```bash
  git clone https://github.com/zhon12345/Ticket-Bot.git
```

Go to the project directory

```bash
  cd Ticket-Bot
```

Install dependencies

```bash
  npm install
```

Start the bot

```bash
  npm run start
```

## 🤝 Contributing

If you'd like to contribute, please ensure the issue/suggestion doesn't already exists. You can [create an issue](https://github.com/zhon12345/Ticket-Bot/issues/new) or [fork this repository](https://github.com/zhon12345/Ticket-Bot/fork) and submit a pull request.

## ❓ Feedback

If you have any feedback, you can reach me on my [Discord server](https://discord.gg/jMpw3jw).
