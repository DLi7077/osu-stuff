import { useState } from "react";

export const generateTheme = (hue: number): ColorTheme => ({
  navbar: `hsl(${hue},50%,45%)`,
  background: `hsl(${hue},10%,10%)`,
  title: `hsl(${hue},20%,15%)`,
  subtitle: `hsl(${hue},20%,20%)`,
  body: `hsl(${hue},10%,15%)`,
  section: `hsl(${hue},10%,20%)`,
  text_color: `hsl(${hue},40%,90%)`,
  highlight: `hsl(${hue},100%,75%)`,
});

export default function useColorTheme(hue: number): [ColorTheme, any] {
  const [theme, setTheme] = useState(generateTheme(hue));
  
  function updateTheme(hue: number): void {
    setTheme(generateTheme(hue));
  }
  return [theme, updateTheme];
}
