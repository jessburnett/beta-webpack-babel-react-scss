//2018 Jessica Burnett
export var newsUrl = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=c7d9514d83a6408f905ddc1126f11f01';

export var newsReq = new Request(newsUrl);

export function status(response){
    if(response.status >= 200 && response.status < 300){
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

export function json(response){
    return response.json()
}