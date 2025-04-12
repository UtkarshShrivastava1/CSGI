const express = require('express');
const router = express.Router();
const { protect, isAdmin } = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');
const {
  getAllImages,
  getImageById,
  uploadImage,
  deleteImage
} = require('../controllers/galleryController');

// Public routes
router.get('/', getAllImages);
router.get('/:id', getImageById);

// Admin routes
router.post(
  '/',
  protect,
  isAdmin,
  uploadMiddleware,
  uploadImage
);

router.delete('/:id', protect, isAdmin, deleteImage);

module.exports = router;