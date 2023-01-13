---
title: Content
description: How to structure content for Ter.
date: 2022-12-18
tags:
    - usage
---

### Index pages

Ter recursively recreates the source file system on the rendered site and each
directory gets an index file listing its content. For example, if the source
looks like this:

```
content
├── index.md
├── about-me.md
└── life
    ├── failed-startup-ideas.md
    └── thoughts-on-life.md
```

... the `life` directory will get an `life/index.html` page with an index of its
content.

If a directory contains an `index.md` file, its content will be injected into
the rendered `index.html` above the index list. This can be useful for
describing what the directory content is about or calling out individual pages.

#### Index sorting

Items in the index are sorted in the following order:

1. files with `pinned: true` in the [frontmatter](#markdown-frontmatter) are
   listed at the top and get an ★ symbol;
2. directories (child index pages);
3. rest of markdown files, sorted by [date](#dates).

### Markdown frontmatter

Ter extracts [YAML frontmatter](https://jekyllrb.com/docs/front-matter/)
delimited by `---` from markdown files. Here’s an example:

```yaml
---
title: My page
description: Here’s my description
date: 2022-01-29
tags:
  - myTag
  - otherTag
property: value
---

## My content
```

Some properties are utilized when building a site. All of them are optional.

| Property        | Default  | Description                                                              |
| --------------- | -------- | ------------------------------------------------------------------------ |
| title           |          | Page title                                                               |
| description     |          | Page description                                                         |
| tags            |          | Page tags                                                                |
| date            |          | Page publish date in YYYY-MM-DD format                                   |
| dateUpdated     |          | Page last update date in YYYY-MM-DD format                               |
| pinned          | `false`  | Page is listed at the top of [index lists](#index-pages)                 |
| unlisted        | `false`  | Page is excluded from all [index lists](#index-pages)                    |
| draft           | `false`  | File is [ignored](#ignoring-files) during site generation                |
| layout          | `"list"` | Layout of the [index list](#index-pages); can be `list`, `log` or `grid` |
| toc             | `false`  | Table of contents                                                        |
| showHeader      | `true`   | Page header with title, description, date and tags                       |
| showTitle       | `true`   | Page title                                                               |
| showDescription | `true`   | Page description                                                         |
| showMeta        | `true`   | Page date and tags                                                       |

### Ignoring files

Any files and folders that start with an `_` or `.` (hidden) are ignored. For
example, if there is a `_drafts` folder in the content directory, it will be
skipped during site generation.

In addition, any markdown file with `draft: true` in the
[frontmatter](#markdown-frontmatter) will be ignored. To render files with
`draft: true`, pass `--drafts` flag to the main command. For example:

```sh
deno run -A --unstable https://deno.land/x/ter/main.ts --serve --drafts
```

### Dead internal links

Ter automatically finds non-working internal links and lets you know about them
after building a site. Here's an example output:

```
[...]
Dead links:
/overview -> /non-existent-page-name
/overview -> /some-dead-link
```
