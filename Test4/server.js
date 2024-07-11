const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const countries = require('./countries.json');
const app = express();
const port = 3000;

if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

app.get('/', (req, res) => {
    res.render('index', { countries });
});

app.post('/submit-form', upload.array('additionalFiles', 10), (req, res) => {
    const formData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        terms: req.body.terms,
        files: req.files.map(file => file.filename)
    };

    console.log('Form Data:', formData);
    res.redirect('/thank-you');
});

app.get('/thank-you', (req, res) => {
    res.send('<h1>Thank you for your submission!</h1>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
