---
title: Get Employee
description: Return a single employee based on their unique Id
---
> Version 3 of our List Users API introduces an improved response providing additional data that is not available from version 2. Note that version 3 of the API is a breaking change.

The Get Employee APi returns a single employee based on their unique Id.

## Customizing the Response

By default, this endpoint will return a minimum set of data for the employee. Additional data can be requested by using the include query parameter.

**Example**
`/membership/v3/users/:userGuid?include=manager,employment`

> `userGuid` is the unique Id of the user. This can be retrieved from the [List Employees API](/api/employee/list-employees/).

Below are the possible value you can pass for the `include` parameter.

| Value | Response |
| ----------- | ----------- |
| `manager` | Adding the manager parameter, the response will include details about the employees manager, such as their name and email. |
| `department` | Adding the department parameter, the response will include the information of what department the employee belong to. |
| `employment` | Adding the employment parameter, the response will include the employees employment information such as their designation and employment status. |
| `company` | Adding the company parameter, the response will include company data such as name and unique Id. |
| `profile` | Adding the profile parameter, the response will include additional personal information about the employee such as their password and government Id. |