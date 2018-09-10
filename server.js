// 1. Module
const express = require('express');
const mongoose = require('mongoose');

// 10. Bring Folders from the routes/api area
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// 2. Invoke App
const app = express();

// 8. DB Config -> Goes to config => keys.js
const db = require('./config/keys').mongoURI;

// 9. Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// 5. CRUD => Read
app.get('/', (req, res) => res.send('Hello'));

// 12. Use routes. Whats happening here is that the file will redirect to the USER area which is defined already on step 10.
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts)

// 3. Heroku Deployment
const port = process.env.PORT || 5000;

// 4. When server is running port, console.log
app.listen(port, () => console.log(`Server is running on ${port}`));
