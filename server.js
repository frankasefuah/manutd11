const express = require('express')
const app = express()
const PORT = 8000

const manUtdFirstEleven = {
    'goalkeeper': {
        'name': 'David De Gea',
        'age': 31
    },
    'right back': {
        'name': 'Denzel Dumfries',
        'age': 26
    },
    'left cb': {
        'name': 'Raphael Varane',
        'age': 29
    },
    'right cb': {
        'name': 'Lisandor Martinez',
        'age': 24
    },
    'left back': {
        'name': 'Luke Shaw',
        'age': 26
    },
    'left center midfielder': {
        'name': 'Donny van de Beek',
        'age': 25
    },
    'right center midfielder': {
        'name': 'Frenkie de Jong',
        'age': 25
    },
    'center attacking midfielder': {
        'name': 'Bruno Fernandes',
        'age': 27
    },
    'right winger': {
        'name': 'Antony Matheus dos Santos',
        'age': 22
    },
    'left winger': {
        'name': 'Jadon Sancho',
        'age': 22
    },
    'striker': {
        'name': 'Cristiano Ronaldo',
        'age': 37
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(manUtdFirstEleven)
})

app.get('/api/:name', (req, res) => {
    console.log(req.params.name)
    const position = req.params.name.toLowerCase()

    manUtdFirstEleven[position] ? res.json(manUtdFirstEleven[position]) : 'Sorry the position you typed is wrong. Try again'

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
})