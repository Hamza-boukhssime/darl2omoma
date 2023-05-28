import express from "express";
import mysql from 'mysql'
import bodyParse from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({extended:true}));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME

})


app.get('/', (req,res)=>{
    res.send("hello this is backend")
    
})

app.post('/add/pregnant',(req,res)=>{

    const {
        dateCheckIn, timeCheckIn,GivngBirthStatu,firstName,lastName
        ,birthDay,age,cin,town,community,possibleDayBirth,NumberOfPregnancies,numberLiveChildren,academicLevel,
        fatherName,fatherJob,transport,road,passage,decisionToCome,accompany,givenBirthLocation,dateBack,timeBack,
        dateCheckOut,timeCheckOut,DurationOfStay
        } = req.body
    

    const q = `
        INSERT INTO pregnant
            (id, cin,dateCheckIn, timeCheckIn, GivngBirthStatu, firstName, lastName, 
            birthDay, age,town, community, possibleDayBirth, NumberOfPregnancies, numberLiveChildren, academicLevel,
            fatherName, fatherJob, transport, road, passage, decisionToCome, accompany, givenBirthLocation, dateBack,
             timeBack, dateCheckOut, timeCheckOut, DurationOfStay) 
             VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    
    db.query(q, [cin,dateCheckIn,timeCheckIn,GivngBirthStatu
        ,firstName,lastName,birthDay,age,town,community,possibleDayBirth,NumberOfPregnancies,numberLiveChildren,
        academicLevel,fatherName,fatherJob,transport,road,passage,decisionToCome,accompany,givenBirthLocation,dateBack,timeBack,
        dateCheckOut,timeCheckOut,DurationOfStay
    ],(err,data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
    

})
app.post('/add/specialvisit', (req,res)=>{
    const {
        cin,firstName,lastName,town,community,academicLevel,accompany,birthDay,age,dateCheckIn,timeCheckIn,fatherName,
        fatherJob,decisionToCome,medicalCheck,passage,possibleDaysToStay,raisonForVisit,road,dateBack,timeBack,dateCheckOut,
        timeCheckOut,DurationOfStay,transport,whoAdviceToCome
    } = req.body
    
    

    const q = `
        insert into specialvisit(id, cin, firstName, lastName, town, community, academicLevel, accompany,
             birthDay,age, dateCheckIn, timeCheckIn, fatherName, fatherJob, decisionToCome, medicalCheck, passage,
            possibleDaysToStay, raisonForVisit, road, dateBack, timeBack, dateCheckOut, timeCheckOut, DurationOfStay, 
            transport, whoAdviceToCome) VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `
    db.query(q, [cin,firstName,lastName,town,community,academicLevel,accompany,birthDay,age,dateCheckIn,timeCheckIn,fatherName,
                 fatherJob,decisionToCome,medicalCheck,passage,possibleDaysToStay,raisonForVisit,road,dateBack,timeBack,dateCheckOut,
                 timeCheckOut,DurationOfStay,transport,whoAdviceToCome  
                ],(err,data)=>{
                    if(err) return res.send(err)
                    return res.send(data)
                })
})

// Add Baby 
app.post('/add/baby', (req,res)=>{
    const {
        cin,firstName,lastName,town,community,academicLevel,accompany,birthDay,age,dateCheckIn,timeCheckIn,babyFirstName,
        babyLastName,babyage,bloodrelationship,fatherName,fatherJob,decisionToCome,medicalCheck,passage,possibleDaysToStay,
        raisonForVisit,road,dateBack,timeBack,dateCheckOut,timeCheckOut,DurationOfStay,transport,whoAdviceToCome
    } = req.body
    

    const q = `
        insert into withbaby(id, cin, firstName, lastName, town, community, academicLevel, accompany,
             birthDay,age, dateCheckIn, timeCheckIn,babyname, babylastName, babyage, bloodrelationship,fatherName, fatherJob, decisionToCome, medicalCheck, passage,
            possibleDaysToStay, raisonForVisit, road, dateBack, timeBack, dateCheckOut, timeCheckOut, DurationOfStay, 
            transport, whoAdviceToCome) VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `
    db.query(q, [cin,firstName,lastName,town,community,academicLevel,accompany,birthDay,age,dateCheckIn,timeCheckIn,
                 babyFirstName,babyLastName,babyage,bloodrelationship,fatherName,
                 fatherJob,decisionToCome,medicalCheck,passage,possibleDaysToStay,raisonForVisit,road,dateBack,timeBack,dateCheckOut,
                 timeCheckOut,DurationOfStay,transport,whoAdviceToCome  
                ],(err,data)=>{
                    if(err) return res.send(err)
                    return res.send(data)
                })
})

// Cards 
app.get('/data/:name',(req,res)=>{
    const name = req.params.name;
    const q = `select * from ${name}` 
    db.query(q, (err, data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
})
// Print 
app.get('/print/:name',(req,res)=>{
    const nameTable =req.params.name;
    const id =req.query.id;
    console.log(req.query)

    const q = `select * from ${nameTable} where id =${id}` 
    db.query(q, (err, data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
})


app.get('/api/test', (req,res)=>{
    const sql = `select id, firstName,cin,raison,academicLevel,dateCheckIn from pregnant
                    union
                 SELECT id, firstName,cin,raison,academicLevel,dateCheckIn FROM specialvisit
                    union
                 SELECT id, firstName,cin,raison,academicLevel,dateCheckIn FROM withbaby
                 order by dateCheckIn desc`;
    db.query(sql, (error, results) => {
      if (error) ;
      res.send(results);
    });
  })
  



//   Search 
app.get('/search', (req,res)=>{
    const search = req.query.search
    const filter = req.query.filter
    const sql = `select id, firstName,lastName,cin,community,raison,academicLevel,dateCheckIn from pregnant
                    where ${filter} = '${search}'
                    union
                    SELECT id, firstName,lastName,cin,community,raison,academicLevel,dateCheckIn FROM specialvisit
                    where ${filter} = '${search}'
                    union
                    SELECT id, firstName,lastName,cin,community,raison,academicLevel,dateCheckIn FROM withbaby
                    where ${filter} = '${search}'
                 `
                 
    db.query(sql, (error, results) => {
      if (error) throw error;
      return res.send(results);
    });
  })



// LWAJABAT BRO U KNOW

app.get('/meals/', (req, res) => {
    const q = 'SELECT * FROM meals';
  
    db.query(q, (error, results) => {
      if (error) {
        console.error('Error retrieving meals: ', error);
        return res.status(500).send('Error retrieving meals');
      }
  
      return res.json(results);
    });
  });
  

app.get('/meals/:id', (req, res) => {
const id = req.params.id
console.log(id)
  const q = `
  select meals.name from meals  
  inner join days_of_week on days_of_week.id=${id} and meals.day_id =days_of_week.id 
  inner join meal_categories  on meal_categories.id = meals.category_id 
  `;
 
  db.query(q, (error, results) => {
    if (error) throw error;
    return res.send(results);
  });
  
});

  
  
app.put('/meals/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    try {
      await db.query('UPDATE meals SET name = ? WHERE id = ?', [name, id]);
      res.send('Meal updated successfully');
    } catch (error) {
      console.error('Error updating meal:', error);
      res.status(500).send('Error updating meal');
    }
  });
  
  app.listen(5000, () => {
    console.log('Connected to backend');
  });
  

// // edit
// // Retrieve patient data based on ID and reason
// app.get('/patients/:reason/:id', (req, res) => {
//   const { reason, id } = req.params;
//   let tableName;

//   if (reason === 'pregnant') {
//     tableName = 'pregnant';
//   } else if (reason === 'specialvisit') {
//     tableName = 'specialvisit';
//   } else if (reason === 'baby') {
//     tableName = 'withbaby';
//   } else {
//     return res.status(400).json({ error: 'Invalid reason' });
//   }

//   const q = `SELECT * FROM ${tableName} WHERE id = ?`;

//   db.query(q, [id], (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: 'Failed to retrieve patient data' });
//     }

//     if (data.length === 0) {
//       return res.status(404).json({ error: 'Patient not found' });
//     }

//     res.json(data[0]);
//   });
// });

// // Rest of your existing code...


app.post('/edit/pregnant/:id', (req, res) => {
  const { id } = req.params;
  const {
    dateCheckIn, timeCheckIn, GivngBirthStatu, firstName, lastName,
    birthDay, age, cin, town, community, possibleDayBirth, NumberOfPregnancies, numberLiveChildren, academicLevel,
    fatherName, fatherJob, transport, road, passage, decisionToCome, accompany, givenBirthLocation, dateBack,
    timeBack, dateCheckOut, timeCheckOut, DurationOfStay
  } = req.body;

  const q = `
    UPDATE pregnant
    SET dateCheckIn = ?, timeCheckIn = ?, GivngBirthStatu = ?, firstName = ?, lastName = ?,
    birthDay = ?, age = ?, cin = ?, town = ?, community = ?, possibleDayBirth = ?, NumberOfPregnancies = ?,
    numberLiveChildren = ?, academicLevel = ?, fatherName = ?, fatherJob = ?, transport = ?, road = ?, passage = ?,
    decisionToCome = ?, accompany = ?, givenBirthLocation = ?, dateBack = ?, timeBack = ?, dateCheckOut = ?,
    timeCheckOut = ?, DurationOfStay = ?
    WHERE id = ?`;

  db.query(q, [
    dateCheckIn, timeCheckIn, GivngBirthStatu, firstName, lastName, birthDay, age, cin, town, community,
    possibleDayBirth, NumberOfPregnancies, numberLiveChildren, academicLevel, fatherName, fatherJob, transport,
    road, passage, decisionToCome, accompany, givenBirthLocation, dateBack, timeBack, dateCheckOut, timeCheckOut,
    DurationOfStay, id
  ], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update patient data' });
    }

    // Return a success response or any relevant data
    res.json({ message: 'Patient data updated successfully' });
  });
});
// Delete
app.delete('/delete/:reason/:id', (req, res) => {
  const { reason, id } = req.params;
  console.log(reason)  

 

  const q = `DELETE FROM ${reason} WHERE id = ?`;

  db.query(q, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to delete patient' });
    }

    // Return a success response or any relevant data
    res.json({ message: 'Patient deleted successfully' });
  });
});