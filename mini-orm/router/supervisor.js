var express = require('express');
var router = express.Router();

var modulSupervisor = require('../model/supervisor.js');

router.get('/list',(req, res)=>{
  modulSupervisor.findAll(allProjects=>{
    //res.send(allProjects);
    res.render('supervisor',{projects:allProjects});
  })
})

router.get('/add',(req, res)=>{
    res.render('supervisor_add');
})

router.post('/add',(req, res)=>{
  modulSupervisort.create(req.body,err=>{
    //res.send('sukses');
    res.redirect('/supervisor/add');
  })
})

router.get('/update/:id',(req, res)=>{
  modulSupervisor.findById(id,project=>{
    //res.send(allProjects);
    res.render('supervisor_edit',{project:project});
  })
})

router.post('/update/:id',(req, res)=>{
  modulProject.updatee(req.body,err=>{
    //res.send('sukses');
    res.redirect('/supervisor/update');
  })
})


module.exports = router;
