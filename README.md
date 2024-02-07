# Transient Pets Backend

## Features 

### Get all pets
`GET http://localhost:5000/api/v1/pet`

returns JSON of the form 

```
{
  data: [
    {
      name: string,
      description: string   
    },
    ...
  ]
}
```

### Add a pet

`POST http://localhost:5000/api/v1/pet`

Adds a pet to the collection

returns JSON of the form

```
{
  message: string,        // confirmation
  data: Pet[]             // all the pets after the update, as an array, same as with GET
}
```

### Delete a pet

`DELETE http://localhost:5000/api/v1/pet`

Removes a pet from the collection

returns JSON of the form

```
{
  message: string,        // confirmation
  data: Pet[]             // all the pets after the update, as an array, same as with GET
}
```

## Limitations


The responses for GET **intentionally take 1.5 seconds**, so that you have the chance to experiment with loading states when using this back end.

We're not concerned with authentication, access control etc.