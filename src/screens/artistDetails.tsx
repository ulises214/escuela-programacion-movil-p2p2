import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ArtistBox } from '../components/artistBox';
import { Artist } from '../models/artist';

export const ArtistDetailView: FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <View style={styles.container}>
      <ArtistBox artist={artist} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
  },
});
