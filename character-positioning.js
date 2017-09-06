function characterIndices(string) {
  const noSpaces = string.replace(/ +/g, "");
  const splitString = noSpaces.split('')
  const result = {}

  for (i = 0; i < splitString.length; i++) {
    if (result[splitString[i]]) {
      result[splitString[i]] = result[splitString[i]] + ", " + i
    } else {
      result[splitString[i]] = i
    }
  }
  return result
}