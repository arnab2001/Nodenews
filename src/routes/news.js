const express = require("express");
const newsrouter = express.Router();
const axios = require("axios");

newsrouter.get("",async(req,res) =>
{ let articleID = "programming";
  console.log(articleID);
  try {
    const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=${articleID}&apiKey=8ec9ed720d34482bae987150bba3ffa2`);
    console.log(newsApi.data.articles[0].title);
    res.render("articles",{articles: newsApi.data.articles});
    // res.render("articles",{title: newsApi.data.articles[0].title});
    
  } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      }else{
        console.error("Error", err.message);

      }

  }
 
});

newsrouter.post('', async(req, res) => {
  let search = req.body.search
  try {
    const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=8ec9ed720d34482bae987150bba3ffa2`);
    console.log(newsApi.data.articles[0].title);
    res.render("articles",{articles: newsApi.data.articles});
  } catch (err) {
      if(err.response) {
          res.render('newsSearch', { articles : null })
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
      } else if(err.requiest) {
          res.render('newsSearch', { articles : null })
          console.log(err.requiest)
      } else {
          res.render('newsSearch', { articles : null })
          console.error('Error', err.message)
      }
  } 
})

module.exports = newsrouter;




//8ec9ed720d34482bae987150bba3ffa2