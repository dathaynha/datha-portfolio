import { YearMonth } from './cv';

function toIndex(value: YearMonth): number {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + (month - 1);
}

/** Month names come from the language's content, so server and browser agree byte for byte. */
export function formatMonth(value: YearMonth, months: readonly string[]): string {
  const index = toIndex(value);
  return `${months[index % 12]} ${Math.floor(index / 12)}`;
}
