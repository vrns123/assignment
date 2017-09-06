const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const async = require('async');
const wiki = require("node-wikipedia");
const client = require( 'google-images' );
const google = require('google')

app.use(express.static(__dirname+'/fe'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Please use /api/search');
});

app.get('/api/search/:_toSearch', (req, res) => {
	// res.send('Please use /api/search');
	var result1,result2;
  var keyWord = req.params._toSearch
  var result = []
  var test_task=[
   function(callback) {
               wiki.page.data(keyWord, { content: false }, (response) =>{
  // structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
              
              console.log('response',response);
              result.push(response);
              callback();
    }); 
    },
       function(callback){
      google(keyWord, (err, res)=>{
      console.log(res)
      result.push(res)
      callback()
  });
    }
    /*function(callback) {
               wiki.page.data("Star Wars", { content: false }, (response) =>{
  // structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
              console.log('response',response);
              result.push(response);
              callback();
              
    }); 
    }*/
 
  ]

  // request('http://www.imdb.com/title/tt2527336/?ref_=nv_sr_2', (error, response, body)=> {
  //       if (!error && response.statusCode == 200) {
  //         // console.log(body);
  //         result1 = {'template':response}
  //         // res.send(result1);
  //       }
  //       else{
  //         throw error;
  //       }
  //   })

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

 
  async.parallel(test_task,(err)=>{
        if(err){
        throw err;
        }
        else{
          res.send(result1);
        }
        console.log(" All function executed");
   });*/
  
async.parallel(test_task,(err)=>{
        if(err){
          throw err;
        }
        else{
          console.log(" All function executed");
          res.send({'template':result});
        }
        
   });


});

app.listen(5000);
console.log('Running on port 5000...');
