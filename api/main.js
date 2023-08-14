const request = require('request');

module.exports = (req, res) => {
    var target = 'https://uptime.betterstack.com/api/v2/monitors'

    var options = {
        'method': 'GET',
        'url': target,
        headers: {
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
        },
    }
    console.log(options)
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(response.body);
        res.end();
    });
}