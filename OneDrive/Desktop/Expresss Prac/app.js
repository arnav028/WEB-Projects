
const express = require('express');
const app = express();

app.get("/json", (req, res) => {
    res.json({
      message: "Hello json"
    });
  });

  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
