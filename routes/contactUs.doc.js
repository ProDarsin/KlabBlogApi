
const contact=[

    {
        "userEmail": "dimitrikwihangana@gmail.com",
        "message": "yes",
        "name": "dimitri",
        "phone": " 07875988",
        "_id": "63ea42bd0f398e132f4b8c1f",
        "createdAt": "2023-02-13T14:01:33.961Z",
        "updatedAt": "2023-02-13T14:01:33.961Z",
        "__v": 0
      }
]

const setContactUs={
    tags:["ContactUs"],
    summary:'set  ContactUs',
    description:'set  ContactUs',
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:'object',
                    properties:{

                        name:{
                            type:'string',
                            description:"user name ",
                            example:"user name"
                        },
                        userEmail:{
                            type:'string',
                            description:'user email',
                            example:""
                        },
                    
                        phone:{
                            type:'string',
                            description:"phone number ",
                            example:" 07875988"
                        },
                        message:{
                            type:'string',
                            description:"message ",
                            example:"...."
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
                            contact
                        }
                    }
                }
            }
        }
    }

  }



  const  getContactUs={
    tags:["ContactUs"],
    summary:'List of all cantact',
        description:'List of all Blogs',
        responses:{
            200:{
                description:'Ok',
                content:{
                    "application/json":{
                        schema:{
                            type:'object',
                            example:{
                                contact
                            }
                        }
                    }
                }
            }
        }
  }
  
const getContactUsByID={
    tags:["ContactUs"],
    summary:'get ContactUS by Id',
      description:'get ContactUS  by Id',
      parameters:[
          { 
              name:'id',
              in:'path',
              description:'ContactUS  id ',
              type:'ObjectId',
              example:"63ea42bd0f398e132f4b8c1f"
              
          }
      ],
      response:{
        200:{
                description:'ok',
                content:{
                    'application/json':{
                        schema:{
                            type:'object',
                            example:{
                                contact
                        }
                    }
                }
            
        }
    }
}
}
const contactUs={
    '/api/contactUs':{
        get:getContactUs,
        post:setContactUs,
    },
    '/api/contactUs/{id}'  :{
        get:getContactUsByID
    }
}


export default contactUs