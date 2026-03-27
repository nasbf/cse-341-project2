const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use ('/', require('./routes'));
app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('This is my Project 2')
});

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL},
  function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB with Mongoose');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  })
  .catch((error) => {
    console.error('Connection error:', error);
  });