import './sellers.module.scss';
import SellRender from '../../utils/SellRender.js';

function Sellers() {
    return (
        <div className='sell d-flex'>
            <div className='txt-block d-flex flex-column'>
                <div className='introduction'>
                    <h1>Our Best Sellers</h1>
                    <p>Deliver a smile to yourself or someone special with one of our sustainable favorites.</p>
                </div>
                <div>
                    <button className='shopIn'>
                        Shop all products
                        <svg width="29" height="14" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.4286 0C22.4286 3.5 28.1428 5.25 28.1428 7C28.1428 8.75 22.4286 9.91667 22.4286 14" stroke="#F5EEE6" />
                            <path d="M28.1429 7H0.714279" stroke="#F5EEE6" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className='card-block d-flex'>
                <SellRender />
            </div>
        </div>
    );
}

export default Sellers;