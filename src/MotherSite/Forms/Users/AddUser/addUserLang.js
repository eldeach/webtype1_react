const langConfig = {
    alertMsg : {
        duplicated : {
            kor : "이 항목은 이미 추가되어 있습니다.",
            eng : "This item has already been added."
        }
    },
    formTitle : {
        kor : "사용자 추가",
        eng : "Add user"
    },
    ppiPaper : {
        inputField : {
            user_account : {
                placeholder : {
                    kor : "사용자 계정",
                    eng : "User Account"
                },
                valMsg : {
                    required : {
                        kor : "사용자 계정을 입력해주세요.",
                        eng : "Please enter user account."
                    }
                }
            },
            user_pw : {
                placeholder : {
                    kor : "비밀번호",
                    eng : "Password"
                },
                valMsg : {
                    required : {
                        kor : "비밀번호를 입력해주세요.",
                        eng : "Please enter your password."
                    }
                }
            },
            user_pw_confirm : {
                placeholder : {
                    kor : "비밀번호 확인",
                    eng : "Password Confirmation"
                },
                valMsg : {
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
            user_name : {
                placeholder :{
                    kor : "사용자명",
                    eng : "User Name"
                }       
            },
            user_nickname : {
                placeholder :{
                    kor : "사용자 별명",
                    eng : "User Nickanme"
                }       
            },
            user_birthday : {
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
}

export default langConfig;