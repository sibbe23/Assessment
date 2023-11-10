const mongoose = require('mongoose')
const Schema = mongoose.Schema
const companySchema = new Schema({
  CompanyID: String,
  CompanyName:String,
  Address1: String,
  Address2:String,
  Area: String,
  District: String,
  State: String,
  Country: String,
  GSTNo: String,
  MobileNo: Number,
  MailId:String,
},{timestamps:true})


const Company = mongoose.model('Company',companySchema)

module.exports = Company