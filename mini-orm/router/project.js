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
  modulProject.create(req.body,err=>{
    //res.send('sukses');
    res.redirect('/project/add');
  })
})

router.get('/update/:id',(req, res)=>{
  modulProject.findById(id,project=>{
    //res.send(allProjects);
    res.render('project_edit',{project:project});
  })
})

router.post('/update/:id',(req, res)=>{
  modulProject.updatee(req.body,err=>{
    //res.send('sukses');
    res.redirect('/project/add');
  })
})


module.exports = router;
