import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import { VideoCard } from './components/videoCard';
import Slider, { SliderItem } from './components/slider'

interface Props {
  ignoreFirstVideo?: boolean
  category: Category
}

interface Category {
  titulo: string
  cor: string
  link?: string
  linkExtra?: LinkExtra
  videos: Video[]
}

interface Video {
  titulo: string
  url: string
}

interface LinkExtra {
  text: string
  url: string
}

export const Carousel: React.FC<Props> = ({ ignoreFirstVideo, category }) => {

  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.linkExtra;
  const videos = category.videos;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink &&
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}