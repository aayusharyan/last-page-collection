export default {
  async fetch(req) {
    const url = new URL(req.url);

    // Enable Passthrough to allow direct access to specific variant files.
    if (url.pathname.startsWith("/variant"))
      return fetch(req);

    // Random number between 0 to 9. That will be our variant
    const variant = "variant" + Math.floor(Math.random() * 10);
    url.pathname = variant + url.pathname;

    // Reconstruct response to avoid immutability
    let res = await fetch(url);
    res = new Response(res.body, res);
    return res;
  },
};
