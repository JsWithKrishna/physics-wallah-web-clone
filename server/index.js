const { app } = require("./server");
const port = 3001;


app.listen(port,()=>{
    console.log(`the connection are stable on the port of http://localhost:${port}`)
})