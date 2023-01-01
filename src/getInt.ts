export default function getInt(minimo: number, maximo: number): number {
  const min = Math.ceil(minimo);
  const max = Math.floor(maximo);
  return Math.floor(Math.random() * (max - min) + min);
}