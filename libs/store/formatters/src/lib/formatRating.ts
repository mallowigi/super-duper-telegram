export const formatRating = (rating: number) =>
  new Intl.NumberFormat('en-US', { maximumSignificantDigits: 2 }).format(
    rating * 10
  );
