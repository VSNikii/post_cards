import {sells} from './sellCardList.js';
import './../components/Sellers/sellers.module.scss';

function sellRender(){
    return(
        <>
        {sells.map((item, index) => (
            <div key={index} className='card'>
                <img src={item.imageUrl}/>
                <p>{item.type}</p>
                <h3>{item.name}</h3>
                <span>{item.price}</span>
            </div>
        ))}
            
        </>
    );
}
export default sellRender;