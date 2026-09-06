# Job Portal

A full-stack job portal application for managing job listings, user accounts, applications, and feedback for three roles: Admin, Company, and Job Seeker.

## Overview

This project contains:

- Angular frontend for the web application UI
- ASP.NET MVC + Web API backend for business logic and REST endpoints
- SQL Server database schema and seed scripts
- Role-based access for admin, company, and job seeker users

## Features

- User registration and login
- Job seeker profile management
- Company profile and company registration
- Job posting and management by companies
- Job search and filtering for applicants
- Job application submission and status tracking
- Admin dashboard and monitoring
- Feedback collection and review
- Responsive UI with Bootstrap and Angular

## Tech Stack

### Frontend
- Angular 12
- TypeScript
- Bootstrap
- Font Awesome
- RxJS

### Backend
- ASP.NET MVC 5
- ASP.NET Web API 2
- C# / .NET Framework 4.8
- SQL Server integration

### Database
- Microsoft SQL Server
- Script file: `ICTJOBDB.sql`

## Project Structure

```text
Project_JobPortal/
├── Backend/
│   └── JobApplicationPortalMainProject/
│       ├── App_Start/
│       ├── Controllers/
│       ├── Models/
│       ├── Views/
│       ├── Web.config
│       └── JobApplicationPortalMainProject.csproj
├── Frontend/
│   ├── src/
│   ├── package.json
│   ├── angular.json
│   └── tsconfig.json
├── ICTJOBDB.sql
├── README.md
├── LICENSE
└── .gitignore (if added later)
```

## Prerequisites

Before running the project, install:

- .NET Framework 4.8 / Visual Studio 2019 or later
- SQL Server Management Studio or SQL Server instance
- Node.js 14+ or compatible LTS version
- Angular CLI (`npm install -g @angular/cli@12`)

## Database Setup

1. Open SQL Server Management Studio.
2. Create a database named `ICTJOBDB`.
3. Import or run the script file `ICTJOBDB.sql`.
4. Update the connection string in `Backend/JobApplicationPortalMainProject/Web.config` if needed.

Example connection string:

```xml
<connectionStrings>
  <add name="MyJobDB" connectionString="Data Source=YOUR_SERVER;Initial Catalog=ICTJOBDB;Integrated Security=True" providerName="System.Data.SqlClient"/>
</connectionStrings>
```

## Running the Frontend

From the `Frontend` directory:

```bash
npm install
npm start
```

The Angular app will run on the default Angular development server port, usually:

- http://localhost:4200

## Running the Backend

Open the solution file:

```text
Backend/JobApplicationPortalMainProject.sln
```

Then run the project in Visual Studio using IIS Express or local web server support.

The backend API is built as an ASP.NET MVC/Web API application and communicates with SQL Server using the configured connection string.

## Default Roles

The application is designed around the following user roles:

- Admin
- Company
- Job Seeker

## Notes

- The project appears to be a student/academic project and may require environment-specific configuration for local database and hosting.
- Some paths and database server names in configuration files are machine-specific and may need adjustment for your environment.

## Author / Maintenance

This repository is intended for educational and project-development use. If you are publishing or extending it, update the author and project ownership details as needed.
