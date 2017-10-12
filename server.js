'use strict';

const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

const Contact = require('./public/model/Contact.model');

mongoose.Promise = global.Promise;
const mongoURL = 'mongodb://localhost/contacts';
mongoose.connect(mongoURL, { useMongoClient: true });

app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

app.post('/contacts', (req, res) => {
  const contact = new Contact();
  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.number = req.body.number;
  contact.save()
    .then(() => {
      res.json(res.body);
    })
    .catch(e => {
      console.error(e);
    });
});

app.delete('/contacts/:id', (req, res) => {
  Contact.findOneAndRemove({_id: req.params.id})
    .then(() => {
      res.json(res.body);
    })
    .catch(e => {
      console.error(`Error removing contact with ID ${req.params.id}.`);
    });
});

function initDB () {
  Contact.find().exec()
    .then((result) => {
      if (result.length === 0) {
        const contact = new Contact();
        contact.name = 'Joaquim';
        contact.email = 'joaquim@email.com';
        contact.number = '(111) 111-1111';
        contact.save()
          .then(() => {
            console.log('DB initialized.');
          })
          .catch(e => {
            console.error(e);
          });
      } else {
        console.log('DB already created.');
      }
    })
    .catch((e) => {
      console.error(e);
    });
}

initDB();
app.listen(3000);
console.log('server running on port 3000: http://localhost:3000');
