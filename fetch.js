fetch("https://swapi.dev/api/people/1")
    .then((res) => {
        console.log("Resolved!", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2/");
    })
    .then((res) => {
        console.log('Second request Resolved!!!');
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("Error!", e);
    }); 