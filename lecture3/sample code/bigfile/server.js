const fs = require('fs');
const server = require('http').createServer((req, res)=>{
  res.end('helloz')
}).listen(5555, ()=>console.log('listning to 5555'));

// server.on('request', (req, res) => {
//   // fs.readFile('./big.file', (err, data) => {
//   //   if (err) throw err;
  
//   //   res.end(data);
//   // });

//   // const src = fs.createReadStream('./big.file');
//   // src.pipe(res);
// });

// server.listen(8000);
