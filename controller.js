'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("aplikasi REST API berjalan", res)
};

//menampilkan semua data
exports.tampilmahasiswaberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?',[id],
    function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
}

//menampilkan data berdasarkan id
exports.tampilmahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa',function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
}
exports.tambah = function(req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES (?,?,?)',[nim,nama,jurusan],function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil menambah data", res);
        }
    })
}