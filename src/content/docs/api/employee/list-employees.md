---
title: List Employees
description: Version 3 of our List Users API introduces an improved response providing additional data that is not available from version 2. Note that version 3 of the API is a breaking change. .
---
The List Employees API will return a list of employees for the currently authenticated company. By default this will be a list of active employees.

## Customizing the Response

This endpoint will return a minimum set of data for the employee. However, additional data can be requested by using the include query parameter.

**Example**

The below request would return the standard set of employee fields along with additional data relating to the employee manager and their employment records.

```
/membership/v3/users?include=manager,employment
```

Below are the possible value you can pass for the `include` parameter.

| Value | Response |
| ----------- | ----------- |
| `manager` | Adding the manager parameter, the response will include details about the employees manager, such as their name and email. |
| `department` | Adding the department parameter, the response will include the information of what department the employee belong to. |
| `employment` | Adding the employment parameter, the response will include the employees employment information such as their designation and employment status. |
| `company` | Adding the company parameter, the response will include company data such as name and unique Id. |
| `profile` | Adding the profile parameter, the response will include additional personal information about the employee such as their password and government Id. |

## Retrieving Users Based on Active Status

By default, the endpoint returns only Active users within the company. If you would like to retrieve Inactive users or a list of both Active and Inactive you can use the activeStatus property to do so.

- `/users?activeStatus=inactive` will return all inactive users for the company.
- `/users?activeStatus=all` will return all active and inactive users for the company.

## Creating Custom Queries

The user’s endpoint allows for querying and filtering of data using a simple querying language when calling the API.

**Query Breakdown**

A query consists of 3 parts, the field to query on, the type of query and the value to query for.

**Example**

`query=name[=]tony` - this would return all users who have the name of tony.
> Note that queries are not case sensitive. 