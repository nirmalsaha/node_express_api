import express from 'express';

const router = express.Router();    

const users = [
    {
        firstName: "Nirmal",
        lastName: "Saha",
        age: 25
    }
]

// all routs are here are starting with /users so only '/' is enough in router
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});


export default router;  