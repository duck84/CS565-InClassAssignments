const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    const {headers, methods, url} = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () =>{
        body = Buffer.concat(body).toString();

        request.on('error', (err) => {
            console.error(err);
    })

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    const responseBody = {body};
    jsonObject = JSON.stringify(responseBody);
    test = body
    response.write('<DOCTYPE html><html><body>')
    response.write('<div>' + test + '</div>');
    response.write('</body></html>');
 //   response.write(JSON.stringify(responseBody))
    response.end();
    })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});