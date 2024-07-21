import './nav.module.scss';

function Nav(){
    return(
        <div className='wrapper clear d-flex justify-between align-center'>
            <div className='nav-bar d-flex justify-between align-center'>
                <img className='ml-30 mt-10 mr-40 mb-10' src='/img/logo.svg' alt='logo' />
                <ul className='ul-menu d-flex '>
                    <li className='mr-50'>Shop</li>
                    <li className='mr-50'>About</li>
                    <li className='mr-50'>Sustainability</li>
                </ul>
            </div>
            <div className='icons'>
                <img width={32} height={24} className='mr-40 cu-p' src='/img/search.svg' alt='search'/>
                <img className='cu-p' width={32} height={32}  src='/img/cart.svg' alt='cart'/><sup className='mr-50'>0</sup>
            </div>
        </div>
    );
}

export default Nav;