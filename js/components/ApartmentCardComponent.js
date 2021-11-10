class ApartmentCardComponent {
  static usdToEuro = 0.86;

  constructor(props) {
    this.props = props;
    this.init();
  }

  convertCurrency = ({ amount, currency }) => {
    if (currency === '$') return amount * ApartmentCardComponent.usdToEuro;
    else return amount;
};

  init = () => {
    const { type, owner, roomCount, squares, address, price, imgSrc} = this.props;
    // const address = `${address.city}, ${address.country}, ${address.street} ${address.number}`;
    // const owner = `${owner.fullnam} \n${owner.email} \n${owner.phone}`;
    this.htmlElement = document.createElement('article');
    this.htmlElement.className = 'card shadow'
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="height="300px card-img-top">
    <div class="card-body">
      <div class="card-title">${type}</div>
      <div class="card-text">
        <ul>
          <li>${roomCount}</li>
          <li>${squares}</li>
          <li>${address}</li>
        </ul>
        <div class="card-text">Price: ${this.convertCurrency(price)} €</div>
        <div class="card-text">${owner}</div>
      </div>
    </div>
  </div> `;
  }
}