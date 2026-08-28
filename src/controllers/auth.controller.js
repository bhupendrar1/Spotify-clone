const userModel = require('../models/user.model');



async function RegisterController(req, res) {

    const [username, email, password, role] = req.body;
 
    const isUserAlreadyExist = await userModel.findOne({
        username: username,
         email: email
         });

    if(!isUserExist) {
        console.log("User already exists");
        return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
  try {
      const user = await userModel.create({
         username,
          email, password,
           role 
        });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ message: "Internal server error" });
  }

// Generate a JWT token for the registered user
  const token = jwt.sign({ 
    userId: user._id 
},
 process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

res.cookie('token', token)



        res.status(201).json({ 
            message: "User registered successfully",
             token,
             user });

}


module.exports = { RegisterController };
