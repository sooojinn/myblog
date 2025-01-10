import Image from "next/image";

const profileImgPath = "/profile_img.jpg";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-[7vh] px-[3vw] sm:flex-row">
      <div className="relative w-full max-w-[200px] sm:max-w-[230px] aspect-square mb-[3vh] sm:mb-0 sm:mr-[5vw]">
        <Image
          src={profileImgPath}
          alt="프로필 사진"
          fill
          className="object-cover object-[25%] rounded-full"
        />
      </div>
      <div className="sm:min-w-[330px] text-center leading-[1.7] sm:text-left">
        <p>
          안녕하세요! 프론트엔드 개발자 박수진입니다.
          <br />
          제 블로그에 방문해주셔서 감사합니다.
          <br />
          스스로 학습한 기록을 공유하기 위해 만들었습니다.
          <br />
          부족한 부분 열심히 채워나가겠습니다. 🫡
        </p>
      </div>
    </div>
  );
}
