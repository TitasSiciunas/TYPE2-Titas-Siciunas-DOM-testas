class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartments: [],
      loading: false
    }
    this.init();
  }

  saveApartments = apartments => {
    this.state = { apartments, loading: false };

    this.render();
  }

  showError = msg => alert(msg);

  fetchApartments = () => API.fetchApartments(this.saveApartments, this.showError);

  init = () => {
    this.state.loading = true;
    this.fetchApartments();
    this.htmlElement = document.createElement('div');

    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = 'sunčiama...'
    } else {
      this.htmlElement.innerHTML = 'parsiųsta!';
    }
  }

}