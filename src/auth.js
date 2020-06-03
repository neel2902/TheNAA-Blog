module.exports={
   admin:(req,res,next)=>{
     if(!req.session.author || req.session.author.role !== 'admin')
	return res.status(500).json({error:"Authentication Error", message:"User must be an admin to perform this task"});
     else
	next();
  },
   author:(req,res,next)=>{
     //console.log('session object',req.session.author);
     if(!req.session.author || (req.session.author.role !== 'admin' && req.session.author.role !== 'author'))
	return res.status(500).json({error:"Authentication Error", message:"User must be an admin or author to perform this task"});
     else
	next();
  }  
}

