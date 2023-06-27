---
title: List Leave Types
description: Returns a list of leave types for the employee
---
Returns a list of leave types for the employee.

| Property | Value |
| ----------- | ----------- |
| Method | `GET` |
| URL | `/leave/setup/leave/v2/companies/:companyGuid/users/:userGuid/assignedleavetypes?whichyear=YYYY` |
| Headers | Authorization Bearer: {{token}} |
| Parameters | `:companyGuid` - the unique identifier of the company.<br>`:userGuid` - the unique identifier of the user.<br>`whichyear` - the year you would like to query against. |

**Example Response**

```
{
    "companyGuid": "44AD7A7A048443AAB22CA52FC353E5AB",
    "userGuid": "8CDE5DDF169E472B8309ACC91069E3D4",
    "leaveTypes": [
        {
        "leaveType": 1,
        "leaveName": "Annual"
        }
    ],
    "whichYear": 2023,
    "basedOnDate": "2023-06-26"
    }                   
```