export type Profile = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  accessToken: string;
  refreshToken: string;
  profile_image_url: string;
};

export const TWITCH_CLIENT_ID = 'f6lg2ltfjh8y5d3luc5ptvz01mvrmd';
export const TWITCH_SECRET = 'lx8jklfjhsls40utqbvsa3cv1i2bvl';
export const SESSION_SECRET = '<SOME SECRET HERE>';
export const CALLBACK_URL = 'http://localhost:3333/auth/twitch/callback';
