// Ini Untuk Utility Function yang sering digunakan di berbagai tempat di aplikasi
export function convertToKebabCase(text: string) {
  return text?.toLowerCase().replace(/ /g, "-");
}

export function TextLowerCase(text: string) {
  return text?.toLowerCase();
}

