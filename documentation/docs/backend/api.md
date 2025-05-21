---
title: My API v1.0
language_tabs: []
language_clients: []
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<h1 id="my-api">Areal API v1.0</h1>

> Scroll down for example requests and responses.

Описание API

Base URLs:

<h1 id="my-api-organization">Organization</h1>

## OrganizationController_create

<a id="opIdOrganizationController_create"></a>

> Code samples

`POST /organization`

<h3 id="organizationcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## OrganizationController_findAll

<a id="opIdOrganizationController_findAll"></a>

> Code samples

`GET /organization`

<h3 id="organizationcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## OrganizationController_update

<a id="opIdOrganizationController_update"></a>

> Code samples

`PATCH /organization/{id}`

<h3 id="organizationcontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="organizationcontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## OrganizationController_remove

<a id="opIdOrganizationController_remove"></a>

> Code samples

`DELETE /organization/{id}`

<h3 id="organizationcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="organizationcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-department">Department</h1>

## DepartmentController_create

<a id="opIdDepartmentController_create"></a>

> Code samples

`POST /department`

<h3 id="departmentcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## DepartmentController_findAll

<a id="opIdDepartmentController_findAll"></a>

> Code samples

`GET /department`

<h3 id="departmentcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## DepartmentController_update

<a id="opIdDepartmentController_update"></a>

> Code samples

`PATCH /department/{id}`

<h3 id="departmentcontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="departmentcontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## DepartmentController_remove

<a id="opIdDepartmentController_remove"></a>

> Code samples

`DELETE /department/{id}`

<h3 id="departmentcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="departmentcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-profession">Profession</h1>

## ProfessionController_create

<a id="opIdProfessionController_create"></a>

> Code samples

`POST /profession`

<h3 id="professioncontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## ProfessionController_findAll

<a id="opIdProfessionController_findAll"></a>

> Code samples

`GET /profession`

<h3 id="professioncontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## ProfessionController_update

<a id="opIdProfessionController_update"></a>

> Code samples

`PATCH /profession/{id}`

<h3 id="professioncontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="professioncontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## ProfessionController_remove

<a id="opIdProfessionController_remove"></a>

> Code samples

`DELETE /profession/{id}`

<h3 id="professioncontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="professioncontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-file">File</h1>

## FileController_create

<a id="opIdFileController_create"></a>

> Code samples

`POST /file`

<h3 id="filecontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## FileController_findAll

<a id="opIdFileController_findAll"></a>

> Code samples

`GET /file`

<h3 id="filecontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## FileController_findOne

<a id="opIdFileController_findOne"></a>

> Code samples

`GET /file/{id}`

<h3 id="filecontroller_findone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="filecontroller_findone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## FileController_remove

<a id="opIdFileController_remove"></a>

> Code samples

`DELETE /file/{id}`

<h3 id="filecontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="filecontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-employee">Employee</h1>

## EmployeeController_create

<a id="opIdEmployeeController_create"></a>

> Code samples

`POST /employee`

<h3 id="employeecontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## EmployeeController_findAll

<a id="opIdEmployeeController_findAll"></a>

> Code samples

`GET /employee`

<h3 id="employeecontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## EmployeeController_update

<a id="opIdEmployeeController_update"></a>

> Code samples

`PATCH /employee/{id}`

<h3 id="employeecontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="employeecontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## EmployeeController_remove

<a id="opIdEmployeeController_remove"></a>

> Code samples

`DELETE /employee/{id}`

<h3 id="employeecontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="employeecontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-operation">Operation</h1>

## OperationController_create

<a id="opIdOperationController_create"></a>

> Code samples

`POST /operation`

<h3 id="operationcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## OperationController_findAll

<a id="opIdOperationController_findAll"></a>

> Code samples

`GET /operation`

<h3 id="operationcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## OperationController_remove

<a id="opIdOperationController_remove"></a>

> Code samples

`DELETE /operation/{id}`

<h3 id="operationcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="operationcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-auth">Auth</h1>

## AuthController_login

<a id="opIdAuthController_login"></a>

> Code samples

`POST /auth/login`

<h3 id="authcontroller_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## AuthController_registration

<a id="opIdAuthController_registration"></a>

> Code samples

`POST /auth/registration`

<h3 id="authcontroller_registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## AuthController_me

<a id="opIdAuthController_me"></a>

> Code samples

`GET /auth/me`

<h3 id="authcontroller_me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## AuthController_logout

<a id="opIdAuthController_logout"></a>

> Code samples

`POST /auth/logout`

<h3 id="authcontroller_logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



<h1 id="my-api-user">User</h1>

## UserController_create

<a id="opIdUserController_create"></a>

> Code samples

`POST /user`

<h3 id="usercontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|



## UserController_findAll

<a id="opIdUserController_findAll"></a>

> Code samples

`GET /user`

<h3 id="usercontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## UserController_update

<a id="opIdUserController_update"></a>

> Code samples

`PATCH /user/{id}`

<h3 id="usercontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="usercontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



## UserController_remove

<a id="opIdUserController_remove"></a>

> Code samples

`DELETE /user/{id}`

<h3 id="usercontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="usercontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-roles">Roles</h1>

## RolesController_findAll

<a id="opIdRolesController_findAll"></a>

> Code samples

`GET /role`

<h3 id="rolescontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|



<h1 id="my-api-change">Change</h1>

## ChangeController_findAll

<a id="opIdChangeController_findAll"></a>

> Code samples

`GET /change`

<h3 id="changecontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

