const path = require('path');
const express = require('express');

const router = express.Router();

router.get(
  '/willsentanceiswatching/ctri16BESTcohort/tbheveryoneiscoolthough/idliketothankjeenybrackletandcodesmith/shoutoutfellows',
  (_req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../../client/topsecretacornpage.html')
    );
  }
);

module.exports = router;
