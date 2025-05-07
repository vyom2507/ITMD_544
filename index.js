const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Azure Deployment</title>
      </head>
      <body style="display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 2rem; font-family: sans-serif;">
        🎉 Hello from Azure + GitHub Deployment!
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
