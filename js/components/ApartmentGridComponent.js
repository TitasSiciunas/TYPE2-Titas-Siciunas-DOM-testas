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

  deleteApartment = id => API.deleteApartment(id, this.fetchApartments, this.showError);


  showError = msg => alert(msg);

  fetchApartments = () => API.fetchApartments(this.saveApartments, this.showError);

  wrapChild = element => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
    wrapper.append(element);
    return wrapper;
  }

  init = () => {
    this.state.loading = true;
    setTimeout(this.fetchApartments, 1000);
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3'

    this.render();
  }

  render = () => {
    const { loading, apartments } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else {
      this.htmlElement.innerHTML = '';
      const children = apartments
      .map(({ id, ...apartmentProps }) => new ApartmentCardComponent({
        ...apartmentProps,
        onDelete: () => this.deleteApartment(id)
      }))
      .map(x => x.htmlElement)
      .map(this.wrapChild)
      this.htmlElement.append(...children);
    }
  }

}