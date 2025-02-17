import './slogan.module.scss';

function Slogan(){
    return(
        <div className='slogan d-flex flex-column align-center justify-center'>
            <h1>Our smallest choices have the potential for the biggest impact. Let’s make good ones together.</h1>
            <button className='Sustain'>Sustainability <svg width="29" height="14" viewBox="0 0 29 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4286 0C22.4286 3.5 28.1428 5.25 28.1428 7C28.1428 8.75 22.4286 9.91667 22.4286 14" stroke="#F5EEE6"/>
<path d="M28.1429 7H0.714279" stroke="#F5EEE6"/>
</svg>
</button>
        </div>
    );
}


export default Slogan;