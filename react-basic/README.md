# React Notes

# useEffect

- It is a hook. -> function()
- side effects ko chalana (side effects wo jo rendering time nahi hosakte).
  - such as setTimeout, setInterval, backend, api-> (fetch, axios, jQuery)
- useEffect(cb(), [dependency array])
  - cb() : This callback should never be a async function.
  - useEffect se kabhi jhoot nahi bolte.
  - dependency array[] : It should contain the states or props which are used inside the cb() function.
    - jo state dependency array me hote hai agar unme koi change aata hai to **useEffect** phir se chalta hai.

# Routing

- React creates a single page application.
- Client Side Bundling.
- Client Side Rendering.
