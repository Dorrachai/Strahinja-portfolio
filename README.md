# How to update this site (no coding needed)

This portfolio is built so that all the text, projects, links and
sounds can be changed in **two files** — right here on GitHub, in
your browser. You never need to install anything.

**The two files:**

| File | What it controls |
|------|------------------|
| `src/data/projects.ts` | Projects, pictures, and sound demos |
| `src/data/site.ts` | Name, bio, About page, contact links, availability |

---

## Editing a file on GitHub

1. Open the file (for example `src/data/projects.ts`).
2. Click the **pencil icon** in the top-right of the file view.
3. Change only the text **between the quotation marks**.
4. Click **Commit changes** (the green button) — done. Keep the
   default "Commit directly to the main branch".

Everything between `//` slashes is a **comment** — the site ignores
it. Comments explain what each part does.

---

## Adding a new project (in `src/data/projects.ts`)

1. Find the block marked **EXAMPLE PROJECT** near the bottom of the
   project list — it sits between the lines `--- START` and `--- END`.
2. Copy everything from `{` to `},` inside it (without the `//` at
   the start of each line).
3. Paste it just **above** the line that says `];`.
4. Fill in your own title, year, description, and so on.
5. Give it a **unique `id`** — lowercase with dashes instead of
   spaces, e.g. `id: "space-pirates",`. Never use the same id twice.
6. Commit.

### Adding pictures for the project

1. On the repo's main page open the `src/assets` folder.
2. Click **Add file → Upload files** and drop in your screenshots
   (good names: `space-pirates-1.png`, `space-pirates-2.png`, ...).
   Commit them.
3. Back in `src/data/projects.ts`, add one import line at the top
   for each picture, next to the existing ones:

   ```ts
   import spacePirates1 from "@/assets/space-pirates-1.png";
   import spacePirates2 from "@/assets/space-pirates-2.png";
   ```

   (The name before `from` is the file name without dashes, dots or
   the extension — `space-pirates-1.png` becomes `spacePirates1`.)
4. In your project block, point the images at them:

   ```ts
   coverImage: spacePirates1,
   images: [spacePirates1, spacePirates2],
   ```

### Adding playable sound demos

In your project block, add an `audioDemos` list with normal links
from **SoundCloud, YouTube or Spotify** — the site turns them into
players automatically:

```ts
audioDemos: [
  { title: "Main Theme", url: "https://soundcloud.com/your-track" },
  { title: "Casino Ambience", url: "https://youtu.be/XXXXXXXXXXX" },
],
```

---

## Changing personal text and links (in `src/data/site.ts`)

- **Bio / About text**: edit the lines under `heroBio` and `about`.
- **Contact links**: each link has a `label`, a `url` and an `icon`.
  Icon choices: `linkedin`, `gamepad`, `play`, `mail`, `globe`.
- **Skills and collaborations**: edit the lists under `expertise`
  and `collaborations`.

---

## A few rules that keep the site working

- Never delete a comma, bracket or quotation mark — only change the
  text inside the `" "` marks.
- Don't use a `"` character inside your text; write `'` instead.
- After committing, wait a minute and reload the site — if something
  looks broken, undo your last change (GitHub keeps history:
  **History** button → click your commit → **Browse files** shows the
  previous version).

---

## Hosting on GitHub Pages (one-time setup)

The site auto-builds and publishes itself every time something is
committed to the `main` branch. To switch it on the first time:

1. Open the repo on github.com.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to
   **GitHub Actions**.

That's it. From now on every commit is live within a couple of
minutes at:

`https://<your-username>.github.io/<repo-name>/`

You can watch each deployment under the repo's **Actions** tab
(green tick = live). If a run fails, it's almost always a typo made
while editing — check the latest commit first.
