var express = require('express');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'aA111111',
    database: 'mysql',
    port: 3306
});

conn.connect();
var app = express();
var cors = require('cors');
app.use(cors());

app.get('/linkin/database', (req, res) => {
    var adat = req.query.database;
    var sql = 'use ' + adat + ';';
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('link no successfull');
            res.send('link no successfull');
            return;
        }
        res.send('link successfull');
        console.log('link successfull');
    });
})
app.get('/show/databases', (req, res) => {
    var sql = 'show databases;';
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/show/tables', (req, res) => {
    var sql = 'show tables;';
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/select/usel', (req, res) => {
    var table = req.query.table;
    var sql = 'SELECT * FROM ' + table + '';
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/show/stu', (req, res) => {
    var va1 = req.query.va1;
    var sql = 'DESCRIBE ' + va1 + '';
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/select_contains', (req, res) => {
    var va1 = req.query.tablist;
    var va2 = req.query.stulist;
    var va3 = req.query.text;
    var sql = "SELECT * FROM " + va1 + " WHERE " + va2 + " LIKE '%" + va3 + "%'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message, sql);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/select_sam', (req, res) => {
    var va1 = req.query.tablist;
    var va2 = req.query.stulist;
    var va3 = req.query.text;
    var sql = "SELECT * FROM "+va1+" WHERE "+va2+" < '"+va3+"'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message, sql);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/select_equal', (req, res) => {
    var va1 = req.query.tablist;
    var va2 = req.query.stulist;
    var va3 = req.query.text;
    var sql = "SELECT * FROM "+va1+" WHERE "+va2+" = '"+va3+"'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message, sql);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/select_big', (req, res) => {
    var va1 = req.query.tablist;
    var va2 = req.query.stulist;
    var va3 = req.query.text;
    var sql = "SELECT * FROM "+va1+" WHERE "+va2+" > '"+va3+"'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message, sql);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/select_is_null', (req, res) => {
    var va1 = req.query.tablist;
    var va2 = req.query.stulist;
    var sql = "SELECT * FROM "+va1+" WHERE "+va2+" IS NULL";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message, sql);
            return;
        }
        res.send(result);
        console.log(result);
    });
})
app.get('/del/all', (req, res) => {
    var va = req.query.tables;
    var sql = ' DELETE FROM ' + va + '';
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return(err.message);
        }
        res.send('DELETE successfull');
        console.log(result);
    });
})

app.get('/del_contains', (req, res) => {
    var v1 = req.query.tblist;
    var v2 = req.query.stulist;
    var v3 = req.query.text;
    var sql = "DELETE FROM " + v1 + " WHERE " + v2 + " LIKE '%" + v3 + "%'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        res.send('DELETE successfull');
        console.log(result);
    });
})

app.get('/del_sam', (req, res) => {
    var v1 = req.query.tblist;
    var v2 = req.query.stulist;
    var v3 = req.query.text;
    var sql = "DELETE FROM " + v1 + " WHERE " + v2 + " < '" + v3 + "'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        res.send('DELETE successfull');
        console.log(result);
    });
})

app.get('/del_equal', (req, res) => {
    var v1 = req.query.tblist;
    var v2 = req.query.stulist;
    var v3 = req.query.text;
    var sql = "DELETE FROM " + v1 + " WHERE " + v2 + " = '" + v3 + "'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        res.send('DELETE successfull');
        console.log(result);
    });
})

app.get('/del_big', (req, res) => {
    var v1 = req.query.tblist;
    var v2 = req.query.stulist;
    var v3 = req.query.text;
    var sql = "DELETE FROM " + v1 + " WHERE " + v2 + " > '" + v3 + "'";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        res.send('DELETE successfull');
        console.log(result);
    });
})
app.get('/del_is_null', (req, res) => {
    var v1 = req.query.tblist;
    var v2 = req.query.stulist;
    var sql = "DELETE FROM " + v1 + " WHERE " + v2 + " IS NULL";
    conn.query(sql, function (err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        res.send('DELETE successfull');
        console.log(result);
    });
})
app.get('/add',(req,res) =>{
    var v1 = req.query.from;
    var v2 = req.query.mysqlid;
    var v3 = req.query.mysql;

    var sql ="INSERT INTO "+v1+"("+v2+") VALUES ("+v3+")";
    conn.query(sql, function (err, result) {
    if (err) {
        console.log('[ERROR] - ', err.message);
        res.send('[ERROR]'+ err.message);
        return;
    }
    res.send('ok')
});
})
app.get('/update_contains',(req,res) =>{
    var v1 = req.query.from;
    var v2 = req.query.mysqlid;
    var v3 = req.query.stulist;
    var v4 = req.query.text;

    var sql ="UPDATE "+v1+ " SET " + v2 +" WHERE " + v3 + " LIKE '%" + v4 + "%'" ;

    conn.query(sql, function (err, result) {
    if (err) {
        console.log('[ERROR] - ', err.message);
        res.send('[ERROR]'+ err.message);
        return;
    }
    res.send('ok')
});
})
app.get('/update_sam',(req,res) =>{
    var v1 = req.query.from;
    var v2 = req.query.mysqlid;
    var v3 = req.query.stulist;
    var v4 = req.query.text;

    var sql ="UPDATE "+v1+ " SET " + v2 +" WHERE " + v3 + " < '" + v4 + "'" ;

    conn.query(sql, function (err, result) {
    if (err) {
        console.log('[ERROR] - ', err.message);
        res.send('[ERROR]'+ err.message);
        return;
    }
    res.send('ok')
});
})
app.get('/update_big',(req,res) =>{
    var v1 = req.query.from;
    var v2 = req.query.mysqlid;
    var v3 = req.query.stulist;
    var v4 = req.query.text;

    var sql ="UPDATE "+v1+ " SET " + v2 +" WHERE " + v3 + " > '" + v4 + "'" ;

    conn.query(sql, function (err, result) {
    if (err) {
        console.log('[ERROR] - ', err.message);
        res.send('[ERROR]'+ err.message);
        return;
    }
    res.send('ok')
});
})
app.get('/update_equal',(req,res) =>{
    var v1 = req.query.from;
    var v2 = req.query.mysqlid;
    var v3 = req.query.stulist;
    var v4 = req.query.text;

    var sql ="UPDATE "+v1+ " SET " + v2 +" WHERE " + v3 + " = '" + v4 + "'" ;

    conn.query(sql, function (err, result) {
    if (err) {
        console.log('[ERROR] - ', err.message);
        res.send('[ERROR]'+ err.message);
        return;
    }
    res.send('ok')
});
})
app.get('/update_is_null',(req,res) =>{
    var v1 = req.query.from;
    var v2 = req.query.mysqlid;
    var v3 = req.query.stulist;
    var sql ="UPDATE "+v1+ " SET " + v2 +" WHERE " + v3 + " IS NULL" ;
    conn.query(sql, function (err, result) {
    if (err) {
        console.log('[ERROR] - ', err.message);
        res.send('[ERROR]'+ err.message);
        return;
    }
    res.send('ok')
});
})

app.listen(8888, function () {

    console.log('app listening on port' + '8888' + '!');
})