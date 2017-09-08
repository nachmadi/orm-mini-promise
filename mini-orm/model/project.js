var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database.db');

class Project {
    constructor(dataMentah){
        this.id = dataMentah.id;
        this.nama = dataMentah.nama;
        this.status = dataMentah.status;
        this.id_spv=dataMentah.id_spv;
    }

    static findAll(callback) {
      let queryProject="SELECT * FROM projects";
      db.all(queryProject,(err,dataProjects)=>{
        if(!err){
          let results = dataProjects.map(m => new Project(m));
          return callback(results);
        }else{
          console.log(err);
        }
      });
    }

    static findById(id,callback) {
      let queryProject=`SELECT * FROM projects WHERE id=${id}`;
      db.all(queryProject,(err,dataProjects)=>{
        if(!err){
          let results = dataProjects.map(m => new Project(m));
          return callback(results[0]);
        }else{
          console.log(err);
        }
      });
    }

    static findWhere(key, value, callback) {
      let queryProject=`SELECT * FROM projects WHERE ${key}=${value}`;
      db.all(queryProject,(err,dataProjects)=>{
        if(!err){
          let results = dataProjects.map(m => new Project(m));
          return callback(results);
        }else{
          console.log(err);
        }
      });
    }

    static create(objProject,cb) {
      let queryProject=`INSERT INTO projects(nama,status,id_spv) VALUES ("${objProject.nama}","${objProject.status}","${objProject.id_spv}")`;
      db.run(queryProject,(err)=>{
        if(!err){
          return cb('sukses');
        }else{
          console.log(err);
        }
      });
    }

    static update(objProject) {
      let queryProject=`UPDATE projects SET nama = "${objProject.nama}",status="${objProject.status}",id_spv="${objProject.id_spv}" WHERE id =${objProject.id} `;
      db.run(queryProject,(err)=>{
        if(!err){
          return cb('sukses');
        }else{
          console.log(err);
        }
      });
    }

    static destroy(id,cb) {
      let queryProject=`DELETE FROM projects WHERE id =${id} `;
      db.run(queryProject,(err)=>{
        if(!err){
          return cb('sukses');
        }else{
          console.log(err);
        }
      });
    }
}

module.exports = Project;
