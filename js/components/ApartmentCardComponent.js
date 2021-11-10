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
    const { type, owner, roomCount, squares, address, price, imgSrc, onDelete } = this.props;
    const apartmentAddress = `${address.city}, ${address.country}, ${address.street} ${address.number}`;
    const apartmentOwner = `${owner.fullname} 
    ${owner.email} 
    ${owner.phone}`;
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
          <li>${apartmentAddress}</li>
        </ul>
        <div class="card-text">Price: ${this.convertCurrency(price)} €</div>
        <div class="card-text">${apartmentOwner}</div>
      </div>
    </div>
  </div> 
  <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>`;
    const btn = this.htmlElement.querySelector('.btn');
    btn.addEventListener('click', onDelete);
  }
}