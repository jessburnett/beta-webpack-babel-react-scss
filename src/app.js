//2018 Jessica Burnett
//styles import
import "./styles/main.scss";

//js imports
import {json, newsReq, status, dataPromise } from "./data";

//fetch newsAPI data

/*fetch() 1- won’t reject on HTTP error status instead
/it will resolve normally (with ok status set to false),
 and it will only reject on network failure or if anything
 prevented the request from completing. 2 - doesn't send nor
 store cookies (unauthorized requests)
*/
fetch(newsReq)
    .then(status)
    .then(json)
    .then(function (data){
        //log newsarticle titles
        var newsArticles = data.articles;
        for (let i = 0; i < newsArticles.length; i++){
            //log newsarticle titles
            var newsArticles = data.articles;
            for (let i = 0; i < newsArticles.length; i++){
                let newsTitle = newsArticles[i].title;
                let newsSource = newsArticles[i].source;
                let sourceName = newsSource.name;

                let h3 = document.createElement("h3");
                let h5 = document.createElement("h5");

                let title = document.createTextNode(newsTitle);
                let source = document.createTextNode(sourceName);


                h3.appendChild(title);
                h5.appendChild(source);

                let articles = document.getElementById("newsArticles");
                articles.appendChild(h3).appendChild(h5);
            }
        }
        console.log('Request succeeded with JSON response', data);
    }).catch(function(error){
    console.log("Request failed error");
});