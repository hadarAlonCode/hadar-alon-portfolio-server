

axios.get('http://localhost:5000/parking/spaces')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(false);
  })

  