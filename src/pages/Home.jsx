import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const members = [
  { name: "Nguyễn Đăng Khoa", mssv: "23127393" },
  { name: "Đặng Nguyễn Thành Hiếu", mssv: "23127364" },
];

export default function Home() {
  return (
    <main className={styles.root}>
      <div className={styles.nav}>
        <div className={styles.brand}>
          <div className={styles.logo}>HK</div>
          <div className={styles.appname}>
            Todo List Assignment - React - GA04
          </div>
        </div>
        <nav className={styles.links}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/todo" className={styles.link}>
            Todo
          </Link>
        </nav>
      </div>

      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.heroLeft}>
            <h1 className={styles.title}>Todo App</h1>
            <div className={styles.actions}>
              <Link to="/todo" className={styles.cta}>
                Bắt đầu
              </Link>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.preview}>
              <div className={styles.previewHeader} />
              <ul className={styles.previewList}>
                <li className={styles.previewItem}>Lập kế hoạch hằng ngày</li>
                <li className={styles.previewItem}>Tổ chức công việc</li>
                <li className={styles.previewItem}>Chia nhỏ nhiệm vụ</li>
                <li className={styles.previewItem}>Hoàn thành từng bước</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.membersWrap}>
          <h3 className={styles.membersTitle}>Nhóm</h3>
          <div className={styles.membersGrid}>
            {members.map((m) => (
              <div key={m.mssv} className={styles.memberCard}>
                <div className={styles.avatar} aria-hidden>
                  {m.name.split(" ").slice(-1)[0][0]}
                </div>
                <div>
                  <div className={styles.memberName}>{m.name}</div>
                  <div className={styles.memberId}>MSSV: {m.mssv}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
