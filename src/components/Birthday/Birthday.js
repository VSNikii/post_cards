import './birthday.module.scss';

function Birthday() {
    return (
        <div className='birthday d-flex justify-center'>

            <div className='birthday-main d-flex flex-column justify-around'>

                <div className='birthday-text d-flex flex-column'>
                    <p>Inspiration</p>
                    <h1>The Ultimate Guide: What to Write in a Birthday Card</h1>
                    <p><b>Celebrate the life you have!</b> Birthdays are the one time of year we get to celebrate those closest to us and we should take the opportunity to let them know just how much they are appreciated.</p>
                </div>
                <div>
                    <button>Read article <svg width="29" height="14" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4286 0C22.4286 3.5 28.1429 5.25 28.1429 7C28.1429 8.75 22.4286 9.91667 22.4286 14" stroke="#212806" />
                        <path d="M28.1429 7H0.714294" stroke="#212806" />
                    </svg>
                    </button>
                </div>
            </div>
            <div><img src='/img/postcard.jpg' /></div>
        </div>
    );
}

export default Birthday;