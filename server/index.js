const express = require('express');
const uid = require('uid');
const app = express();

const contacts = [
    { name: 'Teo', phoneNumber: '098173827183', id: uid() },
    { name: 'Ti', phoneNumber: '098122312343', id: uid() },
    { name: 'Tun', phoneNumber: '098173381843', id: uid() },
];

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/contact', (req, res) => {
    res.send(contacts);
});

app.get('/contact/:id', (req, res) => {
    const { id } = req.params;
    const contact = contacts.find(c => c.id === id);
    res.send(contact);
});

app.listen(3000, () => console.log('Server started!'));
