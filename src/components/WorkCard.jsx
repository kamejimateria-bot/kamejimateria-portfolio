import { useState } from "react";

function WorkCard({ title, title_caption, description, image, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="work-card" onClick={onClick}>
      <img
        src={image}
        onLoad={() => setLoaded(true)}
        className={`fade-image ${loaded ? "loaded" : ""}`}
      />
      <div className="work-card__body">
        <h3 className="work-card__title">{title}</h3>
        <small className="work-card__caption">{title_caption}</small>

        {/* <div className="work-card__desc">{title_caption, description}</div> */}

        <button
          className="work-card__button"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          詳細を見る
        </button>
      </div>
    </div>
  );
}

export default WorkCard;
