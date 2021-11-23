import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { Artist } from '../models/artist';
import { ArtistBox } from './artistBox';

export const ArtistList: FC<{ artists: Artist[] }> = ({ artists }) => {
  const handlePress = (artist: Artist) => {
    Actions.artistDetail({ artist: artist });
  };
  const renderRow = (artist: Artist) => {
    return (
      <TouchableOpacity onPress={() => handlePress(artist)}>
        <ArtistBox artist={artist} />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={artists}
      renderItem={(artist) => renderRow(artist.item)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
