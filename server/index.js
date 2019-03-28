const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, '..', 'dist')

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}` ))