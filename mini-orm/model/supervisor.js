var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class Supervisor {
    constructor(dataMentah){
        this.id = dataMentah.id;
        this.nama = dataMentah.nama;
        this.email = dataMentah.email;
    }

    static findAll(callback) {
      let querySpv="SELECT * FROM supervisors";
      db.all(querySpv,(err,dataSupervisor)=>{
        if(!err){
          let results = dataSupervisor.map(m => new Supervisor(m));
          return callback(results);
        }else{
          console.log(err);
        }
      });
    }

    static findById(id,callback) {
      let querySpv=`SELECT * FROM supervisors WHERE id=${id}`;
      db.all(querySpv,(err,dataSpvs)=>{
        if(!err){
          let results = dataSpvs.map(m => new Supervisor(m));
          return callback(results[0]);
        }else{
          console.log(err);
        }
      });
    }

    static findWhere(key, value, callback) {
      let querySpv=`SELECT * FROM supervisors WHERE ${key}=${value}`;
      db.all(querySpv,(err,dataSpv)=>{
        if(!err){
          let results = dataSpv.map(m => new Supervisor(m));
          return callback(results);
        }else{
          console.log(err);
        }
      });
    }

    static create(objSpv,cb) {
      let querySpv=`INSERT INTO supervisors(nama,email) VALUES ("${objSpv.nama}","${objSpv.email}")`;
      db.run(querySpv,(err)=>{
        if(!err){
          return cb('sukses');
        }else{
          console.log(err);
        }
      });
    }

    static update(objSpv) {
      let querySpv=`UPDATE projects SET nama = "${objSpv.nama}",status="${objSpv.email}" WHERE id =${objSpv.id} `;
      db.run(querySpv,(err)=>{
        if(!err){
          return cb('sukses');
        }else{
          console.log(err);
        }
      });
    }

    static destroy(id,cb) {
      let querySpv=`DELETE FROM supervisors WHERE id =${id} `;
      db.run(querySpv,(err)=>{
        if(!err){
          return cb('sukses');
        }else{
          console.log(err);
        }
      });
    }
}

module.exports = supervisor;
