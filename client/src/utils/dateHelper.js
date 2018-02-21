const ISOToDateString = ISOString => new Date(ISOString).toDateString();

const isAnHourAgo = pastDateTime =>
  parseInt((new Date() - new Date(pastDateTime)) / (1000 * 60), 10) > 60;

export default {ISOToDateString, isAnHourAgo};
