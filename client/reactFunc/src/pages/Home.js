import Slider from "../component/slider";
//import { state } from "../data/state";
import Bouquets from "./Bouquets";
export default function Home(props){
    const bouquetsLiked = props.bouquets.filter(bouquet => bouquet.like===true);
    return(
        <>
        <Slider/>
        
        <Bouquets titre="Nos Bouquets Populaires" bouquets={bouquetsLiked}/>
        
        </>
    );

}