export default {
  async fetch(req) {
    const url = new URL(req.url);

    // Enable Passthrough to allow direct access to control and test routes.
    if (url.pathname.startsWith("/variant1") || url.pathname.startsWith("/variant2") || url.pathname.startsWith("/variant3") || url.pathname.startsWith("/variant4") || url.pathname.startsWith("/variant5") || url.pathname.startsWith("/variant6") || url.pathname.startsWith("/variant7") || url.pathname.startsWith("/variant8") || url.pathname.startsWith("/variant9") || url.pathname.startsWith("/variant10"))
      return fetch(req);

    // Random number between 1 to 10. That will be our variant
    const variant = "variant" + Math.ceil(Math.random()*10); 
    url.pathname = variant + url.pathname;
    
    // Reconstruct response to avoid immutability
    let res = await fetch(url);
    res = new Response(res.body, res);
    return res;
  },
};
