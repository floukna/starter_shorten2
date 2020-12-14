import { Router } from 'express';
import db from '../db/models';
const router = Router();

const allowedClick = 10;

router.get('/:shortUrl', async (req, res) => {
  let shortUrlCode = req.params.shortUrl;
  let url = await db.url.findOne({
    where: {
      urlCode: shortUrlCode
    }
  });
  try {
    if (url) {
      let clickCount = url.clickCount;
      if (clickCount >= allowedClick) {
        console.log(
          'The click count for shortcode ' +
            shortUrlCode +
            ' has passed the limit of ' +
            allowedClick
        );
        return res
          .status(400)
          .json(
            'The click count for shortcode ' +
              shortUrlCode +
              ' has passed the limit of ' +
              allowedClick
          );
      }
      //   clickCount++;
      //   await url.update({ clickCount });
      return res.send(url.longURL);
    } else {
      return res.send(process.env.CLIENT_URL);
    }
  } catch (err) {
    console.error('Error while retrieving long url for shorturlcode ' + shortUrlCode);
    return res.redirect(process.env.CLIENT_URL);
  }
});

module.exports = router;
