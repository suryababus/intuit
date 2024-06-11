interface FormatOptions {
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  style?: "decimal" | "currency" | "percent";
  currency?: string;
}

export function formatNumberString(
  number: number,
  locale: string = "en-US",
  options: FormatOptions = {}
): string {
  try {
    const formatter = new Intl.NumberFormat(locale, options);

    return formatter.format(number);
  } catch (error) {
    console.error("Error formatting number string:", (error as Error).message);
    return number.toString(); // Return the original string in case of error
  }
}
