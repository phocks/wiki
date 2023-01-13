---
title: Markdown
description: Sample of Markdown.
date: 2022-09-25
---

Ter uses [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) via
[Marked](https://marked.js.org/) for rendering markdown files.

Below is a sample of GFM for previewing and testing purposes.

---

Text can be **bold**, _italic_, or ~~strikethrough~~.

This is a normal paragraph. Bacon ipsum dolor sit amet t-bone doner shank
drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck
kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs
biltong.

> This is a blockquote. Bacon ipsum dolor sit amet t-bone doner shank drumstick,
> pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa
> leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

# Header 1

This is a normal paragraph following a header. Bacon ipsum dolor sit amet t-bone
doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump
pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder
short ribs biltong.

## Header 2

> This is a blockquote following a header. Bacon ipsum dolor sit amet t-bone
> doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock
> rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow
> shoulder short ribs biltong.

### Header 3

```
This is a code block following a header.
```

#### Header 4

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### Header 5

1. This is an ordered list following a header.
2. This is an ordered list following a header.
3. This is an ordered list following a header.

###### Header 6

| What    | Follows  |
| ------- | -------- |
| A table | A header |
| A table | A header |
| A table | A header |

Here is an unordered list:

- Salt-n-Pepa
- Bel Biv DeVoe
- Kid 'N Play

And an ordered list:

1. Michael Jackson
2. Michael Bolton
3. Michael Bublé

And an unordered task list:

- [x] Create a sample markdown document
- [x] Add task lists to it
- [ ] Take a vacation

And a "mixed" task list:

- [ ] Steal underpants
- ?
- [ ] Profit!

And a nested list:

- Jackson 5
  - Michael
  - Tito
  - Jackie
  - Marlon
  - Jermaine
- TMNT
  - Leonardo
  - Michelangelo
  - Donatello
  - Raphael

---

There's a horizontal rule above and below this.

---

Definition lists can be used with HTML syntax.

<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>

---

<details>
  <summary>This is a summary of details</summary>
  <p>
    This is a paragraph inside details. Bacon ipsum dolor sit amet t-bone doner shank
    drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck
    kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs
    biltong.
  </p>
</details>

---

Tables should have bold headings and alternating shaded rows.

| Artist          | Album          | Year |
| --------------- | -------------- | ---- |
| Michael Jackson | Thriller       | 1982 |
| Prince          | Purple Rain    | 1984 |
| Beastie Boys    | License to Ill | 1986 |

If a table is too wide, it should condense down and/or scroll horizontally.

| Artist          | Album          | Year | Label                   | Awards                                                                                                                                                                                                                                                                          | Songs                                                                                                                                                                                                                     |
| --------------- | -------------- | ---- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Michael Jackson | Thriller       | 1982 | Epic Records            | Grammy Award for Album of the Year, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Selling Album, Grammy Award for Best Engineered Album, Non-Classical                                                | Wanna Be Startin' Somethin', Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature, P.Y.T. (Pretty Young Thing), The Lady in My Life                                                               |
| Prince          | Purple Rain    | 1984 | Warner Brothers Records | Grammy Award for Best Score Soundtrack for Visual Media, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Soundtrack/Cast Recording, Grammy Award for Best Rock Performance by a Duo or Group with Vocal | Let's Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I Would Die 4 U, Baby I'm a Star, Purple Rain                                                                           |
| Beastie Boys    | License to Ill | 1986 | Mercury Records         | noawardsbutthistablecelliswide                                                                                                                                                                                                                                                  | Rhymin & Stealin, The New Style, She's Crafty, Posse in Effect, Slow Ride, Girls, (You Gotta) Fight for Your Right, No Sleep Till Brooklyn, Paul Revere, Hold It Now, Hit It, Brass Monkey, Slow and Low, Time to Get Ill |

Code snippets like `var foo = "bar";` can be shown inline.

Also, `this should vertically align` ~~`with this`~~ ~~and this~~.

Code can also be shown in a block element.

```
var foo = "bar";
```

Code can also use syntax highlighting.

```javascript
var foo = "bar";
```

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```javascript
var foo =
  "The same thing is true for code with syntax highlighting. A single line of code should horizontally scroll if it is really long.";
```

```typescript
async function initializeFile(filePath: string, url: URL) {
  const fileResponse = await fetch(url).catch((err) => {
    console.log(`Can't fetch file: ${url}, Error: ${err}`);
    // Exit if we can't get the file
    Deno.exit(1);
  });
  if (fileResponse && fileResponse.body) {
    await ensureDir(dirname(filePath));
    const file = await Deno.open(filePath, {
      write: true,
      create: true,
    });
    const writableStream = writableStreamFromWriter(file);
    await fileResponse.body.pipeTo(writableStream);
  }
}
```

Inline code inside table cells should still be distinguishable.

| Language   | Code               |
| ---------- | ------------------ |
| Javascript | `var foo = "bar";` |
| Ruby       | `foo = "bar"`      |

Small images should be shown at their actual size.

![Bridge](img/img-small.jpg)

Large images should always scale down and fit in the content container.

<figure>
  <img src="img/img-large.jpg">
  <figcaption>This a figcaption</figcaption>
</figure>
