const phoneLang={
    input :{
        phone_number : {
            placeholder :{
                kor : "전화번호",
                eng : "Phone Number"
            },
            yup : {
                wrong_pattern:{
                    kor:"잘못된 값",
                    eng:"Wrong value"
                },
                blank:{
                    kor : "사용자 전화번호를 입력해주세요.",
                    eng : "Please enter user phone number."
                }
            }
        },
        phone_usage : {
            placeholder :{
                kor : "전화번호 용도",
                eng : "Phone Usage"
            },
            optionLabel:{
                personal:{
                    kor : "개인",
                    eng : "Personal"
                },
                work:{
                    kor : "업무",
                    eng : "Work"
                },
                other:{
                    kor : "기타",
                    eng : "Other"
                }
            }
        },
        phone_affiliation : {
            placeholder :{
                kor : "전화번호 소속 (선택사항)",
                eng : "Phone Affiliation (Optional)"
            },
        },
    },
    button:{
        subForm:{
            signIn:{
                kor:"추가",
                eng:"ADD"
            }
        }
    }
}

module.exports = phoneLang;