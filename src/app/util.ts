export const randomIntFromInterval = (min: number, max: number) => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const getWeightedRandom = (items: any[]) => {
  if(!items.length) {
    console.warn("getWeightedRandom can't select from empty list")
  }
  const weights = items.reduce((acc, item, i) => {
    acc.push(item.weight + (acc[i - 1] ?? 0));
    return acc;
  }, []);
  const random = Math.random() * weights.at(-1);
  return items[weights.findIndex((weight: number) => weight > random)];
}
export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
