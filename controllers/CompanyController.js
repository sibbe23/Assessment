const Company = require('../models/Company')

const index = (req,res)=>{
   Company.find()
   .then(response =>{res.json({response})})
   .catch(err=>{res.json({message:'Error occured'})}) 
}

//show single company
const show = (req, res) => {
    let companyID = req.params.companyID; // Use req.params for URL parameters
    Company.findById(companyID)
        .then(response => {
            if (response) {
                res.json({ response });
            } else {
                res.status(404).json({ message: "Company not found" });
            }
        })
        .catch(err => res.status(500).json({ message: "Error fetching company", error: err }));
};


const create = (req, res) => {
    let company = new Company({
        CompanyID: req.body.CompanyID,
        CompanyName: req.body.CompanyName,
        Address1: req.body.Address1,
        Address2: req.body.Address2,
        Area: req.body.Area,
        District: req.body.District,
        State: req.body.State,
        Country: req.body.Country,
        GSTNo: req.body.GSTNo,
        MobileNo: req.body.MobileNo,
        MailId: req.body.MailId,
    });

    company.save()
        .then(response => {
            res.json({ message: "Company added successfully!", response });
        })
        .catch(err => {
            res.json({ message: "Error creating company", error: err });
        });
};

//update
const update = (req, res) => {
    let companyID = req.params.companyID; // Use req.params for URL parameters
    let updatedData = {
        CompanyID: req.body.CompanyID,
        CompanyName: req.body.CompanyName,
        Address1: req.body.Address1,
        Address2: req.body.Address2,
        Area: req.body.Area,
        District: req.body.District,
        State: req.body.State,
        Country: req.body.Country,
        GSTNo: req.body.GSTNo,
        MobileNo: req.body.MobileNo,
        MailId: req.body.MailId,
    };

    Company.findByIdAndUpdate(companyID, { $set: updatedData })
        .then(() => {
            res.json({ message: "Company updated successfully!" });
        })
        .catch(err => res.json({ message: "Error updating company", error: err }));
};


//delete

const deleteComp = (req, res) => {
    let companyID = req.params.companyID; // Use req.params for URL parameters
    Company.findByIdAndDelete(companyID)
        .then(() => {
            res.json({ message: "Company delete success!" });
        })
        .catch((err) => {
            res.json({ message: "Error occurred!", error: err });
        });
};

module.exports = {
    index,
    show,
    create,
    update,
    deleteComp
};
