import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../styles/Loader';
import {motion} from 'framer-motion'

const Container = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  background-color: ${(props) => props.theme.background};
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.body};
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  margin-right: 2rem; // 카드와 섹션 사이의 간격
  max-width: 600px;
  color: ${(props) => props.theme.text};
`;

const Section = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 65vh;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;

`;



interface Thumbnail {
    path: string;
    extension: string;
  }
  
  interface Items {
    name: string;
  }
  
  interface Series {
    items: Items[];
  }
  
  interface Comics {
    items: Items[];
  }
  
  interface Stories {
    items: Items[];
  }

  interface Events {
    items: Items[];
  }
  
  interface CharacterDetail {
    id: number;
    name: string;
    description: string;
    thumbnail: Thumbnail;
    series: Series;
    comics: Comics;
    stories: Stories;
    events: Events;
  }

  function CharacterDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [characterDetail, setCharacterDetail] = useState<CharacterDetail | null>(null);
  
    useEffect(() => {
      const fetchCharacterDetail = async () => {
        const response = await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`);
        const data = await response.json();
        setCharacterDetail(data.data.results[0]);
      };
      fetchCharacterDetail();
    }, [id]);
  
    if (!characterDetail) {
      return <Loader />;
    }
  
    return (
        <Container
        initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6 }}>
        <Card>
          <Image src={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`} alt={characterDetail.name} />
          <h1>{characterDetail.name}</h1>
          <p>{characterDetail.description || 'No description available'}</p>
        </Card>
  
        <Section>
            <div>
            <h2>Series</h2>
            {characterDetail.series.items.slice(0, 5).map((serie, index) => (
                <div key={index}>{serie.name}</div>
            ))}
            </div>
    
            <div>
            <h2>Comics</h2>
            {characterDetail.comics.items.slice(0, 5).map((comic, index) => (
                <div key={index}>{comic.name}</div>
            ))}
            </div>
    
            <div>
            <h2>Stories</h2>
            {characterDetail.stories.items.slice(0, 5).map((story, index) => (
                <div key={index}>{story.name}</div>
            ))}
            </div>

            <div>
            <h2>Events</h2>
            {characterDetail.events.items.slice(0, 5).map((event, index) => (
                <div key={index}>{event.name}</div>
            ))}
            </div>
        </Section>
      </Container>
    );
  }

export default CharacterDetailPage;
