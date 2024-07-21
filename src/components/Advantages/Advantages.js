import './advantages.module.scss';
import AdvantagesRender from '../../utils/AdvantagesRender';

function Advantages() {
    return (
        <div className='d-flex flex-column align-center'>
        
            <div className='title d-flex flex-column align-center'>
                <h1>Led by Transparency</h1>
            </div>
            <div className='advantages d-flex justify-around'>
                <AdvantagesRender />
            </div>
            <button className='shopNow'>Shop now</button>
        </div>
    );
}

export default Advantages;