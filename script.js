async function fetchData() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '368701ca7dmsh90a5a93d804f1a6p1d2511jsn7943ce5d5d6c',
      'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
    }
  };

  const res = await fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
  const record = await res.json()
  const theJoke = record[0]
  const oneJoke = theJoke.joke

  document.getElementById("joke").innerHTML = oneJoke
}
fetchData();
