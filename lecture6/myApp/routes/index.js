var express = require('express');
var app = express();
var morgan = require('morgan')
const validator = require('express-validator');

app.use(morgan('combined'))

app.use(validator())

let users = [];

/* GET home page with user. */
app.get('/getUser', function (req, res, next) {
  res.send(users);
});


/*Get user by id */
app.get('/getUserById/:id', (req, res) => {
  res.send(
    users.filter(user => user.id === req.params.id)
      .map(user => user)
  )
})

/*POST new user with the validated attributes*/
app.post('/postUser/:id/:name/:course/:grade',
  (req, res, next) => {
    req.checkBody(req.params.id, "enter a valid id").isNumeric();
    req.checkBody(req.params.name, "Name should not be null").isEmpty();
    req.checkBody(req.params.course, "Course should not be null").isEmpty();
    req.checkBody(req.params.grade, "Grade should not be null").isNumeric();

    const errors = (req.validationErrors());
    // if (errors)
    //   return res.status(422).json(errors.map(err => err.msg));
    return next();
  },

  (req, res) => {
    const Person = require('../entities/person.js')
    users.push(new Person(req.params.id, req.params.name, req.params.course, req.params.grade));
    return res.status(200).json(users)
  })

/*Delete user*/
app.delete('/delete/:id', (req, res) => {
  for (let user of users) {
    if (user.id === req.params.id)
      users.splice(users.indexOf(user), 1);
  }
  return res.status(200).json(users);
});



module.exports = app;
