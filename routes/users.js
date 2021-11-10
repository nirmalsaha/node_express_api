import express from 'express';

const router = express.Router();    

// all routs are here are starting with /users so only '/' is enough in router

router.get('/', (req, res) => {
    res.send('hello');
});


export default router;