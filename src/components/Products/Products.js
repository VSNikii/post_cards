import './products.module.scss';
import Render from './../../utils/ProductsRender';

function Products(){
    return(
        <div className='products d-flex flex-column'>
            <h1>Explore our products</h1>
            <div className='product d-flex justify-center'>
                <Render/>
            </div>
        </div>
    );
}

export default Products;