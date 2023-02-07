  const Blog=[
    {
        "_id": "63d926a5f4bd9dc5a83758d1",
        "title": "image blog",
        "description": "this is  blog image ",
        "image": "https://res.cloudinary.com/dzxupsizh/image/upload/v1675175588/f8nuo8rkkndi5swkzvab.jpg",
        "createdAt": "2023-01-31T14:33:09.602Z",
        "updatedAt": "2023-01-31T14:33:09.602Z",
        "__v": 0
      }
  ]
  
  const ListBlog={
    tags:["Blog"],
    summary:'List of all Blogs',
        description:'List of all Blogs',
        security:[
            {
                authorization:[]
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
                                Blog
                            }
                        }
                    }
                }
            }
        }
  }
  
  const CreateBlog={
    tags:["Blog"],
    summary:'create  a Blog',
    description:'create  a Blog',
    security:[
        {
            authorization:[]
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:'object',
                    properties:{
                        title:{
                            type:'string',
                            description:'title of the blog',
                            example:'News Blog'
                        },
                        description:{
                            type:'string',
                            description:"Your blog text",
                            example:"this is  a  blog description based on model "
                        },
                        image:{
                            type:'file',
                            description:'your phote link',
                            example:"https://res.cloudinary.com/dzxupsizh/image/upload/v1675175588/f8nuo8rkkndi5swkzvab.jpg"
                        }
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
                            Blog
                        }
                    }
                }
            }
        }
    }

  }
  const  GetBlogById={
    tags:["Blog"],
      summary:'get  Blogs by Id',
        description:'get  Blogs by Id',
        security:[
            {
                token:[]
            }
        ],
        parameters:[
            { 
                name:'id',
                in:'path',
                description:'blog id ',
                type:'ObjectId',
                example:"63d926a5f4bd9dc5a83758d1"
                
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
                                Blog
                            }
                        }
                    }
                }
            },
            400:{
                description:'blog is not found' 
            }
        }

  }

  const DeleteBlogById={
    tags:["Blog"],
    summary:'delete  Blogs by Id',
    description:'delete  Blogs by Id',
    security:[
        {
            authorization:[]
        }
    ],
    parameters:[
        { 
            name:'id',
            in:'path',
            description:'blog id ',
            type:'ObjectId',
            example:"63d926a5f4bd9dc5a83758d1"
            
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
                            Blog
                        }
                    }
                }
            }
        },
        400:{
            description:'blog is not found' 
        }
    }

  }
  const updateBlogById={
    tags:["Blog"],
    summary:'update  Blogs by Id',
      description:'update  Blogs by Id',
      security:[
        {
            authorization:[]
        }
    ],
      parameters:[
          { 
              name:'id',
              in:'path',
              description:'blog id ',
              type:'ObjectId',
              example:"63d926a5f4bd9dc5a83758d1"
              
          }
      ],
      requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:'object',
                    properties:{
                        title:{
                            type:'string',
                            description:'title of the blog',
                            example:'News Blog'
                        },
                        description:{
                            type:'string',
                            description:"Your blog text",
                            example:"this is  a  blog description based on model "
                        },
                        image:{
                            type:'file',
                            description:'your phote link',
                            example:"https://res.cloudinary.com/dzxupsizh/image/upload/v1675175588/f8nuo8rkkndi5swkzvab.jpg"
                        }
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
                              Blog
                          }
                      }
                  }
              }
          },
          400:{
              description:'blog is not found' 
          }
      }
  }
  const likeBlogbyIid={
    tags:['Blog'],
     summary:'like a blog ',
     description:'like a blog',
     security:[
        {
            authorization:[]
        }
    ],
     parameters:[

        {
            name:'id',
            in:'path',
            description:'like blog according by id',
            type:'ObjectId',
            example:"63d926a5f4bd9dc5a83758d1",
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
                        Blog
                    }
                }
            }
        }
    },
    400:{
        description:'blog is not found' 
    }
}

  }

  const unlikeBlogbyIid={
    tags:['Blog'],
    summary:'unlike a blog ',
    description:'unlike a blog',
    security:[
       {
           authorization:[]
       }
   ],
    parameters:[

       {
           name:'id',
           in:'path',
           description:'unlike blog according by id',
           type:'ObjectId',
           example:"63d926a5f4bd9dc5a83758d1",
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
                       Blog
                   }
               }
           }
       }
   },
   400:{
       description:'blog is not found' 
   }
}
  }

  const createComment={
    tags:['Blog'],
    summary:'comment a blog ',
    description:'comment a blog',
    security:[
       {
           authorization:[]
       }
   ],
    parameters:[

       {
           name:'id',
           in:'path',
           description:'comment blog according to id',
           type:'ObjectId',
           example:"63d926a5f4bd9dc5a83758d1",
       }
    ],

  requestBody:{
   content:{
       "application/json":{
           schema:{
               type:'object',
               properties:{
                   comment:{
                       type:'string',
                       description:'comment a blog',
                       example:"your blog is cool"
                      
                   }
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
                       Blog
                   }
               }
           }
       }
   },
   400:{
       description:'blog is not found' 
   }
}
  }
  const BlogRouteDoc={
    "/api/blogs":{
    get:ListBlog,
    post:CreateBlog,

      },
    //   "/api/blogs/{id}":{
    //     get:GetBlogById
    //   },
      
      "/api/blogs/{id}":{
        patch:updateBlogById,
        delete:DeleteBlogById
      },
      "/api/blogs/likes/{id}":{
        post:likeBlogbyIid
      },
      "/api/blogs/unlikes/{id}":{
        post:unlikeBlogbyIid
      },
      "/api/blogs/comment/{id}":{
        post:createComment
      },
}

export default BlogRouteDoc