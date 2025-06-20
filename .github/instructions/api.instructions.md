---
applyTo: "**"
---

# API Request and Response Guidelines

-   Use RESTful API design principles.
-   Maintain consistent URL patterns
-   Use Proper HTTP Response Codes. 200 for Success, 201 for created, 400 for bad request, 401 for unauthorized, 403 for forbidden, 404 for not found, 500 for internal server error.
-   Use JSON format for all API responses.
-   All responses must use JSON with this structure
    Success Response `{ "status": 1, "message": "Success", "data": { ... } }`
    Failure Response `{ "status": 0, "message": "Error description", "data": null }`
