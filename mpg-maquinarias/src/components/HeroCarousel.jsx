function HeroCarousel() {
  return (
    <div id="heroCarousel" className="carousel slide mt-3" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/multimedia/maquinas/JLG450AJ" className="d-block w-100" alt="Alzahombre tipo tijera" />
        </div>
        <div className="carousel-item">
          <img src="/multimedia/maquinas/JLG1930ES" className="d-block w-100" alt="Alzahombre brazo articulado" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default HeroCarousel;
