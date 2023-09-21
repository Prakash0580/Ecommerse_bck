const userModel = require('../models/user_model.js');
const bcrypt = require('bcrypt');



// const userController=async(req,res)=>{
//     try {
//         const userData=req.body ;
//         const newUser=userModel(userData);
//        await newUser.save();
//         res.json({success:true, data:newUser,messege:"user created!"})

//     } catch (error) {
//         return res.json({success: false,messege: error});

//     }
// }

const userController = {
    createAccount: async function (req, res) {
        try {
            //sbse pahle req me se body ko uthate hai
            //req.body me jo data hum aap/frontend se send krte h vo aata hai


            const userData = req.body;
            // is user data ko use krke nya user bnana hai.
            // user model me name, email ye sb manyually karne ki jrurt nahi h .
            // yha userdata ek obj. h ise pass krata hai

            const newUser = new userModel(userData);
            // save this

            await newUser.save();
            // ab jo data save hua hai use return karte hai
            return res.json({ success: true, data: newUser, messege: "User Created!" });


        } catch (error) {
            return res.json({ success: false, messege: error });

        }

    },

    signIn: async (req, res) => {
        try {

            // signin ke liye body me se email or password lete hai
            const { email, password } = req.body;
            //ab email se account find krte hai.
            const foundUser = await userModel.findOne({ email: email });
            if (!foundUser) {
                return res.json({ success: false, messege: "User not found" });
            }

            //password ko match krwana hai
            // password hashed h to password ko hash se match/compair krwana hoga 
            // import bcrypt
            // const passowrdMatched = bcrypt.compareSync(password, foundUser.password);
            const passowrdMatched = await userModel.findOne({ password: password });
            if (!passowrdMatched) {
                return res.json({
                    success: false, messege: "Incorrect Password"
                });
            }
            return res.json({ success: true, data: foundUser, messege: "Sign In successfully" })


        } catch (error) {
            return res.json({
                success: false, messege: error
            })

        }


    }
}



module.exports = userController