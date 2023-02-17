
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

const updateBlogById={
    tags:["User"],
    summary:'update  Blogs by Id',
      description:'update  Blogs by Id',
      parameters:[
          { 
              name:'id',
              in:'path',
              description:'blog id ',
              type:'ObjectId',
              example:"63de495c44d2ed84efec582b"
              
          }
      ],
      requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:'object',
                    properties:{
                        name:{
                            type:"string",  
                            description:"user name",
                            example:'cloude'
                        },
                        email:{
                            type:"string",  
                            description:"user email",
                            example:'Blad@gmail.com'
                        },
                    }
                }
            }
        }
    },
      responses:{
          200:{
              description:'Ok',
              content:{
                  "application/json":{
                      schema:{
                          type:'object',
                          example:{
                              user
                          }
                      }
                  }
              }
          },
          400:{
              description:'user is not found' 
          }
      }
  }

  const DeleteUserById={
    tags:["User"],
    summary:'update  Blogs by Id',
      description:'update  Blogs by Id',
      parameters:[
          { 
              name:'id',
              in:'path',
              description:'blog id ',
              type:'ObjectId',
              example:"63de495c44d2ed84efec582b"
              
          }
      ],
      responses:{
          200:{
              description:'Ok',
              content:{
                  "application/json":{
                      schema:{
                          type:'object',
                          example:{
                              user
                          }
                      }
                  }
              }
          },
          400:{
              description:'user is not found' 
          }
      }
  }
  const PasswordReset={
     tags:['User'],
    summary:'reset password user',
    description:'reset password user',
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
                        description:" new user password",
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
},

"/api/users/reset":{
    post:PasswordReset
},
"/api/users/{id}":{
    patch:updateBlogById,
    delete:DeleteUserById
}
}

export default UserRoute