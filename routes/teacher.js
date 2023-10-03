import express from "express";

const router=express.Router();

router.get('/', (req, res) => {
    res.send('teacher page')
  })
  router.get('/details', (req, res) => {
    res.send('details teacher page')
  })
export default router