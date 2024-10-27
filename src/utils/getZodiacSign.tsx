const zodiacSigns = [
  {
    name: 'Aquarius',
    start: { month: 1, day: 20 },
    end: { month: 2, day: 18 },
    emoji: '♒',
    description: `Innovative and independent, Aquarians value freedom and 
                      often fight for social causes. Quirky and eccentric, 
                      they think outside the box.`,
  },
  {
    name: 'Pisces',
    start: { month: 2, day: 19 },
    end: { month: 3, day: 20 },
    emoji: '♓',
    description: `Compassionate and sensitive, Pisceans are natural healers 
                      and artistic souls, deeply empathetic but prone to escapism.`,
  },
  {
    name: 'Aries',
    start: { month: 3, day: 21 },
    end: { month: 4, day: 19 },
    emoji: '♈',
    description: `Bold and adventurous, Aries are natural leaders who 
                      thrive on challenges but can be impulsive and impatient.`,
  },
  {
    name: 'Taurus',
    start: { month: 4, day: 20 },
    end: { month: 5, day: 20 },
    emoji: '♉',
    description: `Stable and reliable, Taureans appreciate beauty and 
                      comfort, but their stubbornness may hinder flexibility.`,
  },
  {
    name: 'Gemini',
    start: { month: 5, day: 21 },
    end: { month: 6, day: 20 },
    emoji: '♊',
    description: `Adaptable and versatile, Geminis are curious and sociable, 
                      but their dual nature can lead to inconsistency.`,
  },
  {
    name: 'Cancer',
    start: { month: 6, day: 21 },
    end: { month: 7, day: 22 },
    emoji: '♋',
    description: `Nurturing and protective, Cancers are sensitive souls 
                      who prioritize loved ones, yet must guard their emotions.`,
  },
  {
    name: 'Leo',
    start: { month: 7, day: 23 },
    end: { month: 8, day: 22 },
    emoji: '♌',
    description: `Charismatic and creative, Leos seek admiration and 
                      appreciation but should balance confidence with humility.`,
  },
  {
    name: 'Virgo',
    start: { month: 8, day: 23 },
    end: { month: 9, day: 22 },
    emoji: '♍',
    description: `Analytical and detail-oriented, Virgos are reliable but 
                      must embrace imperfection to avoid self-doubt.`,
  },
  {
    name: 'Libra',
    start: { month: 9, day: 23 },
    end: { month: 10, day: 22 },
    emoji: '♎',
    description: `Charming and diplomatic, Libras value harmony but 
                      can struggle with indecisiveness.`,
  },
  {
    name: 'Scorpio',
    start: { month: 10, day: 23 },
    end: { month: 11, day: 21 },
    emoji: '♏',
    description: `Intense and passionate, Scorpios feel deeply and 
                      must embrace vulnerability to connect with others.`,
  },
  {
    name: 'Sagittarius',
    start: { month: 11, day: 22 },
    end: { month: 12, day: 21 },
    emoji: '♐',
    description: `Adventurous and optimistic, Sagittarians seek knowledge 
                      but must balance freedom with responsibility.`,
  },
  {
    name: 'Capricorn',
    start: { month: 12, day: 22 },
    end: { month: 1, day: 19 },
    emoji: '♑',
    description: `Ambitious and disciplined, Capricorns focus on 
                      building stability but should embrace joy and spontaneity.`,
  },
];

export const getZodiacSign = ({ day, month }: { day: number; month: number }) => {
  const sign = zodiacSigns.find(
    ({ start, end }) =>
      (month === start.month && day >= start.day) || (month === end.month && day <= end.day),
  );

  if (!sign?.name) throw new Error('Invalid date');

  return { name: sign.name, emoji: sign.emoji, description: sign.description };
};
