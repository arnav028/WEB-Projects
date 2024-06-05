/* /* first way o fcreating promises*/
let url = 'http://example.com/movie.mp4'
let p = new Promise((resolve, reject) => {
    // resolve and reject both are function

    let moviename = url.split('/').pop();
    let movieextension = moviename.split('.').pop();

    if(['mp4','mkv'].indexOf(movieextension) == -1){
        reject(); //movie download nhi ho payi
    }
    else{
        resolve();
    }
})

p.then(resolve)
.catch(reject)

//alternative way
p.then(resolve,reject); 