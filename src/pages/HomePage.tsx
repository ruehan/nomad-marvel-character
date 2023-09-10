import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Loader from '../styles/Loader';
import { motion } from 'framer-motion'


const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${(props) => props.theme.background};
  z-index: 3;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const GridContainer = motion(Grid)

const GridItem = styled(Link)`
  text-decoration: none;
`;

const MotionStyled = motion(GridItem)

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s;
  border: ${(props) => props.theme.border};
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px; 
  border-radius: 8px;
  object-fit: cover;
`;

const CardText = styled.p`
  color: ${(props) => props.theme.text};;
  text-align: center;
  margin-top: 0.5rem;
`;

const TopButton = styled.button`
    position: fixed;
    bottom: 10%;
    right: 5%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    border: ${(props) => props.theme.border};
    cursor: pointer;
`



interface Thumbnail {
    path: string;
    extension: string;
}

interface Character {
    id: number;
    name: string;
    thumbnail: Thumbnail;
}

interface CharactersData {
    data: any;
    results: Character[];
  }

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // 모든 자식 애니메이션이 시작하기 전에 대기 시간
        staggerChildren: 0.2, // 각 자식 애니메이션 사이의 시간 간격
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]); 
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`);
      const data: CharactersData = await response.json();
      setCharacters(data.data.results);
    };
    fetchCharacters();
  }, []);

  if (characters.length === 0) {
    return <Loader />;
  }

  return (
        <Container>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a character..."
      />

      <GridContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {characters
          .filter((character) => character.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((character) => (
            <MotionStyled
                variants={itemVariants}
                key={character.id} to={`/character/${character.id}`}>
              <Card>
                <CardImage
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <CardText>{character.name}</CardText>
              </Card>
            </MotionStyled>
          ))}
      </GridContainer>
      <TopButton onClick={() => window.scrollTo({top:0, behavior: "smooth"})}>Top</TopButton>
    </Container>
  );
}

export default HomePage;
