const Bouquet = (props) => {
    return (  
        <>
      
         <div className="col-lg-4 col-md-6 mb-4 container d-flex justify-content-center align-items-center">
                <div className="card" >
                    <img src={props.bouquet.image} className="card-image" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.bouquet.nom}</h5>
                        <p className="card-text">{props.bouquet.descr}</p>
                        <div className="d-flex justify-content-start align-items-end">
                                <h5 className="col-md-6">prix: {props.bouquet.prix}</h5>
                                <button className="btn btn-color m-auto">Like</button>
                            </div>

                    </div>
                </div>       
            </div>
        
        </>
       
    );
}
 
export default Bouquet;
