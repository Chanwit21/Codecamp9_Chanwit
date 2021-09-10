const http = require('http');
const fs = require('fs/promises');
const queryString = require('query-string');
const server = http.createServer(async (req, res) => {
  //   console.log(req.url);
  //   console.log(req.method);
  //   res.end('<h1>Welcome To My first server</h1>');
  //   const indexFile = await fs.readFile('./index.html', 'utf-8');
  //   //   res.end(indexFile);
  if (req.method === 'GET') {
    switch (req.url) {
      case '/': {
        const indexFile = await fs.readFile('./index.html', 'utf - 8');
        res.end(indexFile);
        break;
      }
      case '/about': {
        const aboutFile = await fs.readFile('./about.html', 'utf-8');
        res.end(aboutFile);
        break;
      }
      case '/contactus': {
        const contactusFile = await fs.readFile('./contactus.html', 'utf-8');
        res.end(contactusFile);
        break;
      }
      case '/login': {
        const loginFile = await fs.readFile('./login.html', 'utf-8');
        res.end(loginFile);
        break;
      }
      default: {
        res.end('404 Page Not Found');
        break;
      }
    }
  }

  if (req.method === 'POST') {
    switch (req.url) {
      case '/postlogin': {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          const { email, password } = queryString.parse(body);
          console.log(email);
          console.log(password);
        });
        res.end('<h1>Home</h1>');
        break;
      }
      default: {
        res.end('404 Page not Found');
        break;
      }
    }
  }
});

server.listen(9999, () => console.log('server running on port 9999'));
