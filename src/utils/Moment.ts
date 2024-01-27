import moment from "moment";

const formatDate = (givenDate: string, format: string) => {
  return moment(givenDate).format(format);
};

const calculateAge = (givenDate: string) => moment().diff(givenDate, "years");

const getSigns = (givenDate: string): { zodiac: string; horoscope: string } => {
  const date = moment(givenDate, "YYYY-MM-DD");
  const month = date.month() + 1; // Months in Moment.js are 0-indexed, so we add 1
  const day = date.date();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return { zodiac: "Aries", horoscope: "Ram" };
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return { zodiac: "Taurus", horoscope: "Bull" };
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return { zodiac: "Gemini", horoscope: "Twins" };
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return { zodiac: "Cancer", horoscope: "Crab" };
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return { zodiac: "Leo", horoscope: "Lion" };
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return { zodiac: "Virgo", horoscope: "Maiden" };
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return { zodiac: "Libra", horoscope: "Scales" };
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return { zodiac: "Scorpius", horoscope: "Scorpion" };
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return { zodiac: "Sagittarius", horoscope: "Archer" };
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return { zodiac: "Capricorn", horoscope: "Goat" };
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return { zodiac: "Aquarius", horoscope: "Water Bearer" };
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return { zodiac: "Pisces", horoscope: "Fish" };
  } else {
    return { zodiac: "", horoscope: "" }; // Empty string for unknown zodiac signs
  }
};

export { formatDate, calculateAge, getSigns };
