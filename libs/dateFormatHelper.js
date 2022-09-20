// 时间格式化
import { globalData } from './global';

// format to YYYYMMDD

export function ymd(date) {
  return date instanceof Date
    ? `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`
    : "";
}

// format to DD MMMM, YYYY
export function friendly(date) {
  return date instanceof Date
    ? new Intl.DateTimeFormat(globalData.locale, { dateStyle: 'long' }).format(date) : "";
}