export function callLocalStore<T>(key: string, object?: null | {}): T | {} {
  if (typeof object === "object") {
    localStorage.setItem(key, JSON.stringify(object));
    const data = localStorage.getItem(key) || "";
    return JSON.parse(data);
  } else {
    const data = localStorage.getItem(key) || "";
    return JSON.parse(data);
  }
}
