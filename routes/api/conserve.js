const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
    check,
    validationResult
} = require('express-validator');
const Conserve = require('../../analyser/conserve');


const Consumer = require('../../models/Consumer');
const User = require('../../models/User');

// @route  GET api/conserve
// @desc   Get water consumption report
// @access Private
router.get('/', auth, async (req, res) => {

    try {
        const consumer = await Consumer.findOne({
            user: req.user.id
        }).then(item=>{
          console.log(item);
          let con=new Conserve(item.person);
          let consumptionByPerson=con.getWaterConsumeByPerson();
          let tapConsumption=con.getItemWaterConsumption(6,item.tap);// average tap flows water 6 lit/min
          let showerConsumption=con.getItemWaterConsumption(10,item.shower);// average shower flows water 10 lit/min
          let flushConsumption=con.getItemWaterConsumption(6,item.flush);// average flush flows water 6 lit/flush
          let wmConsumption=con.getItemWaterConsumption(50,item.washingMachine);// average washingMachine flows water 50 lit/cycle
          let dwConsumption=con.getItemWaterConsumption(20,item.dishWasher);// average dishWasher flows water 20 lit/cycle
          let filterConsumption=con.getItemWaterConsumption(3,item.filter);// average filter flows water 3 lit/cycle (for 10 lit)
          let totalConsumption=con.getTotalConsumption(tapConsumption,showerConsumption,flushConsumption,wmConsumption,dwConsumption,filterConsumption);
          let totalGrayWater=con.getGrayWater();
          let totalBlackWater=con.getBlackWater();
          const report=[{
            "person":consumptionByPerson,
            "tap":tapConsumption,
            "shower":showerConsumption,
            "flush":flushConsumption,
            "washingMachine":wmConsumption,
            "dishWasher":dwConsumption,
            "filter":filterConsumption,
            "total":totalConsumption,
            "grayWater":totalGrayWater,
            "blackWater":totalBlackWater
          }]
          res.status(200).json(report);
        });

        if (!consumer) {
            return res.status(400).json({
                msg: 'There is no consuming items'
            });
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


module.exports = router;
