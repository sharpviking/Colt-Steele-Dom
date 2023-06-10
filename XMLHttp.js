req.onload = function () {
    console.log("It Loaded!!");
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function () {
    console.log('Error');
    console.log(this)
};

req.open("Get", "https://swapi.dev/api/people/1/");
req.send();