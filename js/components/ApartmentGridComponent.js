class ApartmentGridComponent {
  constructor() {
    this.state = {
      apartments: [],
      loading: false
    }
    this.init();
  }

  init = () => {
    this.htmlElement = document.createElement('div');

    this.render();
  }

  render = () => {
    this.htmlElement.innerHTML = 'dkhgskjg';
  }

}