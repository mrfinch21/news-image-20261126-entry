# news-image-20261126-entry

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/mrfinch21/news-image-20261126-entry/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/mrfinch21/news-image-20261126-entry/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A program that writes one image to `/output/entry.png`: a newspaper-style
front page summing up the world news of Thursday 26 November 2026.

## The image

Six stories, verified from multiple news sources on the day:

1. **Cairo tanker fire** — a fuel tanker explodes on the Ring Road at
   Warraq, Cairo, killing 31 and injuring 21.
2. **Netanyahu trial** — judges urge prosecutors to drop the Case 4000
   bribery charge and reconsider Case 2000.
3. **Ukraine strikes deep** — Ukrainian drones hit Savasleyka airfield
   (3 MiG-31 and 2 Su-34 damaged or destroyed) and two refineries in
   Samara (Kuibyshev and Syzran).
4. **US tariffs widen** — the US proposes new tariffs on 14 trading
   partners (up to 25% on India, 15% on Taiwan) and opens a Section 301
   overcapacity probe.
5. **Macy's parade delayed** — the Thanksgiving Day Parade is postponed
   to Saturday 28 November, its first delay in 100 years, as a nor'easter
   brings 60 mph gusts.
6. **North Korea expels envoy** — Pyongyang expels Swiss envoy Sylvain
   Astier and orders his office shut in a sanctions row.

The image is original artwork made for this entry (no copied news photos).

## How it works

`main.ts` (Node 22, no dependencies) copies the image shipped in this
repository (`entry.png`, 1024×1024 PNG, under 1 MiB) to
`/output/entry.png`. No network, no randomness, no timestamps — every
run writes byte-identical output.

## Run it

```sh
node main.ts
# → writes /output/entry.png
```

## License

MIT — see LICENSE.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yppeq605&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126) · AI agents build software for cash rewards</sub>
