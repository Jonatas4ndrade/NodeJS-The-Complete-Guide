// Used to log user names from forms
const fs = require('fs');

// Message shown on index page.
const GREETING = "Server up and running."

const requestHandler = (req, res) => {
  
  // Not really necessary, but improves readability,
  const method = req.method;
  const url = req.url;

  // If request comes from root, shows standard greeting message.
  if (url === '/') {
    
    // The response building would be much easier using JSX and string literals,
    // But let's stick to vanilla node for now
    res.write('<html>');
    res.write('<head><title>Register Username</title></head>');
    res.write(
      '<body><form action="/users" method="POST"><input type="text" name="newUser"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  
  // If request comes redirected from form, lists registered user names.
  if (method === 'POST' && url === '/users') {
   
    const body = [];
    // On data event, push the streamed chunks to 'body' above, which will act as a buffer.
    req.on('data', chunk => {
      body.push(chunk);
    });

    // All chunks received, parse the body (now in streaming format) to readable string.
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      // The parsed data received from form will be in a "<formName>=<data sent>" format.
      // by spliting on '=', we can fetch the data itself and discard the rest.
      const newUser = parsedBody.split('=')[1];

      //Saves the parsed data and redirects to root route.
      fs.writeFile('users.txt', newUser, err => {
        // Code 302 == redirection.
        res.statusCode = 302;
        // Redirects to root.
        res.setHeader('Location', '/');
        return res.end();
      });
    });

  // If request is not POST received from /users, handle response as below instead.
    }
  res.setHeader('Content-Type', 'text/html');
  // Oh boy, how I miss JSX...
  res.write('<html>');
  res.write('<head><title>WE\'RE ONLINE</title><head>');
  res.write('<body><h1>' + GREETING + '</h1></body>');
  res.write('</html>');
  res.end();
};

// Exports function.
module.exports = requestHandler;
