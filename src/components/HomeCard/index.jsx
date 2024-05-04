import { FaHeart } from "react-icons/fa";
import chocalho from "../../assets/images/chocalho.png"
import "./styles.scss"


const HomeCard  = () =>{
    
    return(
        <>
        
            <div className="home-card">
                <FaHeart className="icon" />
                <img src={chocalho} alt="Imagem do produto" />
                <div className="desc-product">
                    <p>Maraca Chocalho Artesanal</p>
                    <span>R$ 30,00</span>
                    <button>Saiba mais!</button>
                </div>
            </div>

        </>
    )
}


export default HomeCard