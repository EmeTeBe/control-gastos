type CurrencyOptions = {
  currency?: string;
  locale?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

type DateOptions = {
  locale?: string;
  includeWeekday?: boolean;
  monthFormat?: "short" | "long";
  dayFormat?: "numeric" | "2-digit";
};

export function formatCurrency(amount: number, options: CurrencyOptions = {}) {
  const {
    currency = "USD",
    locale = "en-US",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
}

export function formatDate(
  date: Date | string,
  options: DateOptions = {}
): string {
  const {
    locale = "es-ES",
    includeWeekday = true,
    monthFormat = "long",
    dayFormat = "2-digit",
  } = options;

  const dateObj = typeof date === "string" ? new Date(date) : date;

  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: monthFormat,
    day: dayFormat,
  };

  if (includeWeekday) {
    formatOptions.weekday = "long";
  }

  return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
}
