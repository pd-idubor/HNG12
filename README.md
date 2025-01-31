###  Simple API Project

#### Project Overview
This API provides a simple interface to retrieve basic information about the user, including their email address, the GitHub URL of the project's codebase, and the current datetime.

##### API Endpoint

###### GET /api/basic-info

**Description:** This endpoint retrieves the user's basic information.

**Response Format:** The response is returned in JSON format.

###### Request Example
```http
GET /api/basic-info HTTP/1.1
Host: yourapi.com
Accept: application/json
```

##### Response Example
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "<https://github.com/yourusername/your-repo>"
}
```

##### Response Fields
| Field    | Type     | Description                                  |
|----------|----------|----------------------------------------------|
| email    | string   | The email address of the user.              |
| github   | string   | The URL to the project's GitHub repository. |
| datetime | string   | The current date and time in ISO 8601 format.|


#### Usage Instructions
To use this API:
1. Send a GET request to `/api/basic-info`.
2. Parse the JSON response to access user information.

