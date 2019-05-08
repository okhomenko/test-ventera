// pseudo unique id
// in production we would use library like uuid or similar
function genUniqueId() {
  return Math.floor(Math.random() * 10000) + 1;
}

export default genUniqueId;
