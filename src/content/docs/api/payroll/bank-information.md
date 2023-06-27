---
title: Get Bank Information
description: Provides bank related data for the employee
---
Returns data relating to the given employees bank information.

| Property | Value |
| ----------- | ----------- |
| Method | `GET` |
| URL | `/payroll/employee-management/v1/users/:userGuid/bankinfo` |
| Headers | Authorization Bearer: {{token}} |
| Parameters | `:userGuid` - the unique user identifier of the user. |

**Example Response**

```
{
    "companyGUID": "169E293AB97C4E4A8B13C80F0977516A",
    "userGUID": "A80EF08D85CD4F0EB1CC9066B5DCA7DC",
    "bankGUID": "389F0ABF99594D29AC8D97234ADB8FB3",
    "branchGUID": "A8E8C009239540988CF9E273F63F9EAC",
    "bankName": "Bank of America, NA",
    "branchNo": "212",
    "branchName": "Singapore Branch",
    "accountNo": "1234567890"
}                   
```
