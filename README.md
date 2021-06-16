# EpicBounties MultiLanguage

## How it works
- JS script detect browser preference, redirect page to ES or EN and listen for language switcher
- Language switcher saves preference to localStorage so it's made persistent.
- There is a single layout for each page and every string is on a YAML for file. No hardcoded solution.

## Run locally
Toggle dev and production variables on `_config.yml`

```sh
# install
bundle install

# run
bundle exec jekyll serve
```

## Update
Edit `_config.yml` and files on `_data/*` to manage the site links and strings.

## News
```md
---
title: Hello World
author: John Doe
tags: [one, two, three]
image: `filename.jpg` 
language: es
---

```
### Hero
- Put hero images on `assets/images/posts` and use `image: filename.jpg`.

### Multi-language
- Use `language: es` or `language: en` on every post.
- Put posts on the folders `_posts/en` and `_posts/es`.
- For it to work they have to share the same filename.
