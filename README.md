[![Hero Slider](https://raw.githubusercontent.com/aayusharyan/last-page-collection/main/.github/og.gif)](https://last.yush.dev)

# Collection of Interesting Last Pages

![Website Status](https://img.shields.io/website?url=https%3A%2F%2Flast.yush.dev&up_message=Up%20and%20Running&label=Website%20Status)
![Repo stars](https://img.shields.io/github/stars/aayusharyan/last-page-collection?style=flat&label=Repo%20Stars)
![Please star this Repo](https://img.shields.io/badge/Please%20Star%20this%20repo%20%E2%AD%90%20-8A2BE2)

This website is a collection of interesting public sites 404 pages. These are various 404 pages from different websites that I found interesting.
Live at [last.yush.dev](https://last.yush.dev)

The context is changed from being a 404 Not Found page to a Last Page. The idea is to make the user feel like they have reached the last webpage and are at the end of the internet.
_(This is with assumption that is someone is visiting my website, they are pretty much at the end of the internet as my website is not that popular.)_

There are multiple variants of the last pages. Each is a different variant in it's own directory.

The switching is done randomly. So, every time you visit the website, you will see a different variant.
The site is self-hosted on my homelab as a Docker nginx container. Random routing lives in [src/nginx.conf](https://github.com/aayusharyan/last-page-collection/blob/main/src/nginx.conf): `/` is rewritten to a random `variant0`–`variant9`, while `/variantN` and its assets are served as-is.

Every response is sent with `Cache-Control: no-store` (plus CDN-specific equivalents), and `ETag`/`Last-Modified` are stripped, so neither the browser nor any CDN in front of the site can store a copy. Without this, a cached page would pin you to a single variant.

## Usage

The container listens on port `80`. All examples below map it to host port `8080` — change the left side of the mapping to suit your setup.

### Docker Compose

Copy the example compose file and adjust ports as needed:

```bash
cp docker/docker-compose.example.yaml docker/docker-compose.yaml
docker compose -f docker/docker-compose.yaml up -d --build
```

### Docker Run (no build required)

Pull the pre-built image from the GitHub Container Registry:

```bash
docker run -d \
  --name last-page-collection \
  --restart unless-stopped \
  --security-opt no-new-privileges:true \
  -p 8080:80 \
  ghcr.io/aayusharyan/last-page-collection:latest
```

The same image is on Docker Hub as `aayusharyan/last-page-collection:latest`.

### Build it yourself

```bash
docker build -f docker/Dockerfile -t last-page-collection .
docker run -d --name last-page-collection -p 8080:80 last-page-collection
```

Then open [http://localhost:8080](http://localhost:8080). Direct links work the same as production, for example [http://localhost:8080/variant0](http://localhost:8080/variant0).

## How to add your own Variant

Please raise an issue with the following details:

- Screenshot of the Last Page
- Description of the Last Page
- Credits for the Last Page
- Codepen Link (if any)

## Variants

| Variant | Link                                                     | Preview                                                  |
| :-----: | -------------------------------------------------------- | -------------------------------------------------------- |
|    0    | [last.yush.dev/variant0](https://last.yush.dev/variant0) | ![Variant 0 Preview](https://last.yush.dev/variant0/assets/og.png) |
|    1    | [last.yush.dev/variant1](https://last.yush.dev/variant1) | ![Variant 1 Preview](https://last.yush.dev/variant1/assets/og.png) |
|    2    | [last.yush.dev/variant2](https://last.yush.dev/variant2) | ![Variant 2 Preview](https://last.yush.dev/variant2/assets/og.png) |
|    3    | [last.yush.dev/variant3](https://last.yush.dev/variant3) | ![Variant 3 Preview](https://last.yush.dev/variant3/assets/og.png) |
|    4    | [last.yush.dev/variant4](https://last.yush.dev/variant4) | ![Variant 4 Preview](https://last.yush.dev/variant4/assets/og.png) |
|    5    | [last.yush.dev/variant5](https://last.yush.dev/variant5) | ![Variant 5 Preview](https://last.yush.dev/variant5/assets/og.png) |
|    6    | [last.yush.dev/variant6](https://last.yush.dev/variant6) | ![Variant 6 Preview](https://last.yush.dev/variant6/assets/og.png) |
|    7    | [last.yush.dev/variant7](https://last.yush.dev/variant7) | ![Variant 7 Preview](https://last.yush.dev/variant7/assets/og.png) |
|    8    | [last.yush.dev/variant8](https://last.yush.dev/variant8) | ![Variant 8 Preview](https://last.yush.dev/variant8/assets/og.png) |
|    9    | [last.yush.dev/variant9](https://last.yush.dev/variant9) | ![Variant 9 Preview](https://last.yush.dev/variant9/assets/og.png) |

## Credits

All credits for each variants are given in their respective directories' README files.
