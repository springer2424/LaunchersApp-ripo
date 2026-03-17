import jwt from "jsonwebtoken"


const JWT_SECRET = '1234';



export const midelothriztion = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'not Authorization' });
  }
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export const othentiction = (arr) =>{
   return (req,res,next) => {
  const {user_type} = req.user;
  if (!user_type) {
    return res.status(401).json({ message: 'not Authorizd' });
  }
  
  
  try {
      
      
      if(arr.includes(user_type)){
       next()
    
      }
      return res.status(401).json({ message: 'not Authorizd' });
    
  } catch (error) {
    return res.status(403).json({ message: 'not othorizd' });
  }
}}