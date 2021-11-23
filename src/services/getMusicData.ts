import { Artist } from '../models/artist';
import { COMMON_HEADERS } from './contants';

const URL =
  'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=fc082035d227214183cee27bf0a4d22a&format=json&limit=10';

const getMusicData = async (): Promise<Artist[]> => {
  const res = await fetch(URL, {
    headers: COMMON_HEADERS,
  });
  const data = await res.json();
  const artistListRaw = data.topartists.artist;
  return artistListRaw.map((artist: any) => {
    const { mbid: id, name, image: images } = artist;
    const image = images[0]['#text'];
    return new Artist(id, name, image);
  });
};

export { getMusicData };
