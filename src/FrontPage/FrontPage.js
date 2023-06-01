import './FrontPage.css';
import FrontCard from './FrontCard/FrontCard';
import cardContent from './FrontCard/FrontCardContent';

function FrontPage(){
    return(
        <div className='front-page'>
            <div className='front-top-box'></div>
            <div className='front-card-list'>
                <FrontCard icon={cardContent.cdms.icon} title={cardContent.cdms.title} img={cardContent.cdms.img} description={cardContent.cdms.description} navUrl={cardContent.cdms.navUrl}/>
                <FrontCard icon={cardContent.vmp.icon} title={cardContent.vmp.title} img={cardContent.vmp.img} description={cardContent.vmp.description} navUrl={cardContent.vmp.navUrl}/>
                <FrontCard icon={cardContent.pqr.icon} title={cardContent.pqr.title} img={cardContent.pqr.img} description={cardContent.pqr.description} navUrl={cardContent.pqr.navUrl}/>  
            </div>
        </div>
    )

}

export default FrontPage;