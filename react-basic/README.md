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
- React Router Dom

# Lazy Loading

- Load the component only when it is required.

# Prop Drilling

# useMemo()

- It is a hook which is used to memoize the values.
- useMemo(cb(), [dependency array])
- cb(): This callback func. should not be async.

# useCallback()

- It is a hook which is used to memoize the functions.
- useCallback(cb(), [dependency array])
- cb(): This should not be async.
