const mongoose = require('mongoose')
const restaurantsSchema = new mongoose.Schema({
  areaname:{
    type:String
  },
  avgRating:{
    type:Number
  },
  costForTwo:{
     type:String
  },
  cuisines:{
    type:Array
  },
  name:{
    type:String
  }
})
const Restaurant=mongoose.model('restaurantList',restaurantsSchema)
const userSchema = new mongoose.Schema({
    contact : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    userName : {
        type : String
    },
})
const Users = mongoose.model('userDetail', userSchema)

module.exports = {Restaurant, Users}


