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
            users :{
                AddUser:{
                    input :{
                        user_email:{
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