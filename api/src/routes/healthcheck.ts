import { Router } from 'express';
const router = Router();

router.get('/healthcheck/:test', (req, res) => {
  console.log('test na kub');
  return res.send({
    success: true,
    message: 'Health Checkkkkkk'
  });
});

module.exports = router;
