const request =require("supertest")
import app from "./app.js";

jest.setTimeout(100000)
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
