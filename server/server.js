const app = require('express')();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server listening on *:${port}`));
