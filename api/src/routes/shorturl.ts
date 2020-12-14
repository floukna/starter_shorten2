import { Router } from 'express';
import shortid from 'shortid';
import validUrl from 'valid-url';
// const Url = require("../mongomodel/url");
import db from '../db/models';

const router = Router();

router.post('/', async (req, res) => {
  const longUrl = req.body.longUrl;
  const baseUrl = process.env.CLIENT_URL;
  console.log('base url ' + baseUrl + '   ' + longUrl);
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Internal error. Please come back later.');
  }

  const urlCode = shortid.generate();

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await db.url.findOne({
        where: {
          longURL: longUrl
        }
      });
      if (url) {
        return res.status(200).json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = await db.url.create({
          urlCode,
          longURL: longUrl,
          shortUrl,
          clickCount: 0
        });

        return res.status(201).json(url);
      }
    } catch (err) {
      console.error(err.message);
      return res.status(500).json('Internal Server error ' + err.message);
    }
  } else {
    res.status(400).json('Invalid URL. Please enter a vlaid url for shortening.');
  }
});

module.exports = router;
