export function writeClipboardText(text: string) {
  navigator.clipboard
    .writeText(text)
    .catch((error) => console.error(error.message));
}
