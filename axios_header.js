const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/',)
    console.log(res.data.joke);
}