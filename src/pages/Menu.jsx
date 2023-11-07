import ColorSchemesExample from "./ColorSchemesExample"
import Carousel from './carousel'
import Card1 from './card'
//import Card2 from './card2'
import Footer from './Footer'
//import Card3 from "./card3"

function Menu (){
    return(
        <div>

            <Carousel/><br/>
            <div className="row">
                <Card1/>
            </div>
        </div>
    )
}

export default Menu