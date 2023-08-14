const request = require('request');

module.exports = (req, res) => {
    var target = 'https://uptime.betterstack.com/api/v2/monitors'
    
    var options = {
        'method': 'GET',
        'url': target,
        "Authorization": process.env.API_TOKEN,
    }
    
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(md.render(response.body));
        res.end();
    });
}