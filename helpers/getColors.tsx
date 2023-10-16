import TailwindConfig from '../tailwind.config';

export function getColors(property: string) {
  const colors = TailwindConfig?.theme?.extend?.colors[property];
  if (colors) {
    return colors;
  } else {
    return {};
  }
}
