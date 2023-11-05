import Bouquet from "../component/bouquet";
export default function Bouquets(props) {
  return (
    <>
      <div className="container ">
        <div className="row">
          {props.bouquets.map((bouquet) => (
            <Bouquet bouquet={bouquet} />
          ))}
        </div>
      </div>
    </>
  );
}
