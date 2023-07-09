const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('dragon news running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);
    }
})

app.get('/news', (req, res) => {
    res.send(news);
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedId = news.find(n => n._id === id);
    res.send(selectedId);
});

app.listen(port, () => {
    console.log(`listening at port: ${port}`);
});
