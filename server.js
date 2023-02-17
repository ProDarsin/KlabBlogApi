
import app from './app.js'
//running server
const port=process.env.PORT||4000
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})
