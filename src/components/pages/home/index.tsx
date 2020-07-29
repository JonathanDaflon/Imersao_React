import React from 'react';
import Menu from '../../menu'
import { BannerMain } from '../../bannerMain'
import { Carousel } from '../../carousel'
import { Footer } from '../../footer'
import dadosIniciais from '../../../data/dados_iniciais.json'


const Home: React.FC = () => {

  console.log(dadosIniciais)

  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"É realmente tudo MUITO legal e esse vídeo é um baita tutorial onde programo a base do backend do nosso jogo multiplayer e começo a trocar informações em tempo-real com o frontend."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
