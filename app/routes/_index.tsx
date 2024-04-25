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
    <main className="relative h-full before:absolute before:top-0 before:z-0 before:block before:h-full before:w-full before:bg-[url('/bg.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:blur-sm before:content-[''] after:absolute after:top-0 after:z-[1] after:h-full after:w-full after:bg-[#003ef9ad] after:content-['']">
      <div className="max-w-7xl  container relative z-[2] py-12 mx-auto blur-none">
        <header className="flex items-center justify-between px-6">
          <img src={Logo} alt="logotipo da GoOn" className="h-auto w-52" />
          <div className="flex gap-8">
            {Object.entries(socialNetworks).map(([key, val]) => {
              return (
                <a href={val.href} key={key}>
                  <img
                    src={val.src}
                    alt={`logotipo de ${key}`}
                    className="h-[36px] w-[36px]"
                  />
                </a>
              );
            })}
          </div>
        </header>
        <div className="w-4/6 mx-auto mt-20 ">
          <div className="relative  h-0 w-full pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/tjI6QEYCwN0?si=Oux2f79V_JpKdGj_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full"
            ></iframe>
          </div>
        </div>
        <div className=" w-full text-center text-3xl uppercase text-white">
          <h1 className="mt-14">
            Sua <b>nova distribuidora</b> de
            <br />
            áudio, vídeo e automação
          </h1>
          <p className="mt-12">
            Entre em{" "}
            <b className="underline decoration-4 underline-offset-8">contato</b>
          </p>
          <div className="w-full">
            <a
              href="m&#97;&#105;lto&#58;cont%&#54;1t&#111;%&#52;0&#103;%6&#70;on&#46;net%2Ebr"
              className="mt-20 mx-auto w-fit block font-light lowercase"
            >
              con&#116;at&#111;&#64;goon&#46;net&#46;b&#114;
            </a>
          </div>

          <div className="mt-16 text-lg normal-case ">
            <a
              className="font-light italic "
              href="mailto&#58;c%6Fm&#101;%72c&#105;&#97;l&#64;g%6Fo&#110;%&#50;E&#110;et&#46;br"
            >
              <b className="font-medium not-italic">Comercial</b>{" "}
              &#99;o&#109;er&#99;&#105;&#97;&#108;&#64;goon&#46;ne&#116;&#46;br
            </a>
            <br />
            <a
              className="font-light italic"
              href="&#109;&#97;ilto&#58;ma%72%6B%65&#116;&#105;ng&#64;g&#111;o&#110;&#46;n&#101;t&#46;%62&#37;7&#50;"
            >
              <b className="font-medium not-italic">Marketing e Imprensa</b>
              ma&#114;ketin&#103;&#64;goon&#46;&#110;et&#46;br
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
