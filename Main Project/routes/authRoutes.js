const express= require('express')
const router = express.Router();
const passport = require('passport');

// module.exports = app => {
  router.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  router.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/blogs');
    }
  );

  router.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
// };

module.exports = router;
