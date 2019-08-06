const router = require('express').Router()
const conn = require('../connection/index')

//create new category
router.post('/category' , (req,res) => {
    const sql = `insert into categories set ?`
    const data = req.body

    conn.query(sql,data,(err,result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//show all category
router.get('/category', (req,res) => {
    const sql = `select * from categories`

    conn.query(sql,(err,result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

//delete category
router.delete('/category',(req,res) => {
    const sql = `delete from categories where id = ?`
    const show = `select * from categories`
    const data = req.query.id

    conn.query(sql,data,(err,result) => {
        if(err) return res.send(err)

        conn.query(show,(err,result2) => {
            if(err) return res.send(err)

            res.send(result2)
        })
    })
})

//update category

router.patch('/category', (req,res) => {
    const sql = `update categories set ? where id = ?`
    const data = [req.body, req.query.id]

    conn.query(sql,data,(err,result) => {
        if(err) return res.send(err)

        res.send('berhasil update')
    })
})

module.exports = router