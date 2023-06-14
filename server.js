const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
const PORT = 8007;

require("./src/route/student.route")(app);
require("./src/route/auth.route")(app);


const connectDB= require('./src/config/db.config');
connectDB().then(()=>{
  console.log('DB connected Sucessfully')
}).catch((err)=>{
  console.log('failed to connect DB '+ err)

})
  
  app.listen(PORT, () => {
    console.log('Example app listening on port ${PORT}')
  })
  