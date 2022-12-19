export default function Card(props) {
  return (
    <section className="card">
      <div className="card--img">
        <img src={props.coverImg}></img>
      </div>
      <div className="card--content">
        <div className="card--location">
          <img src="/marker.svg" width="40px"></img>
          <p>{props.location}</p>
          <a href={props.link} className="card--link">
            View on Google Maps
          </a>
        </div>
        <div className="card--description">
          <h2 className="mrgb-2">{props.title}</h2>
          <p className="mrgb-1">
            <span className="bold">
              {props.startDate} - {props.endDate}
            </span>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}
