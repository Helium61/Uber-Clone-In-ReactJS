const express = require('express');
const router = express.Router();
const authMiddleWare = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map.controller');
const { query } = require('express-validator');

router.get(
  '/get-coordinates',
  query('address').isString().isLength({ min: 3 }),
  authMiddleWare.authUser,
  mapController.getCoordinates
);

module.exports = router;