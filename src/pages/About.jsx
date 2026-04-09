function About() {
  return (
    <div className="about">
      <h2>About</h2>

      <div className="name">
        <span className="brand">kamejimateria</span>
        <span className="realname">Yoshitaka Kamesaka</span>
      </div>

      <div className="prof">
        <h3>Profile</h3>
        <p>
          グラフィックデザイナーとしてキャリアをスタートし、
          <br />
          組版、Web・UIデザイン、映像制作からインタラクティブコンテンツまで、
          <br />
          20年にわたり「情報を整理し、正しく届ける」ための多彩な表現手法を磨いてきました。
          <br />
          現在は、そのデザインの知見をコードへと直結させるデザインエンジニアとして、
          <br />
          HTML / CSS / JavaScript / PHP を用いたUI構築を中心に活動しています。
          <br />
          単なる実装に留まらず、複雑な既存環境の解析・改善・運用や、
          <br />
          ユーザー体験を損なわないための柔軟な課題解決を得意としています。
          <br />
          AIを活用した開発フローを取り入れ、設計から実装までの試行回数と精度を高めています。
          <br />
          今後は、デザインとエンジニアリングの境界を越える専門性をさらに深め、
          <br />
          Reactなどのモダンな技術スタックを武器に、
          <br />
          意図が細部まで宿る、より質の高いWeb体験の創出に貢献したいと考えています。
        </p>

        <div className="strengths">
          <h3>Strengths</h3>
          <dl>
            <dd>
              ・デザインと連携し、UI設計からフロントエンド実装まで一貫して対応
            </dd>
            <dd>
              ・既存環境における改修・運用・改善を通じて、安定したサイト運用に貢献
            </dd>
            <dd>
              ・トラブルシュートや関係者との調整を行い、課題解決と継続的な改善を実施
            </dd>
            <dd>
              ・UI設計および画面構築を基点とした、デザイナーおよびエンジニアとの仕様調整・実装ディレクション
            </dd>
          </dl>
        </div>

        <div className="workhistory">
          <h3>Work history</h3>
          <p>
            グラフィックデザイナーとしてキャリアを開始
            <br />
            編集・Web・UI・映像など複数媒体の制作を経験
            <br />
            事業会社にてフロントエンドエンジニアとして従事。
            <br />
            UI設計から実装まで一貫して対応し、ユーザー体験の改善に取り組む。
          </p>
        </div>

        <div className="Skills">
          <h3>Skills</h3>
          <ul>
            <li>
              <b>Graphic / Layout：</b>
              Photoshop, Illustrator, InDesign, Affinity
              <br />
              （印刷からWebまで一貫したビジュアル構築）
            </li>

            <li>
              <b>Motion / Interactive：</b>
              Premiere, After Effects, Animate, Dreamweaver
              <br />
              （動的なUIとインタラクション設計）
            </li>

            <li>
              <b>Frontend & Server-side：</b>
              HTML / CSS / JavaScript / React / PHP
            </li>
            
            <li>
              <b>Development：</b>
              Git / GitHub<small>（バージョン管理・運用）</small>
            </li>

            <li>
              <b>UI / UX Design</b>
              UI設計 / UX設計 / 情報設計 / レイアウト設計 / レスポンシブ設計
            </li>
            
            <li>
              <b>Other</b>
              ・CSVデータ管理 / バックエンド連携によるデータ表示・制御
              <br />
              ・CDN（Akamai）環境下でのキャッシュ制御・更新対応
              <br />
              ・動画コンテンツの埋め込み・再生制御（YouTube など）
              <br />
              ・既存環境における運用改善・保守対応
            </li>

            <li>
              <b>Current Focus：</b>
              React, Figma <br />
              （UI設計とフロントエンド実装の統合を推進）
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default About;
