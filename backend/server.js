const mysql=require('mysql')
const express=require('express')
const cors=require('cors')
const path=require('path')
const multer = require('multer')
const app=express()
app.use(cors())
app.use(express.static('public'))
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud'
})

db.connect((err)=>{
    if(err) console.log(err)
        return console.log("database is connected..")
})

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "_" +Date.now() + path.extname(file.originalname))
    }
})

const upload=multer({
    storage:storage
})

app.get('/',(req,res)=>{
    const sql="SELECT*FROM imagecrud1"
    db.query(sql,(err,result)=>{
        if(err) return res.json("Error")
            return res.json(result)
    })
})
app.post('/create',upload.single('image'),(req,res)=>{
    const values=[
        req.body.heading,
        req.body.content,
        req.body.benefits,
        req.body.describes,

        req.body.aerial,
        req.body.express,
        req.body.para,

        req.file.filename
    ]
  const sql='INSERT INTO imagecrud1(`heading`,`content`,`benefits`,`describes`,`aerial`,`express`,`para`,`img`)VALUES(?)'
  db.query(sql,[values],(err,result)=>{
    if(err) return res.json("Error....")
        return res.json("Succes....")
  })
})

app.put('/update/:id',upload.single('image'),(req,res)=>{
    const id=req.params.id
    const values=[
        req.body.heading,
        req.body.content,
        req.body.benefits,
        req.body.describes,

        req.body.aerial,
        req.body.express,
        req.body.para,

        req.file.filename
    ]
  const sql='UPDATE imagecrud1 SET `heading`=?,`content`=?,`benefits`=?,`describes`=?,`aerial`=?,`express`=?,`para`=?,`img`=? WHERE id=?'
  db.query(sql,[...values,id],(err,result)=>{
    if(err) return res.json("Error....")
        return res.json("Succes....")
  })
})

// app.delete('/delete/:id',upload.single('image'),(req,res)=>{
//   const id=req.params.id
//   const sql='DELETE FROM imagecrud1 WHERE id=?'
//   db.query(sql,[id],(err,result)=>{
//     if(err) return res.json("Error....")
//         return res.json("Succes....")
//   })
// })

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id
    const sql='DELETE FROM imagecrud1 WHERE id=?'
    db.query(sql,[id],(err,result)=>{
      if(err) return res.json("Error....")
          return res.json("Succes....")
    })
  })
app.listen(8081,()=>{
    console.log("running...")
})