const getStarWarsPerson = async () => {
    try {

        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log('ERROR', e);
    }
};

getStarWarsPerson(7);