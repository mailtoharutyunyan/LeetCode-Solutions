type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
}
