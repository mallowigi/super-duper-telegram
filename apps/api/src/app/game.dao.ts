export type GameDao = {
  'id': number;
  'name': string;
  'released': string;
  'background_image': string;
  'rating': number;
  'rating_top': number;
  'ratings': [
    {
      'id': number;
      'title': string;
      'count': number;
      'percent': number;
    },
  ];
  'ratings_count': number;
  'reviews_text_count': number;
  'added': number;
  'metacritic': number;
  'playtime': number;
  'suggestions_count': number;
  'reviews_count': number;
  'saturated_color': string;
  'dominant_color': string;
  'platforms': [{
    'platform': {
      'id': number;
      'name': string;
      'image': string | null;
      'year_end': string | null;
      'year_start': string | null;
      'games_count': number;
      'image_background': number;
    };
    'released_at': string;
  },
  ];
  'short_screenshots': [
    {
      'id': number;
      'image': string;
    },
  ];
};
