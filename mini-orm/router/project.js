var express = require('express');
var router = express.Router();

var modulProject = require('../model/project.js');

/* DEMO 0 - halaman index */
// router.get('/list', (req, res)=> {
//   res.render('project', { title: 'Express' });
// });

router.get('/list',(req, res)=>{
  modulProject.findAll(allProjects=>{
    res.send(allProjects);
    //res.render('');
  })

})

router.get('/add',(req, res)=>{
  modulProject.create({nama:'project 2', status:'pending', id_spv:'1'},err=>{
    res.send('sukses');
    //res.render('');
  })

})


module.exports = router;
