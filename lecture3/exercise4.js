var fs= require('fs');
var zlib=require('zlib');
var gzip= zlib.createGzip();

var readable = fs.createReadStream(__dirname+'/123.jpg');
var compressed= fs.createWriteStream(__dirname+'/abc.jpg.gz');

readable.pipe(gzip).pipe(compressed);