import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Loader from '../styles/Loader';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
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

const GridItem = styled(Link)`
  text-decoration: none;
`;

const Card = styled.div`
  background-color: #282c34;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s;
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
  color: #fff;
  text-align: center;
  margin-top: 0.5rem;
`;



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

      <Grid>
        {characters
          .filter((character) => character.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((character) => (
            <GridItem key={character.id} to={`/character/${character.id}`}>
              <Card>
                <CardImage
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <CardText>{character.name}</CardText>
              </Card>
            </GridItem>
          ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
