/* eslint-disable import/no-unresolved */
import type { MetaFunction } from "@remix-run/node";
import Logo from "/go_on_logo.svg";
import FacebookLogo from "/facebook.svg";
import YoutubeLogo from "/youtube.svg";
import InstagramLogo from "/instagram.svg";
import LinkedinLogo from "/linkedin.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const socialNetworks = {
    facebook: { href: "", src: FacebookLogo },
    youtube: { href: "", src: YoutubeLogo },
    instagram: { href: "", src: InstagramLogo },
    linkedin: { href: "", src: LinkedinLogo },
  };

  return (
    <main className="relative h-full before:absolute before:top-0 before:z-0 before:block before:h-full before:w-full before:bg-[url('/bg.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:blur-sm before:content-['*'] after:absolute after:top-0 after:z-[1] after:h-full after:w-full after:bg-[#003ef9ad] after:content-['*']">
      <div className="max-w-7xl  container relative z-[2] py-36 mx-auto blur-none">
        <header className="flex items-center justify-between">
          <img src={Logo} alt="logotipo da GoOn" className="h-auto w-1/3" />
          <div className="flex gap-8">
            {Object.entries(socialNetworks).map(([key, val]) => {
              return (
                <a href={val.href} key={key}>
                  <img
                    src={val.src}
                    alt={`logotipo de ${key}`}
                    className="h-[63px] w-[63px]"
                  />
                </a>
              );
            })}
          </div>
        </header>
        <div className="relative mt-20 h-0 w-full pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/tjI6QEYCwN0?si=Oux2f79V_JpKdGj_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute left-0 top-0 h-full w-full"
          ></iframe>
        </div>
        <div className=" w-full text-center text-4xl uppercase text-white">
          <h1 className="mt-14 ">
            Sua <b>nova distribuidora</b> de áudio vídeo e automação
          </h1>
          <p className="mt-40">
            Entre em{" "}
            <b className="underline decoration-4 underline-offset-8">contato</b>
          </p>
          <div className="w-full">
            <a
              href="mailto:contato@goon.net.br"
              className="mt-20 mx-auto w-fit block font-light lowercase"
            >
              contato@goon.net.br
            </a>
          </div>

          <div className="mt-16 text-lg normal-case ">
            <p className="font-light italic ">
              <b className="font-medium not-italic">Comercial</b>{" "}
              comercial@goon.net.br
            </p>
            <p className="font-light italic">
              <b className="font-medium not-italic">Marketing e Imprensa</b>{" "}
              marketing@goon.net.br
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
