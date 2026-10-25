import type { Locale } from "@/lib/locale";
import type { RoomId } from "@/lib/routes";
import type { ThemeId } from "@/lib/theme-ids";
import { themeChrome } from "@/themes/chrome";
import { getThemeRoomCopy } from "@/themes/copy";

/**
 * A small, hand-written module per style. It sits between the shared room hero
 * and the shared long-form body, so each theme says something different without
 * forking the factual room copy.
 */
export function RoomFlavor({
  locale,
  room,
  theme,
}: {
  locale: Locale;
  room: RoomId;
  theme: ThemeId;
}) {
  const copy = getThemeRoomCopy(locale, room, theme);

  if (theme === "konsole") {
    const chrome = themeChrome.konsole[locale];

    return (
      <div className="room-flavor flavor-console" aria-label={chrome.flavorLabel}>
        <p>
          <span className="console-user">{chrome.host}</span>:~$ less ./
          {chrome.roomsDir}/{room}.md
        </p>
        <p className="console-muted">
          # {copy.label} — {copy.teaser}
        </p>
        <p className="console-muted"># tags: {copy.tags.join(" ")}</p>
      </div>
    );
  }

  if (theme === "minecraft") {
    const chrome = themeChrome.minecraft[locale];

    return (
      <div className="room-flavor flavor-minecraft" aria-label={chrome.flavorLabel}>
        <p className="mc-kicker">
          {chrome.flavorLabel} / {copy.label}
        </p>
        <ul className="mc-flavor-slots">
          {copy.tags.map((tag, index) => (
            <li key={tag}>
              <span>{index + 1}</span>
              {tag}
            </li>
          ))}
        </ul>
        <p className="mc-flavor-note">{chrome.flavorNote}</p>
      </div>
    );
  }

  if (theme === "jtl-nova") {
    const chrome = themeChrome["jtl-nova"][locale];

    return (
      <div className="room-flavor flavor-shop" aria-label={chrome.flavorLabel}>
        <p className="shop-kicker">{chrome.flavorLabel}</p>
        <dl className="shop-flavor-specs">
          <div>
            <dt>{chrome.sku}</dt>
            <dd>TCTCL-{copy.index}</dd>
          </div>
          <div>
            <dt>{chrome.category}</dt>
            <dd>{copy.label}</dd>
          </div>
          <div>
            <dt>{chrome.availability}</dt>
            <dd>{chrome.availabilityValue}</dd>
          </div>
          <div>
            <dt>{chrome.price}</dt>
            <dd>{chrome.priceValue}</dd>
          </div>
          <div>
            <dt>{chrome.shipping}</dt>
            <dd>{chrome.shippingValue}</dd>
          </div>
          <div>
            <dt>{chrome.condition}</dt>
            <dd>{chrome.conditionValue}</dd>
          </div>
        </dl>
      </div>
    );
  }

  if (theme === "hype") {
    const chrome = themeChrome.hype[locale];

    return (
      <div className="room-flavor flavor-hype" aria-label={chrome.flavorAria}>
        <p className="hype-badge">Satire</p>
        <dl>
          <div>
            <dt>{chrome.room}</dt>
            <dd>{copy.index}</dd>
          </div>
          <div>
            <dt>{chrome.content}</dt>
            <dd>{chrome.real}</dd>
          </div>
          <div>
            <dt>{chrome.tracking}</dt>
            <dd>{chrome.zeroScripts}</dd>
          </div>
          <div>
            <dt>{chrome.scaling}</dt>
            <dd>{chrome.onePerson}</dd>
          </div>
        </dl>
      </div>
    );
  }

  if (theme === "retro") {
    const chrome = themeChrome.retro[locale];

    return (
      <div className="room-flavor flavor-retro" aria-label={chrome.flavorAria}>
        <p className="retro-flavor-badge">{chrome.construction}</p>
        <p>{chrome.flavorText}</p>
        <p className="retro-counter">
          {chrome.counterLabel}: <span>{chrome.offline}</span>
        </p>
      </div>
    );
  }

  if (theme === "papier") {
    const chrome = themeChrome.papier[locale];

    return (
      <div className="room-flavor flavor-paper" aria-label={chrome.flavorAria}>
        <p className="paper-flavor-label">{chrome.flavorLabel}</p>
        <p>{copy.teaser}</p>
        <p className="paper-flavor-tags">{copy.tags.join(" · ")}</p>
      </div>
    );
  }

  return null;
}
