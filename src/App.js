import './App.css';
import imageParfum from './components/assets/image-product-mobile.jpg'
import imageParfum1 from './components/assets/image-product-desktop.jpg'
import iconCart from './components/assets/icon-cart.svg'

function App() {
  return (
    <>
      <section className='container'>
        <div className="card">
          <img className='card__image' src={imageParfum} alt="" />
          <img className='card__image1' src={imageParfum1} alt="" />
          <div className='card__content'>
            <p className='card__tag'>PERFUME</p>
            <h1 className='card__title'>Gabrielle Essence Eau De Parfum</h1>
            <p className='card__description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
            <div className="card__price">
              <p>$149.99</p>
              <p>$169.99</p>
            </div>
            <button className='card__btn'>
              <img src={iconCart} alt="" />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
