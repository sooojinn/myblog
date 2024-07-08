import Image from "next/image";
import styles from "@/styles/About.module.css";

const profileImgPath = "/profile_img.jpg";

export default function About() {
  return (
    <div className={styles.section}>
      <div className={styles.profileDiv}>
        <div className={styles.profileImgDiv}>
          <Image
            src={profileImgPath}
            alt="프로필 사진"
            fill
            className={styles.profileImg}
          />
        </div>
        <div className={styles.profileInfo}>
          <p>안녕하세요! 프론트엔드 개발자 박수진입니다.</p>
          <p>제 블로그에 방문해주셔서 감사합니다.</p>
          <p>스스로 학습한 기록을 공유하기 위해 만들었습니다.</p>
          <p>부족한 부분 열심히 채워나가겠습니다. 🫡</p>
        </div>
      </div>
    </div>
  );
}
