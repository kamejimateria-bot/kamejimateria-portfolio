import { useState } from "react";
import WorkCard from "../components/WorkCard";
import Modal from "../components/Modal";
import { works } from "../data/works";

// 画像まとめ取得
const images = import.meta.glob("../assets/works/*.webp", { eager: true });
const thumbs = import.meta.glob("../assets/thum/*.webp", { eager: true });

// id → 画像マッピング関数
const getImage = (id, type = "full") => {
  const base = `works_${id}.webp`;

  if (type === "thumb") {
    return thumbs[`../assets/thum/${base}`]?.default;
  }
  return images[`../assets/works/${base}`]?.default;
};

function Works() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="works">
      <h2>Works</h2>

      <div className="works-grid">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            title_caption={work.title_caption}
            image={getImage(work.id, "thumb")} // 👈 サムネ
            onClick={() =>
              setSelectedWork({
                ...work,
                image: getImage(work.id, "full"), // 👈 フル画像
              })
            }
          />
        ))}
      </div>

      {selectedWork && (
        <Modal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </div>
  );
}

export default Works;
