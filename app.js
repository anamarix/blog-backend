const express = require('express');
const app = express();
app.use(express.json());


const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

require('dotenv').config()
const user = process.env.USER;
const pass = process.env.PASS;

const dbURI = `mongodb+srv://${user}:${pass}@cluster0.om7pk.mongodb.net/myBlogs?retryWrites=true&w=majority`;
mongoose.connect(dbURI)
.then(app.listen(3000))
.catch(err=> console.log(err))

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about')
})

app.use(blogRoutes);


app.use((req, res)=>{
    res.status(404).render('404.ejs')
})