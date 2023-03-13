export const styledStrToObj = (str) => {
  let s = str.toLowerCase().replace(/^\s|\s$/g,'').replace(/;\s+/g,';').replace(/-(.)/g, function (a, b) {
    return b.toUpperCase()
  })
  return Object.fromEntries(s.split(';').map((item) => item.split(':')))
}
