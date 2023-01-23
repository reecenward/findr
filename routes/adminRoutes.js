const express = require("express");
const router = express.Router();
const Poop = require('../model/Poop');
const UserItems = require('../model/UserItems');
const { requireAuth, checkUser } = require('../authMiddleware');

router.get('/', requireAuth, checkUser, (req, res) => {
    UserItems.findOne({ username: res.locals.user.username }, (err, userItems) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: 'Internal server error' });
        } else {
            res.send(userItems.items);
        }
    });
});

router.post('/', requireAuth, checkUser, (req, res) => {
    console.log(req.body.item)
    UserItems.findOneAndUpdate({ username: res.locals.user.username }, {
            $push: { items: { name: req.body.item } }
        }, { returnOriginal: false },
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ message: `Item added to the list` });
                console.log(`Item was added to the list`);
            }
        });
});

router.put('/:id', requireAuth, checkUser, (req, res) => {
    var updatedId = req.params.id;
    console.log(updatedId)
    console.log(req.body.items[0])
    UserItems.updateOne({ username: res.locals.user.username, "items._id": updatedId }, { $set: { "items.$.name": req.body.items[0] } },
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ message: `Item updated in the list` });
                console.log(`Item was updated in the list`);
            }
        });




});

router.delete('/:id', requireAuth, checkUser, (req, res) => {
    var delId = req.params.id;
    UserItems.updateOne({ username: res.locals.user.username }, { $pull: { items: { _id: delId } } }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: `Item with id ${delId} was deleted for user ${res.locals.user.username}` });
            console.log(`Item with id ${delId} was deleted for user ${res.locals.user.username}`);
        }
    });
});


module.exports = router;