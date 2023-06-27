---
title: Paging
description: Managing API responses with paging
---
Some of our API endpoints will return a large amount of data. To help with this we have implemented paging. The paging information will be returned in the response header.

All top-level API resources have support for returning data in a paged format. Paged data can be accessed by using the following parameters: limit and page.

## Parameters

- `limit` optional, default is 50. A limit on the number of objects returned, between 1 and 100.
- `page` optional, default is 1. Defines the page to start returning the data from.

## Accessing Pagination Data

Each API call returns information about the paged data in the x-pagination response header. This data is in the form of a JSON string and looks as follows:

```
{
    "TotalCount": 37,
    "PageSize": 10,
    "CurrentPage": 1,
    "TotalPages": 4,
    "HasNext": true,
    "HasPrevious": false
}
```

| Item | Description |
| ----------- | ----------- |
| `TotalCount` | This is the total number of objects in the entire result set. |
| `PageSize` | This is the total number of objects returned in the current response. |
| `CurrentPage` | The current page of the returned result set. |
| `TotalPages` | The total number of pages in the entire result set. |
| `HasNext ` | Boolean stating if there is another page forward in the entire result set that can be fetched. |
| `HasPrevious` | Boolean stating if there is another page backwards in the entire result set that can be fetched. |
