const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/github',
  passport.authenticate('github', { scope: ['user:email'] })
);


router.get('/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.send('Login successful congratulations');
  }
);


router.get('/logout', (req, res) => {
  req.logout(() => {
    res.send('Logged out');
  });
});

router.get('/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true, user: req.user });
  } else {
    res.json({ loggedIn: false });
  }
});

module.exports = router;