# Microservice

By default, the microservice will listen to the port `4000`

## Routes

### /signup

Passwords will be encrypted with the `sha256` method

```json
// POST
{
  "username": "Mckenzie Carroll",
  "password": "Kansas",
  "confirmation": "Kansas"
}
```

### /login

```json
// POST
{
  "username": "Mckenzie Carroll",
  "password": "Kansas"
}
```

### /logout

```json
// GET
```

### /delete

```json
// DELETE
```

## Responses

### Success

If the request is successful, the response will be an object with a `success` attribute

```json
{
  "success": "success message"
}
```

### Error

If an error occurs in the request, the response will be an object with an `error` attribute

```json
{
  "error": "error message"
}
```
