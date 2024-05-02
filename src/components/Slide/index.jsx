
import './styles.scss';
import promoImage from '../../assets/images/promoimage.jpg'


const  Slide = ()=>{
        return (

            <>
                   <section className="slidePromos">

                    <div className="promo-card">
                        <img src={promoImage} alt="Promo Card" />
                    </div>

                     <div className="promo-card">
                        <img src={promoImage} alt="Promo Card" />
                    </div>

                    
                     <div className="promo-card">
                       <img src={promoImage} alt="Promo Card" />
                    </div>


                </section>
             

            </>
        )
}


export default Slide