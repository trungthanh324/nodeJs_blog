const express = require('express') // tai library express luu vao vien express
const app = express()
const port = 3000

//.get : dinh nghia route (tuyen duong) la  dau "/"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})