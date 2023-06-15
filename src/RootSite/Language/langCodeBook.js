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
            login :{
                input :{
                    user_account : {
                        placeholder :{
                            kor : "사용자 계정",
                            eng : "User Account"
                        }
                    },
                    user_pw : {
                        placeholder :{
                            kor : "비밀번호",
                            eng : "Password"
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
            users :{
                AddUser:{
                    
                }

            }
        }
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