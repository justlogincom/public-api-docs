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

**Example Response**

The example below shows a response that includes `manager`, `department`, `employment`, `company`, `profile`.

```json
{
	"userGuid": "0BF91817E2E64B0C92F22FD24A9D4604",
	"companyGuid": "B02790A655DE4304A2557016C698BA9D",
	"employeeId": "E004",
	"userName": "alexa_schroeder@example.org",
	"email": "alexa_schroeder@example.org",
	"fullName": "Alexa Schroeder",
	"createdDate": "2022-09-16",
	"modifiedDate": "2023-06-14",
	"joinDate": "2022-09-15",
	"dateOfBirth": "1994-06-16",
	"dayOfBirth": 16,
	"monthOfBirth": 6,
	"yearOfBirth": 1994,
	"gender": "Female",
	"manager": {
		"userGuid": "DA0B1F62E51E41FE87D11EDA99B2A549",
		"email": "jeff@example.org",
		"fullName": "Jeff Jones",
		"employeeId": "E001"
	},
	"images": {
		"profileFullSize": "https://d22as6pp5k15jd.cloudfront.net/original/0bf91817-e2e6-4b0c-92f2-2fd24a9d4604.jpg",
		"profileThumbnail": "https://d22as6pp5k15jd.cloudfront.net/size-128/0bf91817-e2e6-4b0c-92f2-2fd24a9d4604.jpg"
	},
	"department": {
		"departmentGuid": "26C9026F3E5E40CD873DED9E9916FB10",
		"name": "Sales"
	},
	"employment": {
		"designation": "Sales Director",
		"designationCode": "SD",
		"employmentStatus": "Full Time",
		"jobGradeId": 3808,
		"jobGrade": "Management",
		"confirmationDate": "2022-12-31T23:59:59.997"
	},
	"isActive": true,
	"residency": {
		"name": "Citizen",
		"startDate": "",
		"endDate": ""
	},
	"passport": {
		"passportNo": "",
		"issueDate": "2020-11-18",
		"expiryDate": "2025-07-31"
	},
	"company": {
		"name": "Acme Corp",
		"companyGuid": "B02790A655DE4304A2557016C698BA9D"
	},
	"governmentId": {
		"value": "S0000456G"
	}
}
```