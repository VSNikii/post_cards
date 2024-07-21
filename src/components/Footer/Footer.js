import './footer.module.scss';


function Footer() {
    return (
        <div className='footer-main'>
            <div className='content d-flex justify-between align-center'>
                <img src='/img/logo.png' alt='logo' className='ml-30' />
                <ul className='socialNetworks d-flex justify-around mr-30'>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <div className='lists d-flex justify-around'>
                <ul className='d-flex flex-column'>
                    <li className='heading'>Shop</li>
                    <li>Shop All</li>
                    <li>Greeting Cards</li>
                    <li>Assorted Card Sets</li>
                    <li>Notebooks</li>
                </ul>
                <ul className='d-flex flex-column'>
                    <li className='heading'>About</li>
                    <li>Our Story</li>
                    <li>Our Values</li>
                    <li>Journal</li>
                    <li>Sustainability</li>
                </ul>
                <ul className='d-flex flex-column'>
                    <li className='heading'>Customer Care</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                    <li>Returns & Exchanges</li>
                    <li>Support</li>
                </ul>
                <ul className='d-flex flex-column'>
                    <li className='heading'>Wholesale</li>
                    <li>Overview</li>
                    <li>Register as a Wholesaler</li>
                    <li>Access the Wholesale Store</li>
                </ul>
            </div>
            <footer className='d-flex justify-between'>
                <p className='ml-30'>©2021 Twigs Paper. All Rights Reserved.</p>
                <div className='unity d-flex justify-around'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <p className='mr-30'>Built by The Papestielliz</p>
            </footer>
        </div>
    );
}

export default Footer;