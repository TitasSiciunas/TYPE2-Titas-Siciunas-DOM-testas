const baseURL = 'http://localhost:3000';

class API {
  static fetchApartments = (success, failure) => {
    fetch(`${baseURL}/apartments`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }

  static deleteApartment = (id, success, failure) => {
    fetch(`${baseURL}/apartments/${id}`, { method: 'DELETE' })
      .then(success)
      .catch(failure)
  }
}

// API.fetchApartments(
//   (duomenys) => console.log('Duomenys gauti', duomenys),
//   (klaida) => console.error('Klaida', klaida)
// )

// API.deleteApartment(
//   '1',
//   (duomenys) => console.log('Ištrinta', duomenys),
//   (klaida) => console.error('Klaida', klaida)
// )