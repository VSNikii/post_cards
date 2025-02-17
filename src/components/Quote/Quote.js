import './Quote.module.scss';

function Quote() {
    return (
        <div className='quote d-flex '>
            <div className='img'>
                <img src='/img/background.jpg' alt='background' />
            </div>
            <div className='words d-flex flex-column justify-around align-center'>
                <svg width="152" height="24" viewBox="0 0 152 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.9466 21.7082L7.64076 13.4164L0.587341 8.2918H9.30585L12 0Z" fill="#B99C7E" />
                    <path d="M44 0L46.6942 8.2918H55.4127L48.3593 13.4164L51.0534 21.7082L44 16.5836L36.9466 21.7082L39.6407 13.4164L32.5873 8.2918H41.3058L44 0Z" fill="#B99C7E" />
                    <path d="M76 0L78.6942 8.2918H87.4127L80.3593 13.4164L83.0534 21.7082L76 16.5836L68.9466 21.7082L71.6407 13.4164L64.5873 8.2918H73.3058L76 0Z" fill="#B99C7E" />
                    <path d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z" fill="#B99C7E" />
                    <path d="M140 0L142.694 8.2918H151.413L144.359 13.4164L147.053 21.7082L140 16.5836L132.947 21.7082L135.641 13.4164L128.587 8.2918H137.306L140 0Z" fill="#B99C7E" />
                </svg>
                <h2>Beautiful cards and very high quality. They were shipped to me very quickly and the packaging was awesome. Definitely recommend and will order again.</h2>
                <sup>- Tirzah -</sup>
                <svg width="576" height="41" viewBox="0 0 576 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="282.5" y="10.5" width="11" height="11" stroke="#424928" />
                    <rect x="300.5" y="10.5" width="11" height="11" stroke="#424928" />
                    <rect x="264.5" y="10.5" width="11" height="11" fill="#424928" stroke="#424928" />
                </svg>

            </div>
        </div>
    );
}

export default Quote;