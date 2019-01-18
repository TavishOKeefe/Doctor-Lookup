class Doctor {
  constructor(){

  }

  searchAPIforDoctorInfo(name, firstName, lastName, query){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&first_name=${firstName}&last_name=${lastName}&query=${query}&location=45.512230%2C-122.658722%2C10&user_location=45.512230%2C-122.658722&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function () {
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();
    });
  };
}

export { Doctor };
