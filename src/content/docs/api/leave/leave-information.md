---
title: Get Leave Information
description: Returns a list of leave types for the employee
---
Returns a list of leave types for the employee.

| Property | Value |
| ----------- | ----------- |
| Method | `GET` |
| URL | ` 	/leave/setup/leave/v2/companies/:companyGuid/users/:userGuid/leavetypes/:leaveTypeId/leavesummary?baseondate=YYYY-MM-DD` |
| Headers | Authorization Bearer: {{token}} |
| Parameters | `:companyGuid` - the unique identifier of the company.<br>`:userGuid` - the unique identifier of the user.<br>`leaveTypeId` - the Leave Type Id returned from [List Leave Type API](/api/leave/list-leave-types/) <br>`YYYY-MM-DD` - the date you would like to query against. |
