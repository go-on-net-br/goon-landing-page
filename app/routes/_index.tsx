/* eslint-disable import/no-unresolved */
import type { MetaFunction } from "@remix-run/node";
import Logo from "/go_on_logo.svg";
import FacebookLogo from "/facebook.svg";
import YoutubeLogo from "/youtube.svg";
import InstagramLogo from "/instagram.svg";
import LinkedinLogo from "/linkedin.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Go On -  Sua Nova Distribuidora de Áudio, Vídeo e Automação" },
    { name: "Go On", content: "Distribuidora de Áudio, Vídeo e Automação" },
    {
      property: "og:image",
      content: "https://goon.net.br/logo.png",
    },
    {
      property: "twitter:image",
      content: "https://goon.net.br/logo.png",
    },
  ];
};

export default function Index() {
  const socialNetworks = {
    facebook: {
      href: "https://www.facebook.com/goonautomacao",
      src: FacebookLogo,
    },
    youtube: {
      href: "https://www.youtube.com/channel/UCt-5PLtA0-4VWYrDajETigQ",
      src: YoutubeLogo,
    },
    instagram: {
      href: "https://www.instagram.com/goonbrasil_/",
      src: InstagramLogo,
    },
    linkedin: {
      href: "https://www.linkedin.com/company/goonbrasil/",
      src: LinkedinLogo,
    },
  };

  return (
    <main className="relative min-h-screen h-full before:absolute before:top-0 before:z-0 before:block before:min-h-screen before:h-full before:w-full before:bg-[url('/bg.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:blur-sm before:content-[''] after:absolute after:top-0 after:z-[1] after:h-full after:min-h-screen after:w-full after:bg-[#003ef9ad] after:content-['']">
      <div className="max-w-7xl  container relative z-[2] py-12 mx-auto blur-none">
        <header className="flex flex-col md:gap-3 gap-10 md:flex-row items-center justify-between px-6">
          <img src={Logo} alt="logotipo da GoOn" className="h-auto w-52" />
          <div className="flex gap-4 md:gap-8">
            {Object.entries(socialNetworks).map(([key, val]) => {
              return (
                <a href={val.href} target="_blank" rel="noreferrer" key={key}>
                  <img
                    src={val.src}
                    alt={`logotipo de ${key}`}
                    className=" h-7 w-7 md:h-9 md:w-9"
                  />
                </a>
              );
            })}
          </div>
        </header>
        <div className="w-full md:w-[740px] px-5 md:mx-auto mt-12 md:mt-20 ">
          <div className="relative  h-0 w-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/Qh8PsZ7dPN4?si=3RxGNc8ns_IE1Yfk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full"
            ></iframe>
          </div>
        </div>
        <div className=" w-full text-center text-2xl md:text-3xl uppercase text-white">
          <h1 className="mt-14">
            Sua <b>nova marca</b> de
            <br />
            áudio, vídeo e automação
          </h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="m&#97;&#105;lto&#58;cont%&#54;1t&#111;%&#52;0&#103;%6&#70;on&#46;net%2Ebr"
            className="mx-auto w-fit block"
          >
            <p className="mt-12 underline decoration-4 underline-offset-8 font-bold">
              Entre em contato
            </p>
          </a>
          <div className="w-full">
            <a
              target="_blank"
              rel="noreferrer"
              href="m&#97;&#105;lto&#58;cont%&#54;1t&#111;%&#52;0&#103;%6&#70;on&#46;net%2Ebr"
              className="mt-12 mx-auto w-fit block font-light lowercase"
            >
              con&#116;at&#111;&#64;goon&#46;net&#46;b&#114;
            </a>
          </div>

          <div className="mt-16 text-lg normal-case ">
            <a
              target="_blank"
              rel="noreferrer"
              className="font-light italic "
              href="mailto&#58;c%6Fm&#101;%72c&#105;&#97;l&#64;g%6Fo&#110;%&#50;E&#110;et&#46;br"
            >
              <b className="font-medium not-italic">Comercial </b>
              <br className="md:hidden" />
              &#99;o&#109;er&#99;&#105;&#97;&#108;&#64;goon&#46;ne&#116;&#46;br
            </a>
            <br />
            <a
              className="font-light italic"
              target="_blank"
              rel="noreferrer"
              href="&#109;&#97;ilto&#58;ma%72%6B%65&#116;&#105;ng&#64;g&#111;o&#110;&#46;n&#101;t&#46;%62&#37;7&#50;"
            >
              <br className="md:hidden" />
              <b className="font-medium not-italic">Marketing e Imprensa </b>
              <br className="md:hidden" />
              ma&#114;ketin&#103;&#64;goon&#46;&#110;et&#46;br
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
