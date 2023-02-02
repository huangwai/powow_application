import { RtcTokenBuilder, RtcRole, RtmTokenBuilder, RtmRole } from 'agora-access-token';

export default async function handler(req, res) {
  const APP_ID = process.env.APP_ID;
  const APP_CERTIFICATE = process.env.APP_CERTIFICATE;

  if (req.method === 'GET') {
    nocache(req, res);
    generateRTCToken(req, res);
  }

  function nocache(_, res) {
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');
    //next();
  }
  function generateRTCToken(req, res) {
    // set response header
    res.setHeader('Access-Control-Allow-Origin', '*');
    // get channel name
    const channelName = req.query.channel;
    if (!channelName) {
      return res.status(400).json({ error: 'channel is required' });
    }
    // get uid
    let uid = req.query.uid;
    if (!uid || uid === '') {
      return res.status(400).json({ error: 'uid is required' });
    }
    // get role
    let role;
    if (req.query.role === 'publisher') {
      role = RtcRole.PUBLISHER;
    } else if (req.query.role === 'audience') {
      role = RtcRole.SUBSCRIBER;
    } else {
      return res.status(400).json({ error: 'role is incorrect' });
    }
    // get the expire time
    let expireTime = req.query.expiry;
    if (!expireTime || expireTime === '') {
      expireTime = 3600;
    } else {
      expireTime = parseInt(expireTime, 10);
    }
    // calculate privilege expire time
    const currentTime = Math.floor(Date.now() / 1000);
    const privilegeExpireTime = currentTime + expireTime;
    // build the token
    let token;
    if (req.query.type === 'userAccount') {
      token = RtcTokenBuilder.buildTokenWithAccount(
        APP_ID,
        APP_CERTIFICATE,
        channelName,
        uid,
        role,
        privilegeExpireTime
      );
    } else if (req.query.type === 'uid') {
      token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
    } else {
      return res.status(400).json({ error: 'token type is invalid' });
    }
    // return the token
    return res.json({ rtcToken: token });
  }
}
