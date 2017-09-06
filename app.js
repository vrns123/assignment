const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const async = require('async');
app.use(express.static(__dirname+'/fe'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Please use /api/search');
});

app.get('/api/search/:_toSearch', (req, res) => {
	// res.send('Please use /api/search');
	var result1,result2;

  request('http://www.imdb.com/title/tt2527336/?ref_=nv_sr_2', (error, response, body)=> {
        if (!error && response.statusCode == 200) {
          console.log(body);
          result1 = {'template':body}
          res.send(result1);
        }
        else{
          throw error;
        }
    })

  /*var tasks = [
  	request('http://www.imdb.com/title/tt2527336/?ref_=nv_sr_2', (error, response, body)=> {
    		if (!error && response.statusCode == 200) {
      		console.log(body);
      		result1 = {'template':body}
      		// res.end(result);

      		console.log('result')
      		// res.send('result has been fatched');
    		}
    		else{
    			throw error;
    		}
  	}),

    request('https://en.wikipedia.org/wiki/Star_Wars', (error, response, body)=> {
        if (!error && response.statusCode == 200) {
          console.log(body);
          result2 = {'template':body}
          // res.end(result);
          console.log('result')
          // res.send('result has been fatched');
        }
        else{
          throw error;
        }
    })
  ]

 
  async.parallel(tasks,function(err){
        if(err)throw err;
        else{
          res.send(result1);
        }
        console.log(" All function executed");
   });*/
  

});

app.listen(5000);
console.log('Running on port 5000...');
