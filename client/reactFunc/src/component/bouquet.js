import { useState,useEffect } from "react";
const Bouquet = (props) => {
  
    const [B, setB] = useState(props.bouquet);
   
    useEffect(() => {
      // This effect runs when the bouquet data changes
      console.log("Bouquet data changed:", B.like);
      // Add logic here to handle the changes in the Bouquet component
    }, [B]);

    const handleLike = async () => {
      console.log("handleLike called");
      try {
        const response = await fetch(`http://localhost:5000/api/bouquets/like/${props.bouquet.id}`, {
          method: 'PUT',
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          setB(data.bouquet)

        } else {
          console.error('Échec de la mise à jour du statut "like"');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
      }
    };
    


  return (
    <>
     
        <div className="card">
          <img src={props.bouquet.image} className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.bouquet.nom}</h5>
            <p className="card-text">{props.bouquet.descr}</p>
            <div className="d-flex justify-content-end align-items-end">
              <h5 className="col-md-6">prix: {props.bouquet.prix}</h5>
              <button
                className={B.like ? "btn btn-liked m-auto" : "btn btn-color m-auto"}
                onClick={handleLike} 
              >
               {B.like ? "Liked" : "Like"}
              </button>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Bouquet;
