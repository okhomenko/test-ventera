function className(obj) {
  return Object.entries(obj)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key).join(' ');
}

export default className;
