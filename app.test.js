const request =require("supertest")
import app from "./app.js";

jest.setTimeout(100000)


/*create user*/

//     describe('given a username, email and password',()=>{
//         test('should respond with 200 status', async() => { 
//         const response= await request(app).post('/api/users').send({
//             name:"asdfghj",
//             email:"asdfghj@gmail.com",
//             password:'asdfghj56'
//         })
//         console.log(response.body)
//         expect(typeof response.body).toBe('object')
//         expect(response.statusCode).toBe(201)
//         })
      
// })

/*get user*/

// describe('display user ',()=>{
//     test('should respond with 200 status', async() => { 
//     const response= await request(app).get('/api/users').send({})
//     console.log(response.body)
//     expect(typeof response.body).toBe('object')
//     expect(response.statusCode).toBe(200)
//     })
  
// })


/* login user*/

// describe("login user with email password",()=>{
//     test("should respond with 201 status",  async()=>{
//         const response= await  request(app).post('/api/users/login').send({
//         email:"naom@gmail.com",
//          password:'gh2'

//         })
//         console.log(response.body);
//         expect(typeof response.body).toBe('object')
//         expect(response.statusCode).toBe(201)
//     })
// })

// create realEstate

// describe("creating realRstate",()=>{

//     test("should respond with 201 statusCode",async()=>{

//         const response= await request(app).post("/api/realEstates").send({
//       location:{
//         province:"numura",
//         district:"konyobwe",
//         street:"kk1"
//       },




//         })
//     })
// })

