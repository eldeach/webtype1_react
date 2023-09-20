const ppiLang={
    input :{
        user_account : {
            placeholder :{
                kor : "사용자 계정",
                eng : "User Account"
            },
            yup : {
                kor : "사용자 계정을 입력해주세요.",
                eng : "Please enter user account."
            }
        },
        user_pw : {
            placeholder :{
                kor : "비밀번호",
                eng : "Password"
            },
            yup : {
                kor : "비밀번호를 입력해주세요.",
                eng : "Please enter your password."
            }
        },
        user_pw_confirm : {
            placeholder :{
                kor : "비밀번호 확인",
                eng : "Password Confirmation"
            },
            yup : {
                match:{
                    kor : "비밀번호와 일치해야합니다.",
                    eng : "Password Confirmation must match the password."
                },
                required:{
                    kor : "비밀번호 확인을 입력해주세요.",
                    eng : "Please enter your password confirmation."
                }

            }
        },
        user_name:{
            placeholder :{
                kor : "사용자명",
                eng : "User Name"
            }                 
        },
        user_nickname:{
            placeholder :{
                kor : "사용자 별명",
                eng : "User Nickanme"
            }                 
        },
        user_birthday:{
            placeholder :{
                kor : "생년월일",
                eng : "Birthday"
            }                 
        },
        user_gender:{
            placeholder :{
                kor : "성별",
                eng : "Gender"
            }                 
        },
    },
}

module.exports = ppiLang;