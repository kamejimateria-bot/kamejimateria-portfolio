import { useState, useEffect, useRef } from "react";
import WorkCard from "../components/WorkCard";
import Modal from "../components/Modal";
import { works } from "../data/works";

// 画像まとめ取得
const images = import.meta.glob("../assets/works/*.webp", { eager: true });
const thumbs = import.meta.glob("../assets/thum/*.webp", { eager: true });

// id → 画像マッピング関数
const getImage = (id, type = "full") => {
  const base = `works_${id}.webp`;

  const key =
    type === "thumb" ? `../assets/thum/${base}` : `../assets/works/${base}`;

  const target = type === "thumb" ? thumbs : images;
  const file = target[key];

  return file?.default || file || "";
};

function Works() {
  const [selectedWork, setSelectedWork] = useState(null);

  // 👇 永続化（これ重要）
  const preloaded = useRef(new Set());

  const preloadImage = (src) => {
    if (!src || preloaded.current.has(src)) return;

    const img = new Image();
    img.src = src;

    preloaded.current.add(src);
  };

  // 👇 ページ読み込み後に軽く先読み（5件だけ）
  useEffect(() => {
    works.slice(0, 18).forEach((work) => {
      preloadImage(getImage(work.id, "full"));
    });
  }, []);

  return (
    <div className="works">
      <h2>Works</h2>

      <div className="works-grid">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            title_caption={work.title_caption}
            image={getImage(work.id, "thumb")}
            onMouseEnter={() => preloadImage(getImage(work.id, "full"))}
            onTouchStart={() => preloadImage(getImage(work.id, "full"))}
            onClick={() =>
              setSelectedWork({
                ...work,
                image: getImage(work.id, "full"),
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
