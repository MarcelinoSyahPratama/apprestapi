'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("aplikasi REST API berjalan", res)
};

//menampilkan semua data
exports.tampilmahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa',function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
}