//2018 Jessica Burnett
//styles import
import "./styles/main.scss";
//js imports
import {json, newsReq, status, dataPromise } from "./data";

//generic functions for adding elements
function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return  parent.appendChild(el);
}

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
        const newsArticles = data.articles;
        for (let i = 0; i < newsArticles.length; i++){
            for (let i = 0; i < newsArticles.length; i++){
                //elements to add html structure
                let li = createNode('li'),
                    h3 = createNode('h3'),
                    a = createNode('a'),
                    aSource = createNode('a'),
                    pDesc = createNode('p')
                ;

                //article value assignments
                let newsTitle = newsArticles[i].title,
                    newsSource = newsArticles[i].source,
                    sourceName = newsSource.name,
                    newsDesc = newsArticles[i].description,
                    sourceUrl = newsArticles[i].url
                ;


                a.href = sourceUrl;
                a.innerHTML = newsTitle;
                pDesc.innerHTML = newsDesc;
                aSource.href = sourceName;
                aSource.innerHTML = sourceName;


                const ul = document.getElementById("news__article");
                append(h3, a);
                append(li, h3);
                append(pDesc, aSource);
                append(li, pDesc);
                append(ul, li);
            }
        }
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error){
        console.log(JSON.stringify(error));
    });