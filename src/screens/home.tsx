import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ArtistList } from '../components/artistsList';
import { Artist } from '../models/artist';
import { getMusicData } from '../services/getMusicData';

export const HomeView: FC = () => {
  const [artists, setArtists] = useState<Artist[] | null>(null);
  useEffect(() => {
    getMusicData().then((data) => setArtists(data));
  }, []);

  return (
    <View style={styles.container}>
      {artists && <ArtistList artists={artists} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
