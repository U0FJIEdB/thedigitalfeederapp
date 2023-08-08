//required packagess
require('dotenv').config()
var ejs = require('ejs')
const bodyParser = require('body-parser')
const PORT=process.env.PORT
const express = require('express')
const app=express()
const path = require("path")
const nodemailer=require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const mongoose = require('mongoose')
const session = require('express-session')
var MongoStore = require('connect-mongo')
const users=require(path.join(__dirname,"./src/models/userSchema"))

// Templating Engine
app.set('views', path.join(__dirname,"./src/views"))
app.set('view engine', 'ejs')

//Template Use
app.use(bodyParser.urlencoded({ extended:true }))
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/src/controller'))
app.use(express.json())

/*
//database connection
const uri=process.env.DataBaseUri1
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {})

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: uri,
  })
}))

*/


// Routes
const tdnfRouter = require('./src/routes/index')
app.use('/', tdnfRouter)

app.post('/report',(req,res)=>{
    //console.log(req.body)
    const transporter=nodemailer.createTransport(smtpTransport({
        service:'gmail',
        auth:{
            user:process.env.CADMIN,
            pass:process.env.CPASS
        }
    }))
    const mailOptions={
        from:req.body.email,
        to:process.env.CADMIN,
        subject:`Message from ${req.body.name}:${req.body.email}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            res.send('error')
        }else{
            res.send('success')
        }
    })
})
/*
app.get('/register',(req,res)=>{
    return res.render('register')
})
app.post('/register',(req,res,next)=>{
    //console.log(req.body)
    var userInfo=req.body
    //console.log((userInfo))
    if(!userInfo.name || !userInfo.email || !userInfo.Password || !userInfo.RePassword){
		res.send()
	}else{
        if(userInfo.Password ==userInfo.RePassword){
            users.findOne({email:userInfo.email},function(err,data){   
                if(!data){
                    var c
                    users.findOne({},function(err,data){
                        if(data){
                            c=data.unique_id+1
                        }else{
                            c=1
                        }
                        var newUser=new users({
                            unique_id: c,
                            name: userInfo.name,
                            email: userInfo.email,
                            Password: userInfo.Password,
                            RePassword:userInfo.RePassword
                        })
                        newUser.save(function(err,User){
                            if(err){
                                console.log(err)
                            }else{
                                console.log('Success')
                            }
                        })
                    
                }).sort({_id: -1}).limit(1)
                res.send({"Success":"You are regestered,You can login now."})
                }else{
                    res.send({"Success":"Email is already used."})
                }
            })
        }else{
            res.send({"Success":"password is not matched"});
        }
    }
})
app.post('/signin',function (req,res,next){
    users.findOne({email:req.body.email},function(err,data){
        //console.log(data)
        if(data){
            if(data.Password==req.body.Password){
                req.session.userId=data.unique_id
                req.session.signin = true
                res.send({"Success":"Success!"})
            }else{
                res.send({"Success":"Wrong Password!"})
            }
        }else{
            res.send({"Success":"This Email Is not regestered!"})
        }
    })
})

app.get('/profile', function (req, res, next) {
	users.findOne({unique_id:req.session.userId},function(err,data){
		//console.log("profile data :"+ data)
		if(!data){
			res.redirect('signin')
		}else{
			return res.render('data', {name:data.name,email:data.email})

		}
	})
})

app.get('/logout', function (req, res, next) {
	if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                res.send({"Success":"Logout Successfully!"})
                return next(err)
            } else {
                
                return res.redirect('/')
            }
        })
    }
})
*/
app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`))