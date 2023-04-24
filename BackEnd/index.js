var express = require('express');
var cors = require('cors')
var app = express()
const path = require('path');
// var session = require('express-session')
var bodyParser = require('body-parser')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });
app.use('/public/images', express.static('images'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/public/images', express.static('images'));
app.use(bodyParser.json());
app.use(cors());
require('./app/router/home.router')(app);
require('./app/router/theloai.router')(app);
require('./app/router/child_theloai.router')(app);
require('./app/router/user.router')(app);
require('./app/router/tintuc.router')(app);
require('./app/router/tinh.router')(app);
require('./app/router/danhmuc.router')(app);

app.post('/upload_image_editorjs', upload.single('image'), (req, res) => {
    res.send({
      "success": 1,
      "file": {
        "url": `http://localhost:3030/public/images/${res.req.file.filename}`,
      }
    });
  });
  
  // Upload image 
  
  app.post('/upload_image', upload.single('image_thumnail'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    console.log("req",req.file,"req body" ,req.body)
    res.send({
      "success": 1,
      "file": {
        "url": `http://localhost:3030/public/images/${res.req.file.filename}`,
      }
    })
  });
  
  // api for editorJS Link TOOL
  app.get('/fetchUrl', (req, res) => {
  
    res.send(
      {
        "success": 1,
        "link": req.query.url,
        "meta": {
  
        }
      }
    )
  });
// app.use(session({
// secret: process.env.SESSION_SECRET,
// resave:true,
// saveUninitialized:true
// }));

var port = 3030;
app.listen(port, function () {
    console.log("this server is listening on port " + port);
});
app.get('/fetchUrl', (req, res) => {

  res.send(
    {
      "success": 1,
      "link": req.query.url,
      "meta": {

      }
    }
  )
});