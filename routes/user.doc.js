const user=[
    {
        "id": "63de495c44d2ed84efec582b",
        "name": "Blad",
        "email": "Blad@gmail.com",
        "password": "$2a$10$DJwjY5B/q6VUOKvvCn770.XrgG5H97XLUbyBO4Q1zMfaDb6XVmyMm",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGU0OTVjNDRkMmVkODRlZmVjNTgyYiIsImlhdCI6MTY3NTUxMjE1NywiZXhwIjoxNjc4MTA0MTU3fQ.5fnvyzf7h0BWgKIHqf8cwEbis9qQ2jFXMTVXpRhatUk"
      }
]


const registerUser ={
    tags:["User"],
    summary:'register user',
    description:' register user',

    requestBody:{
        content:{
            'application/json':{
                schema:{
                    type:'object',
                    properties:{
                        name:{
                            type:'string',
                            description:'user name',
                            example:'Blad'
                        },
                        email:{
                            type:'string',
                            description:'user email',
                            example:'Blad@gmail.com'
                        },
                        password:{
                            type:'string',
                        description:'user password',
                        example:'*******'
                    },
                },
                },
            },
        },
    },

    responses:{
        200:{
            description:'ok',
            content:{
                'application/json':{
                    schema:{
                        type:'object',
                        example:{
                           user
                        }
                    }
                }
            }
        }
    }
}

const loginUser={
    tags:['User'],
    summary:'login user',
    description:'login user',
    requestBody:{
        content:{
         'application/json':{
            schema:{
                type:'object',
                properties:{
                    email:{
                        type:"string",  
                        description:"user email",
                        example:'Blad@gmail.com'
                    },
                    password:{
                        type:"string",  
                        description:"user password",
                        example:'******'
                    }

                }
            }
         }
        }
    },
    responses:{
        200:{
            description:'ok',
            content:{
                'application/json':{
                    schema:{
                        type:'object',
                        example:{
                            user
                        }
                    }
                }
            }
        }
    }
}
const UserRoute={
"/api/users":{
    post:registerUser
},
"/api/users/login":{
    post:loginUser
}
}

export default UserRoute