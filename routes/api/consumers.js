const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
    check,
    validationResult
} = require('express-validator');

const Consumer = require('../../models/Consumer');
const User = require('../../models/User');

// @route  GET api/consumers/consumeData
// @desc   Get users consuming item data
// @access Private
router.get('/consumeData', auth, async (req, res) => {

    try {
        const consumer = await Consumer.findOne({
            user: req.user.id
        }).populate('user','person', 'tap', 'shower','flush','washingMachine','dishWasher','filter');

        if (!consumer) {
            return res.status(400).json({
                msg: 'There is no consuming items'
            });
        }
        res.status(200).json(consumer);

    } catch (err) {
        console.erroe(err.message);
        res.status(500).send('Server Error');
    }

});

// @route  Post api/consumers
// @desc   Create or update consuming item
// @access Private

router.post('/', [auth, [
    check('person', 'Status id required').not().isEmpty(),
    check('tap', 'Skills are required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
      person,
      tap,
      shower,
      flush,
      washingMachine,
      dishWasher,
      filter
    } = req.body;

    //Build consumers Object
    const consumerFields = {};
    consumerFields.user = req.user.id;
    if (person) consumerFields.person = person;
    if (tap) consumerFields.tap = tap;
    if (shower) consumerFields.shower = shower;
    if (flush) consumerFields.flush = flush;
    if (washingMachine) consumerFields.washingMachine = washingMachine;
    if (dishWasher) consumerFields.dishWasher = dishWasher;
    if (filter) consumerFields.filter = filter;

     try {
         let consumer = await Consumer.findOne({
             user: req.user.id
          });

        if (consumer) {
            //Updating Consuming item
            consumer= await Consumer.findOneAndUpdate({
                user: req.user.id
            }, {
                $set: consumerFields
            }, {
                new: true
            });
            return res.status(200).json(consumer);
        }

        //Creting a Consuming item
        consumer = new Consumer(consumerFields);
        await consumer.save();
        res.status(200).json(consumer);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
