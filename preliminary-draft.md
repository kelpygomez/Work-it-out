<div align="center">

# PRELIMINARY DRAFT:
## WORK IT OUT 

</div>

<div align="center">
<img src="/img/work.png" />
</div>


## Index

1. [IDENTIFICATION](#id1)
2. [GOALS](#id2)
3. [PRELIMINARY ANALYSIS OF THE EXISTING](#id3)
4. [PRELIMINARY ANALYSIS OF THE SYSTEM](#id4)
5. [PRELIMINARY DESIGN OF THE SYSTEM](#id5)
6. [COST ESTIMATES](#id6)



### 1. IDENTIFICATION <a name="id1"></a>


+ Project name: <b>'Work it out'</b>
+ Students: Kelpy Gómez & Andrés González 
+ Course: 2º CFGS DAW
+ Tutor: Alejandro Martín Zarza

### 2. GOALS <a name="id2"></a>

> To deploy a web application focused on the sports field which consists in a workout diary and gym-routine maker, as well as a source of information for users to learn about different exercises and how to implement them in their daily workouts.<br>
> The main functionalities of <b>Work it Out</b> are: <br>
>  • A dashboard designed as a calendar where the user tracks its workouts. <br>
>  • A page that displays different exercises, followed by their description, a quick guide and many other specifications. <br>
>  • The 'routine maker', a tool that will be used to create routines by adding exercises and their number of series and repetitions. It will also check the compatibility between the chosen exercises. <br>
>  • Users will have a public profile where they will be able to post their routines and follow (or be followed by) other users. <br>

### 3. PRELIMINARY ANALYSIS OF THE EXISTING <a name="id3"></a>

>There's no footage of similar applications on the internet, mainly because most of them are focused on a specific workout modality, such as running, or they are meant to be used while the user trains.

### 4. PRELIMINARY ANALYSIS OF THE SYSTEM <a name="id4"></a>

>Dashboard (Training Calendar):<br>
- Track daily workouts through an intuitive calendar view.
>Exercise Page:<br>
- Display detailed exercise descriptions and quick guides.
>Routine Maker:<br>
- Enable users to create custom workout routines with exercise sets and repetitions.
>User Profiles:<br>
- Provide public profiles for users to share and follow workout routines.
>Content Management:<br>
- Manage exercises, routines, and user profiles efficiently.
>Security and Privacy:<br>
- Ensure data security and user privacy with authentication and encryption.
>UI/UX Design:<br>
- Create a user-friendly interface for seamless navigation and accessibility.

### 5. PRELIMINARY DESIGN OF THE SYSTEM <a name="id5"></a>
>Frontend (Angular):<br>
- Develop a responsive single-page application (SPA) using Angular.
- Implement components for the dashboard, exercise pages, user profiles, and routine generation.
>Backend (Django):<br>
- Use Django framework to build the backend server.
- Implement RESTful APIs using Django Rest Framework (DRF) for user authentication, exercise management, and routine generation.
>Database (PostgreSQL):<br>
- Utilize PostgreSQL for storing structured data.
- Design normalized database schemas for exercises, user profiles, and routines.
>Authentication and Authorization:<br>
- Implement JWT-based authentication with DRF JWT for secure user authentication.
- Define role-based access control (RBAC) for user permissions.
>Third-party Integrations:<br>
- Integrate third-party APIs for additional exercise data or social features.
>Security Measures:<br>
- Implement HTTPS encryption and input validation to ensure data security.

### 6. COST ESTIMATES <a name="id6"></a>
>Temporal Estimate:
- Development Time: 
  - Frontend (Angular): 2-3 weeks
  - Backend (Django): 3-5 weeks
  - Database Setup (PostgreSQL): 1 week
  - Integration and Testing: 2 weeks
- Documentation Preparation: 1 week

Total Estimated Time: 12 weeks

>Economic Estimate:
- Hardware Costs:
  - Dedicated Server: Free

- Software Costs:
  - Angular and Django Frameworks: Free (open-source)
  - Third-party Tools and Libraries: Free (open-source)

- Personnel Costs:
  - Developer Salaries: not hiring external staff.

- Training Costs: each member dedicates its own time.

- Miscellaneous Costs:
  - Office Space/Utilities: Work from home

Total Estimated Economic Investment: Variable, depending on specific requirements and circumstances.
