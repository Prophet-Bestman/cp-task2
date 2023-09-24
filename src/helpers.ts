export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: any;

  return function (this: any, ...args: Parameters<T>): void {
    const context = this;

    const later = () => {
      timeoutId = null;
      func.apply(context, args);
    };

    clearTimeout(timeoutId!);
    timeoutId = setTimeout(later, wait);
  };
}
