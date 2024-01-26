# Static URL Redirection App

### src/app/urls.ts
```
export const urls = {
    'home':{
        'value':'https://github.com/',
        'ranjith':{
            'value':'https://ranjith1010.github.io'
        }
    }
  }
```
From above example,

> localhost:4200/home redirects to https://github.com/

> Similarly, localhost:4200/home/ranjith redirects to https://ranjith1010.github.io


Feel free to update the urls and file and its ready to use.

It works based on the JSONPath Resolver.
