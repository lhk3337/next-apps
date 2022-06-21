import Animation from "components/home/animation";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Animation />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-2xl lg:text-3xl text-2xl mb-4 font-medium text-gray-900">
            안녕하세요.
            <br className="lg:inline-block md:inline-block sm:inline-block" />
            Front-End를 꿈꾸고 있는 holim입니다.
            <br className="lg:inline-block md:inline-block sm:inline-block" />
            오늘도 빡코딩!
          </h1>
          <p className="mb-8 leading-relaxed">
            잠, 별에도 이름과 벌써 가을로 소녀들의 이름자 거외다. 하나에 슬퍼하는 이국 강아지, 지나고 언덕 이름과, 없이
            계십니다. 했던 별 경, 보고, 라이너 어머님, 자랑처럼 마디씩 듯합니다. 위에 너무나 벌써 거외다. 아직 보고,
            무덤 까닭입니다. 경, 걱정도 별 별들을 벌써 토끼, 거외다. 이 다 이름을 있습니다. 보고, 릴케 그리워 어머님, 별
            있습니다. 어머님, 남은 애기 하나에 있습니다. 그리고 위에도 지나고 나의 다 별 봅니다. 벌레는 헤일 오면
            있습니다.
          </p>
          <div className="flex justify-center">
            <Link href="/projects">
              <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
