
const estate=[
    {
        "location": {
          "province": "province",
          "district": "district",
          "street": "street"
        },
        "price": "price of estate",
        "image": [
          "https://res.cloudinary.com/dzxupsizh/image/upload/v1676291747/zzjk1iya8dhekpzn1fpi.jpg"
        ],
        "beds": 6,
        "bath": 3,
        "yearBuilt": 3,
        "lotSize": 3,
        "status": " 4 star",
        "description": "nice",
        "_id": "63ea2ea511010c34617e1ae7",
        "createdAt": "2023-02-13T12:35:49.454Z",
        "updatedAt": "2023-02-13T12:35:49.454Z",
        "__v": 0
      }
]
const getRealEstate={
    tags:["RealEstate"],
    summary:'get  RealState',
    description:'get  RealState',
    responses:{
        200:{
            description:'Ok',
            content:{
                "application/json":{
                    schema:{
                        type:'object',
                        example:{
                           estate
                        }
                    }
                }
            }
        }
    }
}

const setRealState={
        tags:["RealEstate"],
        summary:'set  RealState',
        description:'set  RealState',
        requestBody:{
            content:{
                "multipart/form-data":{
                    schema:{
                        type:'object',
                        properties:{
                                'location[province]':{
                                    type:'string',
                                    description:"Your blog text",
                                    example:"province"
                                   
                                },
                                'location[district]':{
                                    type:'string',
                                    description:"Your blog text",
                                    example:"district"
                                   
                                },
                                'location[street]':{
                                    type:'string',
                                    description:"Your blog text",
                                    example:"street"
                                   
                                },
                            
                         
                            price:{
                                type:'string',
                                description:"Your blog text",
                                example:"price of estate"
                            },
                            image:{
                                type:'file',
                                description:'Your real estate phot',
                                example:""
                            },
                        
                            beds:{
                                type:'number',
                                description:"beds number ",
                                example:" 6"
                            },
                            bath:{
                                type:'number',
                                description:"bath number ",
                                example:" 3"
                            },
                            yearBuilt:{
                                type:'number',
                                description:"year built in ",
                                example:" 3"
                            },
                            lotSize:{
                                type:'number',
                                description:"lotsize ",
                                example:" 3"
                            },
                            status:{
                                type:'string',
                                description:"your status ",
                                example:" 4 star"
                            },
                            description:{
                                type:'string',
                                description:"your description",
                                example:"nice"
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
                                estate
                            }
                        }
                    }
                }
            }
        }
    
      }


const getRealEstateByID={
    tags:["RealEstate"],
    summary:'get real state by Id',
      description:'get real state by Id',
      parameters:[
          { 
              name:'id',
              in:'path',
              description:'real state id ',
              type:'ObjectId',
              example:"63ea2ea511010c34617e1ae7"
              
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
                                estate
                            },
                        }
                    }
                }
            
        }
    }
}
const RealEstate={
  '/api/realEstates':{
      get:getRealEstate,
      post:setRealState,
  },
  '/api/realEstates/{id}':{
    get:getRealEstateByID,
  }
}
export default RealEstate