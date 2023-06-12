
// ======================================================================================== [Import Libaray]
import axios from 'axios';

async function onSubmitFunc(props){
//     const generateJwtToken = (payload, secret) => {
//         const token = jwt.sign(payload, secret);
//         return token;
//       };
//       // 사용 예시
// const payload = { user_account: props.user_account, user_pw: props.user_pw};
// const secret = 'secret';
// const jwtToken = generateJwtToken(payload, secret);
// console.log(jwtToken);

//     await axios.post('/local-login',props, {
//         headers: {
//           Authorization: `Bearer ${jwtToken}`,
//         },
//       })


await axios.post('/local-login' ,{
    username:"a",
    password:'bb'

})
}

export default onSubmitFunc








