import './styles.scss';
import { IoTicketSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";






const Benefits = () => {
    return (

        <>

            <ul className='benefits-infos'>
                <li className='infos'>    
                    <IoTicketSharp className='icon'></IoTicketSharp>
                    <p>
                        <b>10% de desconto</b> <br />
                        à vista!
                    </p>
                </li>
                <li className='infos'>
                    <FaWallet className='icon'></FaWallet>
                    <p>
                        Até <b>12x sem juros</b> <br />no cartão!
                    </p>
                </li>
                <li className='infos'>
                    <BiSolidCreditCardAlt className='icon'></BiSolidCreditCardAlt>
                    <p>
                        Pague com até <br /> <b>dois cartões</b>
                    </p>
                
                </li>
                <li className='infos'>
                <MdOutlinePublishedWithChanges className='icon'></MdOutlinePublishedWithChanges>
                    <p>
                       <b> Troca e devolução grátis</b><br /> em até 7 dias!
                    </p>
                </li>
            </ul>
        
        </>


    )
}


export default Benefits