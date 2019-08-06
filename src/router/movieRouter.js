const router = require('express').Router()
const conn = require('../connection/index')

//input movie baru
router.post('/movies' ,(req,res) => {
    const sql = `insert into movies set ?`
    const data = req.body

    conn.query(sql, data, (err,result) => {
        if(err) return res.send(err)
        res.send(result)
    })
})

//show all movies
router.get('/movies' ,(req,res) => {
    const sql = `select * from movies`

    conn.query(sql,(err,result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//delete movies
router.delete('/movies' , (req,res) => {
    const sql = `delete from movies where id = ?`
    const data = req.query.id

    conn.query(sql,data,(err,result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

router.patch('/movies' ,(req,res) => {
    const sql = `update movies set ? where id =?`
    const show = `select * from movies where id = ${req.query.id}`
    const data =[req.body, req.query.id]

    conn.query(sql,data,(err,result) => {
        if(err) return res.send(err)

        conn.query(show,(err,result2) => {
            if(err) return res.send(err)

            res.send(result2[0])
        })
        
    })
})






module.exports = router