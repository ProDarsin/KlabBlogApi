
import BlogRouteDoc from "../routes/blog.doc.js"
import UserRoute from "../routes/user.doc.js"
import RealEstate from "../routes/realEstate.doc.js"
import contactUs from '../routes/contactUs.doc.js'
const swaggerDocumentation={
    openapi:"3.0.0",
    info:{
        title:"Blog",
        version:"0.0.1",
        description:'Blog api build in node/express'
    },
    servers:[

        {
            url:'http://localhost:5000',
            description:'local dev'
        },
        {
            url:'https://blogapi-0jru.onrender.com/',
            description:'production dev'
        }
    ],
   
    tags:[
    {
        name:'Blog',
        description:'Blog routes'
    },
    {
        name:'User',
        description:'User routes'
    },
    {
        name:'RealEstate',
        description:'RealEstate routes'
    },
    {
        name:'ContactUs',
        description:'ContactUs routes'
    },
    ],
    components:{
        securitySchemes:{
            authorization:{
                type:'apiKey',
                scheme:'Bearer',
                bearerFormat:'JWT',
                name:'authorization',
                in:"header",
            },
        },
    },
    paths:{ 
        ...BlogRouteDoc,
        ...UserRoute,
        ...RealEstate,
        ...contactUs
    },
    apis:['../routes/**/*.js'],

}
export default swaggerDocumentation