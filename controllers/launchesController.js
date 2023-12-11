const Launch = require('../models/launchModel.js');
const launchApiProvider = require('../providers/launchesProvider.js');

exports.createAPost = async (req,res) => {
    try {
        let newLaunch = new Launch(req.body);

        let launchPromise = launchApiProvider.getLaunches();
        let response = await launchPromise;

        if(!newLaunch.content){
            newLaunch.content = response;
        }
        let launch = await newLaunch.save();
        res.status(201).json(post);

    } catch (error) {
        console.error(error);
        res.status(401).json({message: 'not valid request '});
    }
}