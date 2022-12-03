// const express = require('express');
// const app = express();

// app.get("/", (req, res)=> {
//   res.send("Welcome to home page!")
// })

// app.get('/about', (req, res)=> {
//   res.send('Welcome to about page!')
// })

// app.listen(3000, ()=> {
//   console.log('Server listening on port 3000')
// })

//**                   Express Middleware                         **/


// const express = require('express');
// const app = express();

// const logIn = function(req, res, next){
//   console.log('LOGGED!')
//   next()
// }

// const signIn = function(req, res, next){
//   console.log('Signed!')
//   next();
// }

// app.use(logIn);
// app.use(signIn)

// app.get('/', (req, res)=> {
//   res.send('User is loggedIn successfully!')
// })

// app.listen(3000, ()=> {
//   console.log('App listening on port 3000')
// })

//**                        Routing in Express                          **/


// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;

// const data = {
//   id:  1,
//   name: 'Pakistan'
// }

// app.get('/', (req, res)=> {
//   res.end('Home page!')
// })

// app.get('/about', (req, res)=> {
//   res.end('About page!')
// })

// app.get('/users', (req, res)=> {
//   res.send(data)
// })

// app.listen(PORT, ()=> {
//   console.log(`Server listening on  port ${PORT}`)
// })

//**                         Views in Express                         **/


// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 4000;

// app.set('view engine', 'pug');

// app.get('/', (req, res)=> {
//   res.render('index', {
//     title: 'about page',
//     heading: 'Welcome to Express template engine',
//     paragraph: 'This is a simple overview of the template engine.simple overview of the template engine.simple overview of the template engine.simple overview of the template engine.simple overview of the template engine'
//   })
// }).listen(PORT, ()=> {
//   console.log('Server listening on port', PORT)
// })

//**                   Creating simple form using express            **/

// const express = require('express');
// const app = express()
// const path = require('path');

// const PORT = process.env.PORT || 5000;

// app.use(express.urlencoded({
//   extended: true
// }))

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.get('/', (req, res)=> {
//   res.render('index', {title: 'Login form'})
// })

// app.post('/form_submit', (req, res)=> {
//   const username = req.body.username
//   const email = req.body.email
//   res.json({
//     username : `${username}`,
//     email: `${email}`
//   })
// })

// app.listen(PORT, ()=> {
//   console.log(`Server listening on port ${PORT}`)
// })
//==================================================================//

//**                       Session in express              **/

// const express = require('express');
// const app = express();
// const session = require('express-session');

// const PORT = process.env.PORT || 8000

// // Session creation //
// app.use(session({
//   secret: 'Your secret key',
//   resave: true,
//   saveUninitialized: true
// }))

// app.get('/', (req, res)=> {
//   req.session.name = 'Usama khan',
//   res.send('Session started!')
// })

// app.get('/session', (req, res)=> {
//   const name = req.session.name
//   res.send(name)
// })
// app.get('/destroy', (req, res)=> {
//   req.session.destroy(function(err){
//     console.log('Session destroyed!')
//   })
//   res.end()
// })

// app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))

//===========================================//

// const express = require('express')
// const app = express()
// const session = require('express-session');

// const PORT = process.env.PORT || 8000

// app.use(session({
//   secret: 'Your Secret Key',
//   resave: true,
//   saveUninitialized: true
// }))

// app.get('/', (req, res)=> {
//   req.session.username = 'usamakhan423',
//   req.session.email = 'xyz@gmail.com'
//   res.send('Session created successfully')
// })

// app.get('/session', (req, res)=> {
//   const username = req.session.username
//   const email = req.session.email
//   res.json({
//     username : `${username}`,
//     email : `${email}`
//   })
// })

// app.get('/destroy', (req, res)=> {
//   req.session.destroy(function(err){
//     console.log('Session destroyed!')
//   })
//   res.end()
// })

// app.listen(PORT, ()=> {
//   console.log(`Server is running on port ${PORT}`)
// })
//========================================================//

//**                        Cookie in Express            **/

const express = require('express');
const app = express()
const cookies = require('cookie-parser');

const PORT = process.env.PORT || 9000

const users = {
  name: 'Ali khan',
  age: 24
}
app.use(cookies());

app.get('/', (req, res)=> {
  res.send('Cookie Tutorial')
})

app.get('/setusers', (req, res)=> {
  res.cookie('userData', users)
  res.send('user data added to cookies')
})

app.get('/getusers', (req, res)=> {
  res.send(req.cookies)
})

app.get('/logout', (req, res)=> {
  res.clearCookie('userData');
  res.send(`Cookies Crashed!`)
})

app.listen(PORT, ()=> {
  console.log(`Server started on port ${PORT}`)
})