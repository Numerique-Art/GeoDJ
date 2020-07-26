const express = require('express');
const app = express();

app.all('/',(req,res) => {
  res.status(200).send('Hi !');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});
