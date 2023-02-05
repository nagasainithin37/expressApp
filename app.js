const express=require('express')

const app=express()

app.use(express.json())
var data=[
{
    id:'1',
    name:'hari'
},
{
    id:'2',
    name:'rishith'
}

]

app.get('/getusers',(request,response)=>{
    response.send({message:'user data is ',payload:data})
})

app.get('/getuser/:id',(request,response)=>{
    id=(+request.params.id)
    let idx=data.findIndex(obj=>obj.id==id)
    if (idx==-1){
        response.send({message:'data is not present with '+id})
    }
    else{
        response.send({message:'data with id '+id,payload:data[idx]})
    }
})

app.post('/createuser',(req,res)=>{
let id=req.body.id
let idx=data.findIndex(obj=>obj.id==id)
if (idx==-1){
        data.push(req.body)
        res.send({message:'data is added',payload:data})
    }
    else{
        res.send({message:'data already present with id :',id})
    }

})

app.put('/updateuser',(req,res)=>{
    let id=req.body.id
    let idx=data.findIndex(obj=>obj.id==id)
    console.log(req.body)
if (idx==-1){
        res.send({message:''+id+" not present to update"})
    }
    else{
        data.splice(idx,1,req.body)
        res.send({message:'data updated',payload:data})
    }
})

app.delete('/deleteuser/:id',(req,res)=>{
    let id=(+req.params.id)
    let idx=data.findIndex(obj=>obj.id==id)
if (idx==-1){
        res.send({message:''+id+" not present to dalete"})
    }
    else{
        data.splice(idx,1)
        res.send({message:'data updated',payload:data})
    }
})


app.listen(3000,()=>console.log("Server is Listining"))