import React, { useEffect, useState } from "react"
import { FlatList, Dimensions, Image, Platform } from "react-native"
import { Container, View, Button, Text } from "native-base"
import styled from "styled-components/native"
import ImageColors from "react-native-image-colors"
import axios from "axios"
import _ from "lodash"
import POKEMONS from "../../fixtures/pokemons.json"

interface iPokemonItem {
  url: string | null
}

const PokemonItem = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  flex: 1;
  aspect-ratio: 1;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
`

const PokemonItemNameContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-vertical: 4px;
`

const PokemonItemName = styled(Text)`
  font-size: 19px;
  color: white;
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 1px;
`

const PokemonImage = styled(Image)`
  flex: 1;
`

const PokemonItemContainer: React.FC<iPokemonItem> = ({ url }) => {
  const [background, setBackground] = useState("#000")
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    if (_.isEmpty(url)) return

    axios.get(url).then(({ data }) => setPokemon(data))
  }, [url])

  useEffect(() => {
    if (_.isNull(pokemon)) return

    ImageColors.getColors(pokemon.sprites.front_default, {
      fallback: "#000",
      pixelSpacing: 5,
      quality: "low",
    }).then((data: any) => {
      const bg = Platform.select({
        ios: data.background,
        android: data.dominant,
      })
      setBackground(bg || "#000")
    })
  }, [pokemon])

  return (
    <PokemonItem color={background}>
      {_.isNull(pokemon) === false && (
        <>
          <PokemonImage
            source={{
              uri: pokemon.sprites.front_default,
            }}
            style={{ flex: 1 }}
          />
          <PokemonItemNameContainer>
            <PokemonItemName>{pokemon.name}</PokemonItemName>
          </PokemonItemNameContainer>
        </>
      )}
    </PokemonItem>
  )
}

const Pokedex: React.FC = () => {
  const renderItem = ({ item }) => {
    return <PokemonItemContainer url={item.url} />
  }

  return (
    // <BoxContainer>
    <Container>
      <FlatList
        numColumns={2}
        data={POKEMONS.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        //   extraData={selectedId}
      />
    </Container>
    // </BoxContainer>
  )
}

export default Pokedex
