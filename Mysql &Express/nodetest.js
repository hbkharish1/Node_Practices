const express = require("express");
const app=express();
// const admin=express()
courses =[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
];

app.get('/',(req,res)=>{
    res.send('hello world!!!');
});
// admin.get('/',(req,res)=>{
//     console.log(admin.mountpath)
// res.send("Admin Homepage")
// })
// app.use('/admin',admin)
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});
app.get('/api',(req,res)=>{
    res.send([4,5,6]);
});
// app.put('/update',(req,res)=>{
//     res.send("Update Page");
// });
app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id ===  parseInt(req.params.id));
    if(!course)
    res.send(course);
});
app.get('/api/:id',(req,res)=>{
//    res.send(req.params.id);
    res.send(courses[req.params.id]);
});
app.get('/api/:year/:month',(req,res)=>{
    res.send(req.params);
});
//const port=process.env.port;
//app.listen(port,()=>console.log(`Listening on port ${port}`));
app.listen(3000)
