export default function cn(cls, mods, additional) {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line no-unused-vars
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
