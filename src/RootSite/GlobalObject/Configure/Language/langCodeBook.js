const langCodeBook = {
    roosite:{
        menu:{
            users:{
                button :{
                    AddUser : {
                        kor : "사용자 추가",
                        eng : "Add user"
                    },
        
                    ManageUser : {
                        kor : "사용자 관리",
                        eng : "Manage user"
                    },
                }
            },
            auditTrail : {
                button:{
                    AuditTrail:{
                        kor : "Audit Trail",
                        eng : "Audit Trail"
                    }
                }
            }
        },
        form :{
            system:{
                login :{
                    input :{
                        user_account : {
                            placeholder :{
                                kor : "사용자 계정",
                                eng : "User Account"
                            },
                            yup :{
                                kor : "계정을 입력해주세요.",
                                eng : "Please enter your account."
                            }
                        },
                        user_pw : {
                            placeholder :{
                                kor : "비밀번호",
                                eng : "Password"
                            },
                            yup :{
                                kor : "비밀번호를 입력해주세요.",
                                eng : "Please enter your password."
                            }
                        }
                    },
                    button :{
                        signIn : {
                            kor : "로그인",
                            eng : "Sign in"
                        }
                    }
                },
            },
            users :{
                AddUser:{
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
                        user_email:{
                            placeholder :{
                                emailField:{
                                    kor : "이메일",
                                    eng : "E-mail"
                                },
                                purpose:{
                                    kor : "용도",
                                    eng : "Purpose"
                                },
                                affiliation:{
                                    kor : "소속",
                                    eng : "Affiliation"   
                                }
                            },
                            catLabel:{
                                personal:{
                                    kor : "개인",
                                    eng : "Personal"
                                },company:{
                                    kor : "회사",
                                    eng : "Company"
                                },work:{
                                    kor : "직장",
                                    eng : "Work"
                                },other:{
                                    kor : "기타",
                                    eng : "Other"
                                },
                            },
                            yup:{
                                emailField:{
                                    kor : "E-Mail 형식은 (텍스트)@(텍스트).(텍스트) 형태이어야 합니다.",
                                    eng : "The email format should be (text)@(text).(text)."
                                },
                            }                          
                        },
                        user_phone:{
                            placeholder :{
                                phoneField:{
                                    kor : "전화번호",
                                    eng : "Phone Number"
                                },
                                purpose:{
                                    kor : "용도",
                                    eng : "Purpose"
                                },
                                affiliation:{
                                    kor : "소속",
                                    eng : "Affiliation"   
                                }
                            },
                            catLabel:{
                                personal:{
                                    kor : "개인",
                                    eng : "Personal"
                                },company:{
                                    kor : "회사",
                                    eng : "Company"
                                },work:{
                                    kor : "직장",
                                    eng : "Work"
                                },other:{
                                    kor : "기타",
                                    eng : "Other"
                                },
                            },
                            yup:{
                                phoneField:{
                                    kor : "번호 형식은 (최소 2자리)-(최소 3자리)-(최소 4자리) 형태이어야 합니다.",
                                    eng : "The format should be (at least 2 digits)-(at least 3 digits)-(at least 4 digits)."
                                },
                            }                           
                        },
                        user_position:{
                            placeholder :{
                                positionField:{
                                    kor : "직책",
                                    eng : "Position"
                                },
                                department:{
                                    kor : "부서",
                                    eng : "Department"   
                                },
                                company:{
                                    kor : "회사",
                                    eng : "Company"   
                                }
                            }                          
                        }
                    },
                    subTitle:{
                        id_info:{
                            kor : "식별정보",
                            eng : "Identifying Information"         
                        },
                        user_email : {
                            kor : "이메일",
                            eng : "E-Mail"  
                        },
                        user_phone : {
                            kor : "전화번호",
                            eng : "Phone Number"  
                        },
                        user_position : {
                            kor : "직책",
                            eng : "Position"  
                        }
                    }
                }

            }
        },
    },

    cdms : {
        DocNoPattern : {
            button : {
                AddDocNoPattern : {
                    kor : "문서번호 패턴 추가",
                    eng : "Add document number pattern"
                },
                MngDocNoPattern : {
                    kor : "문서번호 패턴 관리",
                    eng : "Manage document number pattern"
                },
            }
        },

        TraceBinder : {
            button : {
                BinderMoveHistory : {
                    kor : "바인더 이동 이력",
                    eng : "Binder move history"
                },
                ConfigBinderLocation : {
                    kor : "바인더 위치 구성",
                    eng : "Config binder location"
                },
            }
        },

        Doc: {
            button : {
                AddDoc : {
                    kor : "문서 추가",
                    eng : "Add documents"
                },
                MngDoc : {
                    kor : "문서 관리",
                    eng : "Manage documents"
                },
            }
        },

        DocNo: {
            button : {
                AddDocNo : {
                    kor : "문서 번호 추가",
                    eng : "Add documents number"
                },
                MngDocNo : {
                    kor : "문서 관리",
                    eng : "Manage documents number"
                },
            }
        },

        Binder : {
            button : {
                AddBinder : {
                    kor : "바인더 추가",
                    eng : "Add binder"
                },
                MngBinder : {
                    kor : "바인더 관리",
                    eng : "Manage binder"
                },
            }
        }
    }
}


module.exports = langCodeBook;