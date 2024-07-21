import './header.module.scss';

function Header() {
    return (
        <div className='wrapper'>
            <img className='background' src='/img/header-bck.jpg' />
            <div className='text'>
                <h6>the eco-friendly way to</h6>
                <h1>Give the best wishes <br /> to your lovedones</h1>
                <div className='d-flex '>
                    <button className='btn-buy'>Shop Now<img className='ml-20' src='/img/next.svg' alt='next' /></button>
                </div>

            </div>
            <div className='square'>
                <img src='/img/after_header.jpg' alt='so soo'/>
            </div>
        </div>
    );
}

export default Header;