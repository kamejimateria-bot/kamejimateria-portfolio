import { useState } from "react";
import { createPortal } from "react-dom";

function formatDetail(text) {
  const blocks = text.split(/(?=[■●])/); // ■か●の直前で分割

  return blocks.map((block, i) => {
    const symbol = block[0]; // ■ or ●
    const content = block.slice(1);

    const [title, ...rest] = content.split("\n");
    const type = symbol === "■" ? "main" : "sub";

    return (
      <div key={i}>
        <b className={`heading heading-${type}`}>{title}</b>
        <p style={{ whiteSpace: "pre-line" }}>{rest.join("\n")}</p>
      </div>
    );
  });
}

function Modal({ work, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // アニメーションが終わったら実際に閉じる
    }, 300); // CSSのfadeOut時間と同じ
  };

  if (!work) return null;

  return createPortal(
    <div
      className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`}
      onClick={handleClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose}>close</button>
        <h2>
          {work.title}
          <small>{work.title_caption}</small>
        </h2>

        <figure>
          <img src={work.image} alt={work.title} loading="lazy" />
        </figure>

        {/* <div className="desc">{formatDetail(work.detail)}</div> */}
      </div>
    </div>,
    document.body, // ← body直下にレンダリング
  );
}

export default Modal;
