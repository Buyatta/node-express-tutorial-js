const { application } = require("express");
const express = require("express");
const app = express();
let { people } = require('./data') 
//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Provide details" });
  }
  res.status(201).json({success:true,person:name});
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }

  res.status(401).send("Provide name");
});
app.put('/api/people:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const person = person.find((people) => person.id === Number(id))
  if (!person) {
    return res.status(400).json({ success: false, msg: `no person with id${id}` });
  }
  
    const newPeople = people.map((person) => {
      if (person.id === number(id)) { 
person.name = name
      }
      return person 
   })
  
 return res.status(201).json({ success: true, person: newPeople });
})

app.listen(5000, () => {
  console.log("Play the server");
});
