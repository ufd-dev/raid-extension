import { writeClipboardText } from "./utils/clipboard";

type Link = { href: string; text: string };

const createLinkLi = (link: Link) => /* html */ `
  <li>
    <a
      class="copy-anchor"
      href="#"
      data-href="${link.href}"
    >
      <img class="copy-icon" src="img/copy.svg" />
    </a>
    <a href="${link.href}" target="_blank">${link.text}</a>
  </li>
`;

const activities = [
  {
    text: "CoinGecko",
    href: "https://www.coingecko.com/en/coins/unicorn-fart-dust",
  },
  {
    text: "CoinMarketCap",
    href: "https://coinmarketcap.com/currencies/unicorn-fart-dust/",
  },
  {
    text: "DEX Screener",
    href: "https://dexscreener.com/solana/eL5fUxj2J4CiQsmW85k5FG9DvuQjjUoBHoQBi2Kpump",
  },
] satisfies Link[];

const links = [
  {
    text: "UFD on YouTube",
    href: "https://www.youtube.com/@unicornfartdustUFD",
  },
  {
    text: "Ron's Basement on YouTube",
    href: "https://www.youtube.com/@ronsbasement",
  },
  { text: "Official website", href: "https://unicornfartdust.com/" },
] satisfies Link[];

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("activity-link-list")!.innerHTML = activities
    .map(createLinkLi)
    .join("");
  document.getElementById("content-link-list")!.innerHTML = links
    .map(createLinkLi)
    .join("");

  document.querySelectorAll(".copy-anchor").forEach((el) => {
    el.addEventListener("click", () => {
      writeClipboardText((el as HTMLElement).dataset.href ?? "");
    });
  });
});
