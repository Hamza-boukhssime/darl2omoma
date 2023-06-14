import express from "express";
import mysql from 'mysql'
import bodyParse from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv';
import multer from 'multer'

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname,'uploads') )

  },
  filename: function (req, file, cb) {
    // Extract the filename and add a timestamp to make it unique
    const filename =  file.originalname;
    cb(null, filename);
  }
});
const upload = multer({ storage: storage });


app.post('/update/pregnant',(req,res)=>{
  const id = req.body.id

    const {
        dateCheckIn, timeCheckIn,GivngBirthStatu,firstName,lastName
        ,birthDay,age,cin,town,community,possibleDayBirth,NumberOfPregnancies,numberLiveChildren,academicLevel,
        fatherName,fatherJob,transport,road,passage,decisionToCome,accompany,givenBirthLocation,dateBack,timeBack,
        dateCheckOut,timeCheckOut,DurationOfStay,GivngBirthStatuBefore,GivngBirthStatuAfter
        } = req.body
    

    const q = `UPDATE pregnant
    SET cin = ?, dateCheckIn = ?, timeCheckIn = ?, GivngBirthStatu = ?, firstName = ?, lastName = ?, 
        birthDay = ?, age = ?, town = ?, community = ?, possibleDayBirth = ?, NumberOfPregnancies = ?, 
        numberLiveChildren = ?, academicLevel = ?, fatherName = ?, fatherJob = ?, transport = ?, 
        road = ?, passage = ?, decisionToCome = ?, accompany = ?, givenBirthLocation = ?, dateBack = ?, 
        timeBack = ?, dateCheckOut = ?, timeCheckOut = ?, DurationOfStay = ?,GBSBefore=?,GBSAfter=?
    WHERE id = ${id};
    `
      
             
    
    db.query(q, [cin,dateCheckIn,timeCheckIn,GivngBirthStatu
        ,firstName,lastName,birthDay,age,town,community,possibleDayBirth,NumberOfPregnancies,numberLiveChildren,
        academicLevel,fatherName,fatherJob,transport,road,passage,decisionToCome,accompany,givenBirthLocation,dateBack,timeBack,
        dateCheckOut,timeCheckOut,DurationOfStay,GivngBirthStatuBefore,GivngBirthStatuAfter
    ],(err,data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
    

})
app.post('/add/pregnant',upload.single('file'),(req,res)=>{
    //get extension of image
    const file = req.file;
console.log(file)

    // const { name, mimetype } = file;
    const ext = req.body.cinImag.split('.')[1];

    var {
        cinImag,dateCheckIn, timeCheckIn,GivngBirthStatuBefore,GivngBirthStatuAfter,firstName,lastName
        ,birthDay,age,cin,town,community,possibleDayBirth,NumberOfPregnancies,numberLiveChildren,academicLevel,
        fatherName,fatherJob,transport,road,passage,decisionToCome,accompany,givenBirthLocation,dateBack,timeBack,
        dateCheckOut,timeCheckOut,DurationOfStay
        } = req.body
    
        cinImag=Date.now()+'.'+ext;
    const q = `
        INSERT INTO pregnant
            (id,cinImage, cin,dateCheckIn, timeCheckIn, firstName, lastName, 
            birthDay, age,town, community, possibleDayBirth, NumberOfPregnancies, numberLiveChildren, academicLevel,
            fatherName, fatherJob, transport, road, passage, decisionToCome, accompany, givenBirthLocation, dateBack,
             timeBack, dateCheckOut, timeCheckOut, DurationOfStay,GBSBefore,GBSAfter) 
             VALUES (null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    
    db.query(q, [cinImag,cin,dateCheckIn,timeCheckIn
        ,firstName,lastName,birthDay,age,town,community,possibleDayBirth,NumberOfPregnancies,numberLiveChildren,
        academicLevel,fatherName,fatherJob,transport,road,passage,decisionToCome,accompany,givenBirthLocation,dateBack,timeBack,
        dateCheckOut,timeCheckOut,DurationOfStay,GivngBirthStatuBefore,GivngBirthStatuAfter
    ],(err,data)=>{
        if(err) return res.send(err)
        return res.send(data)
    })
    

})
app.post('/update/specialvisit', (req,res)=>{
  const id = req.body.id
    const {
        cin,firstName,lastName,town,community,academicLevel,accompany,birthDay,age,dateCheckIn,timeCheckIn,fatherName,
        fatherJob,decisionToCome,medicalCheck,passage,possibleDaysToStay,raisonForVisit,road,dateBack,timeBack,dateCheckOut,
        timeCheckOut,DurationOfStay,transport,whoAdviceToCome
    } = req.body
    
    

    const q = `
        Update specialvisit
        Set cin=?, firstName=?, lastName=?, town=?, community=?, academicLevel=?, accompany=?,
             birthDay=?,age=?, dateCheckIn=?, timeCheckIn=?, fatherName=?, fatherJob=?, decisionToCome=?, medicalCheck=?, passage=?,
            possibleDaysToStay=?, raisonForVisit=?, road=?, dateBack=?, timeBack=?, dateCheckOut=?, timeCheckOut=?, DurationOfStay=?, 
            transport=?, whoAdviceToCome=? 
        Where id = ${id};
    `
    db.query(q, [cin,firstName,lastName,town,community,academicLevel,accompany,birthDay,age,dateCheckIn,timeCheckIn,fatherName,
                 fatherJob,decisionToCome,medicalCheck,passage,possibleDaysToStay,raisonForVisit,road,dateBack,timeBack,dateCheckOut,
                 timeCheckOut,DurationOfStay,transport,whoAdviceToCome  
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

// update Baby 
app.post('/update/baby', (req,res)=>{
  const id = req.body.id
    const {
        cin,firstName,lastName,town,community,academicLevel,accompany,birthDay,age,dateCheckIn,timeCheckIn,babyFirstName,
        babyLastName,babyage,bloodrelationship,fatherName,fatherJob,decisionToCome,medicalCheck,passage,possibleDaysToStay,
        raisonForVisit,road,dateBack,timeBack,dateCheckOut,timeCheckOut,DurationOfStay,transport,whoAdviceToCome
    } = req.body
    

    const q = `
        UPDATE withbaby
        SET cin=?, firstName=?, lastName=?, town=?, community=?, academicLevel=?, accompany=?,
             birthDay=?,age=?, dateCheckIn=?, timeCheckIn=?,babyname=?, babylastName=?, babyage=?, bloodrelationship=?,fatherName=?, fatherJob=?, decisionToCome=?, medicalCheck=?, passage=?,
            possibleDaysToStay=?, raisonForVisit=?, road=?, dateBack=?, timeBack=?, dateCheckOut=?, timeCheckOut=?, DurationOfStay=?, 
            transport=?, whoAdviceToCome=?
        WHERE id = ${id};
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
    const q = `select * from ${name} where Valide=1` 
    db.query(q, (err, data)=>{
        if(err) return res.send(err)
        console.log(data)
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
    const sql = `select id, firstName,cin,raison,academicLevel,dateCheckIn from pregnant where Valide=1
                    union
                 SELECT id, firstName,cin,raison,academicLevel,dateCheckIn FROM specialvisit where Valide=1
                    union
                 SELECT id, firstName,cin,raison,academicLevel,dateCheckIn FROM withbaby where Valide=1
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

  
  
app.put('/meals/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    try {
       db.query('UPDATE meals SET name = ? WHERE id = ?', [name, id]);
      res.send('Meal updated successfully');
    } catch (error) {
      console.error('Error updating meal:', error);
      res.status(500).send('Error updating meal');
    }
  });



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
app.post('/delete/:reason/:id', (req, res) => {
  const { reason, id } = req.params;
  const q = `Update ${reason} set Valide=0 WHERE id = ?`;

  db.query(q, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to delete patient' });
    }

    // Return a success response or any relevant data
    res.json({ message: 'Patient deleted successfully' });
  });
});

//add stock
app.post('/add/stock', (req, res) => {
  const {
      designation,
      dateEntree,
      quantiteEntree,
      quantiteSortie,
      datePeremption
  } = req.body

  const q = `
      insert into stock(id, designation, date_entree, quantite_entree, quantite_sortie, date_peremption) VALUES (null,?,?,?,?,?)
  `
  db.query(q, [designation,
      dateEntree,
      quantiteEntree,
      quantiteSortie,
      datePeremption
  ], (err, data) => {
      if (err) return res.send(err)
      return res.send(data)
  })
})
//update stock
app.put('/update/stock', (req, res) => {
  const {
    id,
    designation,
    dateEntree,
    quantiteEntree,
    quantiteSortie,
    datePeremption,
  } = req.body;

  const updateStockQuery = `
    UPDATE stock
    SET designation=?, date_entree=?, quantite_sortie=?, quantite_entree=?, date_peremption=?
    WHERE id=?
  `;
  const updateOutDetails = `
    UPDATE stockoutdetails
    SET productName=?
    WHERE idProduct=?
  `;

  db.query(updateStockQuery, [designation, dateEntree, quantiteSortie, quantiteEntree, datePeremption, id], (err, data) => {
    if (err) {
      return res.send(err);
    }

    // Perform the second update query here
    db.query(updateOutDetails, [designation, id], (err2, data2) => {
      if (err2) {
        return res.send(err2);
      }

      return res.send(data2);
    });
  });
});

// app.put('/update/stock', (req, res) => {
//   const {
//       id,
//       designation,
//       dateEntree,
//       quantiteEntree,
//       quantiteSortie,
//       datePeremption,

//   } = req.body

//   const q=`
//       update stock set designation=?, date_entree=?,quantite_sortie=?, quantite_entree=?, date_peremption=? where id=?`
//   db.query(q, [designation,
//       dateEntree,
//       quantiteSortie,
//       quantiteEntree,
//       datePeremption,
//       id
//   ], (err, data) => {
//       if (err) return res.send(err)
//       return res.send(data)
//   })
// })
//update stock
app.put('/update/sortie', (req, res) => {
  const {
      id,
      quantiteSortieOld,
      quantiteSortieNew  } = req.body
  var Some = parseInt(quantiteSortieNew)+parseInt(quantiteSortieOld)
  
  const q = `
      update stock set quantite_sortie=? where id=?
  `
  db.query(q, [
    Some,
      id
  ], (err, data) => {
      if (err) return res.send(err)
      return res.send(data)
  })

  

})
app.post('/add/details', (req, res) => {
  const {designation,quantiteSortieNew,id} = req.body
  const date = new Date()
  const todayDate =`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  const queryStock = `insert into stockoutdetails(dateSortie, productName,quntite,idProduct) values(?,?,?,?)`
  db.query(queryStock, [
    todayDate,
    designation,
    parseInt(quantiteSortieNew),
    id
  ], (err, data) => {
      if (err) return res.send(err)
      return res.send(data)
  })
})
//get stock data
app.get('/list/stock', (req, res) => {
  const sql = `select * from stock`
  db.query(sql, (error, results) => {
      if (error);
      res.send(results);
  });
})
//get stock Out details
app.get('/stockout/details/:id', (req, res) => {
  const {id} = req.params
  const sql = `select * from stockoutdetails where idProduct=${id}`
  db.query(sql, (error, results) => {
      if (error);
      res.send(results);
  });
})
//get stock data
app.get('/stock/:id', (req, res) => {
  const id = req.params.id
  const sql = `select * from stock where id=${id}    `
  db.query(sql, (error, results) => {
      if (error);
      res.send(results);
  });
})


  
app.listen(5000, () => {
  console.log('Connected to backend');
});
