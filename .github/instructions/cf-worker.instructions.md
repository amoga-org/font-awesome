---
applyTo: "**"
---

# Cloudflare Worker

-   Dont import any libraries or modules that are not used in the code.
-   Avoid installing external libraries. Avoid the need to run `npm run build` unless absolutely necessary.
-   Cloudflare publish triggers automatically when you push to the main branch. No need to use `wrangler publish` or `npm run deploy`
-   Keep a try catch block at the top level of your fetch handler to handle errors gracefully.
-   Use the error throwing pattern: `throw { code: 401, message: "Invalid JWT token" };` and expect it to be caught by the top-level try-catch block.
-   In catch block, return a Response object with appropriate status code and message:

```javascript
try {
} catch (error) {
    return new Response(error.message || "Internal Server Error", {
        status: error.code || 500,
        statusText: "Internal Server Error",
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
// Usage examples:
return createResponse({ user }, "User created", 201);
```
