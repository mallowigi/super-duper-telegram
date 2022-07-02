import * as expressSession from 'express-session';
import * as passport from 'passport';
import * as refresh from 'passport-oauth2-refresh';
// @ts-expect-error
import { Strategy } from 'passport-twitch.js';
import type { Profile } from 'apps/api/src/app/auth';
import { SESSION_SECRET, CALLBACK_URL, TWITCH_CLIENT_ID, TWITCH_SECRET } from './auth';
import * as express from 'express';

const app = express();

app.use(passport.initialize());
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
}));

const twitchStrategy = new Strategy({
  callbackURL: CALLBACK_URL,
  clientID: TWITCH_CLIENT_ID,
  clientSecret: TWITCH_SECRET,
},
((accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: any) => {
  profile.accessToken = accessToken;
  profile.refreshToken = refreshToken;
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // @ts-expect-error
  done(null, user);
});

passport.use(twitchStrategy);
refresh.use(twitchStrategy);

app.get('/auth/twitch', passport.authenticate('twitch.js'));
app.get('/auth/twitch/callback', passport.authenticate('twitch.js', { failureRedirect: '/' }), (req, res) => {
  // @ts-expect-error
  req.session.user = req.user;
  res.redirect('/');
});
