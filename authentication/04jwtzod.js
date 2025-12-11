const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emilSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
    const userNameResponse = emilSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!userNameResponse.success || !passwordResponse.success){
        return null; 
    }

 const signature = jwt.sign({
    username
}, password);

 return signature;
}

function verifyJwt(token){
    let ans = true;
     try {
        jwt.verify(token, jwtPassword);
        
     } catch(e) {
         ans = false;
     }
        return ans;
     }

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    } else {
        return false;
    }
}

const token = signJwt("sushil@gmail.com", "123123123");
console.log(token);
console.log("verified :", verifyJwt(token));
console.log("Decoded :", decodeJwt(token));
