import { shouldPolyfill } from '@formatjs/intl-datetimeformat/should-polyfill';

export default async function polyfill() {
  if (shouldPolyfill()) {
    // Load the polyfill 1st BEFORE loading data
    await import('@formatjs/intl-datetimeformat/polyfill');
  }

  if (Intl.DateTimeFormat.polyfilled) {
    await Promise.all([
      import('@formatjs/intl-datetimeformat/add-all-tz'),
      import('@formatjs/intl-datetimeformat/locale-data/en'),
    ]);
  }
}
