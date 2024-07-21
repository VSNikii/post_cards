import {listAdv} from './advantagesList';
import './../components/Advantages/advantages.module.scss';

function AdvantagesRender(){
    return(
        <>
            {listAdv.map((item, index) =>(
                <div className='advantage d-flex flex-column align-center'>
                    <img width={220} heighrt={220} src={item.imageUrl} alt={index}/>
                    <p>{item.title}</p>
                </div>
            ))}
        </>
    );
}

export default AdvantagesRender;