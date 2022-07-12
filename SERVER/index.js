const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {

    var axios = require('axios');

    // change application id from here
    const appId = 'local-1657626449478';

    var config = {
        method: 'get',
        url: `http://localhost:4040/api/v1/applications/${appId}/jobs`,
        headers: { }
    };

    axios(config)
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        res.send(error);
    });
})

app.listen(5000, () => {
    console.log('server is up and running on 5000')
});