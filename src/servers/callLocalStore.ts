export function callLocalStore(key: string, object: {}) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(object));
    return localStorage.getItem(key);
  } else {
    return localStorage.getItem(key);
  }
}
