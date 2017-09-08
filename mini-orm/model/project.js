var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/Database.db');

class Project {
    constructor(dataMentah){
        this.id = dataMentah.id;
        this.nama = dataMentah.nama;
        this.status = dataMentah.status;
        this.id_spv=dataMentah.id_spv;
    }

    static findAll() {
      let queryProject="SELECT * FROM projects";
      db.all(queryProject,(err,dataProjects)=={
        if(!err){
          let results = dataProjects.map(m => new Model(m));
          return callback(result);
        }else{
          console.log(err);
        }

      });


    }

    static findById(callback) {

    }

    static findWhere() {}

    static create() {}

    static update() {}

    static destroy() {}
}
