var express = require('express');
var router = express.Router();

var modulProject = require('../model/project.js');

/* DEMO 0 - halaman index */
// router.get('/list', (req, res)=> {
//   res.render('project', { title: 'Express' });
// });

router.get('/list',(req, res)=>{
  modulProject.findAll(allProjects=>{
    //res.send(allProjects);
    res.render('project',{projects:allProjects});
  })
})

router.get('/add',(req, res)=>{
    res.render('project_add');
})

router.post('/add',(req, res)=>{
  modulProject.create({nama:'project 2', status:'pending', id_spv:'1'},err=>{
    //res.send('sukses');
    res.redirect('/project/add');
  })
})

router.get('/update/:id',(req, res)=>{
  modulProject.findAll(allProjects=>{
    //res.send(allProjects);
    res.render('project',{projects:allProjects});
  })
})



module.exports = router;
