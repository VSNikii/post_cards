import './../components/Products/products.module.scss';
import {products} from './productsList';

function ProductsRender(){
    return (
        <>
            {
                products.map((item, index) => (
                    <div key={index} className='item d-flex flex-column align-center'>
                        <img src={item.imageUrl} alt={index}/>
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </>
    );
}

export default ProductsRender;