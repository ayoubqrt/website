import { styled } from "../styled-system/jsx";
import { Github, Linkedin } from "./svgs";

function App() {
  return (
    <styled.div>
      <styled.div
        width={"100vw"}
        height={"100vh"}
        bgImage={
          "url(https://c7.alamy.com/compfr/bb150k/mur-de-beau-bleu-blanc-jaune-ocre-et-de-couleur-noir-mosaique-marocaine-zellige-carreaux-dans-fes-maroc-bb150k.jpg)"
        }
        // bgImage={"url(https://c7.alamy.com/compfr/f8ae0x/zellige-marocain-libre-f8ae0x.jpg)"}
        // bgImage={
        //   "url(https://c7.alamy.com/compfr/bb150k/mur-de-beau-bleu-blanc-jaune-ocre-et-de-couleur-noir-mosaique-marocaine-zellige-carreaux-dans-fes-maroc-bb150k.jpg)"
        // }
        // bgImage={
        //   "url(https://scontent-cdg4-2.xx.fbcdn.net/v/t1.6435-9/76650766_528700117694635_7910061146151845888_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=Gib5FtjRov8AX-c0Bhd&_nc_ht=scontent-cdg4-2.xx&oh=00_AfASbQYyhJqUnA3t5lLdgcHDIkZ-wvMQqbm-i-hFkCVzXg&oe=64CF2A7A)"
        // }
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        opacity={0.5}
        position={"absolute"}
        // bgImage:
        //   "",
      >
        <styled.a
          bgColor={"black"}
          m="5px"
          color="white"
          href="https://www.alamyimages.fr/photo-image-mur-de-beau-bleu-blanc-jaune-ocre-et-de-couleur-noir-mosaique-marocaine-zellige-carreaux-dans-fes-maroc-23997475.html?imageid=A81BBCB4-64ED-4BBD-ACCA-13FD7955C932&p=74589&pn=1&searchId=add9cb3488589333cde2e8b2ab335342&searchtype=0"
          target="_blank"
        >
          Illustration from Walton creative
        </styled.a>
      </styled.div>
      <styled.main
        color="orange.500"
        textAlign={"center"}
        display="flex"
        width={"100vw"}
        height={"100vh"}
        gap={"100px"}
        flexDir={"column"}
        // backdropFilter="blur(2px)"
        // backdropFilter="brightness(100%);"
      >
        <styled.div
          display="flex"
          height={"100%"}
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <styled.p backdropFilter="blur(2px)" fontSize={"8xl"} fontFamily={"arabic"}>
            ايوب مستقيم
          </styled.p>
          <styled.p backdropFilter="blur(2px)" fontSize={"8xl"} fontFamily={"idulFitri"}>
            ayoub moustakim
          </styled.p>
        </styled.div>
        <styled.div
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          padding={"20px"}
          flexDir="column"
        >
          <styled.p backdropFilter="blur(2px)" fontSize={"7xl"} fontFamily={"scopeOne"}>
            Typescript web developer
          </styled.p>
          <styled.div backdropFilter="blur(2px)" display="flex" flexDir="row" gap="30px">
            <a href="https://github.com/ayoubqrt" target="_blank">
              <Github width="3rem" height="3rem" />
            </a>
            <a href="https://www.linkedin.com/in/ayoub-moustakim/" target="_blank">
              <Linkedin width="3rem" height="3rem" />
            </a>
          </styled.div>
        </styled.div>
      </styled.main>

      {/* others slides */}
      <styled.div
        width={"100vw"}
        height={"100vh"}
        bgSize={"cover"}
        bgImage={
          "url(https://scontent-cdg4-2.xx.fbcdn.net/v/t1.6435-9/76650766_528700117694635_7910061146151845888_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=Gib5FtjRov8AX-c0Bhd&_nc_ht=scontent-cdg4-2.xx&oh=00_AfASbQYyhJqUnA3t5lLdgcHDIkZ-wvMQqbm-i-hFkCVzXg&oe=64CF2A7A)"
        }
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        opacity={0.5}
        zIndex={-1}
      >
        <styled.a
          bgColor={"black"}
          m="5px"
          color="white"
          href="https://m.facebook.com/skanderous/photos/si-vous-%C3%AAtes-fan-de-zelijerie-suivez-zelij-cest-mon-compte-enti%C3%A8rement-d%C3%A9di%C3%A9-au-/528700111027969/"
          target="_blank"
        >
          Illustration from Skanderous
        </styled.a>
      </styled.div>
      <styled.div
        width={"100vw"}
        height={"100vh"}
        bgColor="#E8EBE8"
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        opacity={1}
        zIndex={-1}
      ></styled.div>
    </styled.div>
  );
}

export default App;
