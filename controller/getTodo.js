const Todo = require("../models/Todo");

const getTodo = async(req,res) => {
    try {
        // this method fetch all the todo data from models
        const todos = await Todo.find({});

        // response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched"
        })
          
    }
    catch(err) {
      console.error(err);
      res.status(500)
      .json({
        success:false,
        error:err.message,
        message:'Server Error'
      });
    }
}

exports.getTodoById = async(req,res)=>{
  try{

      const id = req.params.id;
      
      const todo = await Todo.findById({_id:id});

      if(!todo){
        return res.status(404).json({
          success:false,
          message:"No data was found"
        })
      }
      //data for the given id is found
      res.status(200).json(
        {
          success:true,
          data:todo,
          message:`Todo ${id} data successfully fetched`,
        }
      )
  }
  catch(err) {
    console.error(err);
    res.status(500)
    .json({
      success:false,
      error:err.message,
      message:'Server Error'
    });
  }
}



module.exports = {getTodo};