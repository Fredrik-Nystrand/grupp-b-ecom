import jwt_decode from "jwt-decode";

const decodeToken = (token) => {      
  const decode = jwt_decode(token);
  if (decode.exp * 1000 < new Date().getTime()) {
      console.log('Expired');
  }
};