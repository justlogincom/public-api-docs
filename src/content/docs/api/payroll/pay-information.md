---
title: Get Pay Information
description: Provides pay related data for the employee
---
Returns data relating to the given employees pay setup.

| Property | Value |
| ----------- | ----------- |
| Method | `GET` |
| URL | `/payroll/employee-management/v1/users/:userGuid/payinfo` |
| Headers | Authorization Bearer: {{token}} |
| Parameters | `:userGuid` - the unique user identifier of the user. |

**Example Response**

```
{
    "companyGUID": "B02790A655DE4304A2557016C698BA9D",
    "userGUID": "0BF91817E2E64B0C92F22FD24A9D4604",
    "payPeriod": "Fortnightly",
    "payMethod": "cash",
    "basicPay": 0.0
}                   
```
