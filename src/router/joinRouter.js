const router = require('express').Router()
const conn = require('../connection/index')

//create new connection

router.post('/koneksi' , (req,res) => {
    const sql = `insert into movecat (movie_id, category_id) values (${req.query.movie_id}, ${req.query.category_id})`
    const sql2 = `select * from movecat where id = ?`
    conn.query(sql,(err,result) => {
        if(err) return res.send(err)

        conn.query(sql2,result.insertId,(err,result2)=> {
            if(err) return res.send(err)

            res.send(result2[0])
        })
    })
})

//delete connection by id si movecat

router.delete('/koneksi', (req,res) => {
    const sql = `delete from movecat where id = ?`
    const data = req.query.id

    conn.query(sql,data,(err,result) => {
        if(err) return res.send(err)

        res.send('berhasil di delete')
    })
})

//show all connection

router.get('/koneksi' , (req,res) => {
    const sql = `select movies.nama as nama_film , categories.nama as kategori from movecat inner join movies on movies.id = movecat.movie_id inner join categories on categories.id = movecat.category_id `

    conn.query(sql,(err,result) => {
        if(err) return res.send(err)

        res.send(result)
    })
})

module.exports = router