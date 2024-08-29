import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export const useDate = () => {
  function dateRelative(date: Date) {
    const dateLocal = dayjs(date).tz().format('YYYY-MM-DD HH:mm:ss');
    return dayjs(dateLocal).fromNow();
  }

  return {
    dateRelative,
  }
}
