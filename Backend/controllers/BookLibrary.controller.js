const BookLibrary = require('../model/LibraryBooking.model')

const addDetails = async (req,res)=>{
    try{
        const detail = new BookLibrary(req.body)
        const savedetails = await detail.save()
        res.json(savedetails)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getDetails = async(req,res)=>{
    try{
        const {email} = req.params;
        const details = await BookLibrary.find({email: email})
        if (!details){
            return res.status(404).json({ message: "No Details Found" });
        }
        res.json(details)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    addDetails,
    getDetails
}