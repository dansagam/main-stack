export const getFromFullname = (str: string) => {
  if (typeof str === "string") {
    if (!str.trim()) return "A";
    return str
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map((v) => v[0]?.toUpperCase())
      .join("");
  }
  return "A";
};
// eslint-disable-next-line no-unused-vars
export function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export const stringAvatar = (name: string) => {
  if (typeof name === "string") {
    return {
      style: {
        background: stringToColor(name),
      },
      containerStyle: {
        background: stringToColor(name),
      },
      children: `${name
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .map((v) => v[0]?.toUpperCase())
        .join("")}`,
    };
  }

  return {
    className: "bg-[#78C2ED]",
    children: "AB",
  };
};
