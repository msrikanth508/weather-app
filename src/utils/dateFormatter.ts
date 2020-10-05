/**
 * Get hours from date object
 * @param {Date} date
 */
export const getTimeinHours = (date: Date): string => {
  return date instanceof Date
    ? new Intl.DateTimeFormat('default', {
        hour: '2-digit',
        minute: '2-digit',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hourCycle: 'h23',
      }).format(date)
    : date;
};

/**
 * Get day from date object
 * @param {Date} date
 */
export const getDay = (date: Date): string => {
  return date instanceof Date
    ? new Intl.DateTimeFormat('default', {
        weekday: 'long',
      }).format(date)
    : date;
};

/**
 * Get month from date object
 * @param {Date} date
 */
export const getMonth = (date: Date): string => {
  return date instanceof Date
    ? new Intl.DateTimeFormat('default', {
        month: 'long',
      }).format(date)
    : date;
};

/**
 * Get 2-digits date from date object
 * @param {Date} date
 */
export const getDate = (date: Date): string => {
  return date instanceof Date
    ? new Intl.DateTimeFormat('default', {
        day: '2-digit',
      }).format(date)
    : date;
};
