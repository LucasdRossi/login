# Microservice

By default, the microservice will listen to the port `4000`

## Routes

### /signup

Passwords will be encrypted with the `sha256` method

```json
// POST
{
  "username": "username",
  "password": "password",
  "confirmation": "password"
}
```

### /login

```json
// GET
{
  "username": "username",
  "password": "password"
}
```

### /logout

```json
// GET
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
