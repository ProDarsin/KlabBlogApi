import request  from "supertest";
import app from "./app";

describe('POST /users' ,()=>{

    describe('given a username, email and password',()=>{
        test('should respond with 200 status', async() => { 
        const response= await request(app).post('/api/users').send({
            name:"kim",
            email:"kim@gmail.com",
            password:'hhhh'
        })
        expect(response.statusCode).toBe(200)
        })
})
})
