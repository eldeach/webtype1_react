// ======================================================================================== [Import Libaray] Material Icon
import ProductCard from './WebProductCard/WebProductCard';
import cardContent from './WebProductCard/cardContent';

// ======================================================================================== [Import Component] CSS
import './FirstImpression.css';

function FirstImpression(){
    return(
        <div className='first-impression'>
            <div className='first-impression-tob-box'></div>
            <div className='first-impression-card-list'>
                {
                    Object.values(cardContent).map((oneObj,i) =>
                    <ProductCard icon={oneObj.icon} title={oneObj.title} img={oneObj.img} description={oneObj.description} navUrl={oneObj.navUrl}/>
                    )
                }
            </div>
        </div>
    )

}

export default FirstImpression;