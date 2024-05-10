<center>

# FINAL REPORT
***

</center>

<right>


***Author(s): Andrés González and Kelpy Gómez***  
***Date: 10th of May, 2024***  
***Supervisor: Alejandro Martín Zarza***



</right>

<center>

# TABLE OF CONTENTS

</center>

1. [***INTRODUCTION.***](#id1)
2. [***TECHNOLOGIES USED.***](#id2)
3. [***WEB STYLE GUIDE.***](#id3)
4. [***RESEARCH.***](#id4)
5. [***COPYRIGHT.***](#id5)
6. [***RISKS AND MEASURES.***](#id6)
7. [***SCOPE COMPLIANCE LEVEL.***](#id7)
8. [***TIME COMPLIANCE LEVEL.***](#id8)
9. [***COST COMPLIANCE LEVEL.***](#id9)
10. [***CLAUSES.***](#id10)
11. [***FINAL PRODUCT.***](#id11)
12. [***LESSONS LEARNED FOR FUTURE PROJECTS.***](#id12)
13. [***CONCLUSIONS, COMMENTS, AND FINAL EVALUATION.***](#id13)


### 1. INTRODUCTION. <a name="id1"></a>

This document serves as the final report for the project, providing a comprehensive overview of its development, implementation, and outcomes. The primary aim of this report is to summarize the project's objectives, methodologies, results, and conclusions. It outlines the scope of the project, the technologies used, compliance with project timelines and budgets and any challenges encountered during the development process. Additionally, it highlights the lessons learned from the project and offers recommendations for future endeavors.

### 2. TECHNOLOGIES USED. <a name="id2"></a>

During the project development, the following technologies were used:
- Back-end: Python with Django framework.
- Front-end: Angular with Ionic.
- Design and Style: Bootstrap.
- Integrated Development Environment (IDE): Visual Studio Code.

Regarding the specific versions of software used:

- Python (Django): The latest available version was used.
- Angular (Ionic): The latest available version was used.
- Bootstrap: The latest available version was used.
- Visual Studio Code: The latest available version was used.

For the production phase, a virtual machine on Azure will be required to host the web application.

### 3. WEB STYLE GUIDE. <a name="id3"></a>

The web style guide outlines the aesthetic and functional principles that govern the design and user experience of the website. It encompasses the visual elements, such as color schemes, typography, layout, and imagery, as well as the overall user interface and interaction design. The goal of the style guide is to ensure consistency, coherence, and usability across all pages and components of the website. By adhering to these guidelines, the website will not only be visually appealing but also intuitive and easy to navigate for users.

The most important styles are defined in the general CSS file to ensure consistency and uniformity across the website. These styles govern the design of buttons and their animations, page headers, and the logo.

- The primary color palette consists of #3d3c3d as the dominant color, contrasted with #0aff8a. These colors are used throughout the website to maintain visual coherence and branding.

![Work It Out](https://github.com/kelpygomez/Work-it-out/assets/113540080/a97d1a8a-809f-4d68-85b2-af63e18fb3cc)

- The predominant typeface used across the website is Helvetica Now. This font provides a clean and modern aesthetic, enhancing readability and visual appeal.

![1_KPOopPbI8Zcz9kAx-nu5bQ](https://github.com/kelpygomez/Work-it-out/assets/113540080/aff78e09-864d-4ef9-a007-44406bc2fda6)

- Measurements are specified in viewport height (vh) units to ensure responsiveness and adaptability of elements across different screen sizes. This approach allows for seamless rendering of content on various devices and resolutions.

![images](https://github.com/kelpygomez/Work-it-out/assets/113540080/85799a7b-c7b0-4751-9a58-86ce9dd0a42e)

- To ensure a more intuitive and interactive user experience on the website, we utilize the SweetAlert2 package. This package, integrated into Ionic, enhances user interaction by providing visually appealing and customizable alert dialogs. These alerts improve user engagement and contribute to a smoother browsing experience.

![img_2](https://github.com/kelpygomez/Work-it-out/assets/113540080/d051240b-d51f-41cd-8f01-408046e00f31)


### 4. RESEARCH. <a name="id4"></a>

During the project development, research was conducted in various key areas to ensure efficiency and optimal functionality of the web application. The main areas of research included:
Routine Programming Algorithms: Efficient algorithms for generating and organizing personalized training routines were investigated. Different approaches were explored to allow users to create and modify their routines intuitively and effectively.

#### Database and Application Architecture: 
Comprehensive research was conducted on best practices in database design to efficiently and securely store routine information. Additionally, different web application architectures were investigated to ensure optimal performance and scalability as the application grows.

#### User Interface and User Experience (UI/UX): 
Detailed research was conducted on current trends in user interface and user experience design to ensure that the application was intuitive and easy to use. Usability tests were conducted to identify and address any potential areas of improvement in the user interface.

#### Integration of Front-end and Back-end Technologies: 
Best practices in integrating front-end (Angular with Ionic) and back-end (Python with Django) technologies were researched to ensure smooth communication between different components of the application.

Although most of the research was successful on the first attempt, there were some developments that needed to be adjusted or refined to meet the expected standards of quality and functionality. For example, the initial implementation of certain routine programming algorithms required additional adjustments to optimize performance and accuracy of exercise recommendations.


### 5. COPYRIGHT. <a name="id5"></a>

All audiovisual files used in this project are sourced from Pexels.com. Pexels offers high-quality stock photos and videos under the Creative Commons Zero (CC0) license. This license allows for the free and unrestricted use, modification, and distribution of the content, even for commercial purposes, without requiring attribution to the original creator.

The logo used in this project is custom-designed by our team and is therefore the sole property of Work it Out. It is protected under applicable copyright laws.

- <b>SweetAlert2:</b> SweetAlert2 is distributed under the MIT License. This license permits the use, modification, and distribution of the software, including for commercial purposes, provided that the original copyright notice and disclaimer are included in all copies or substantial portions of the software.

- <b>Ionic Framework:</b> Ionic Framework is an open-source software development kit (SDK) licensed under the MIT License. This license allows developers to freely use, modify, and distribute the framework, even for commercial purposes, subject to certain conditions such as including the original copyright notice in all copies or substantial portions of the software.

### 6. RISKS AND MEASURES. <a name="id6"></a>

#### Token Management and Working with APIs:
During the project development, one of the significant challenges was token management and interaction with APIs, especially when working with two different technologies for the front-end and back-end. Proper token management is crucial to ensure the security and integrity of the application. To address this issue, the following measures were taken:
- Comprehensive research was conducted on best practices for handling authentication tokens in web applications.
- Encryption and security techniques were implemented to protect the token during transmission and storage.
- Clear communication protocols were established between the front-end and back-end to ensure efficient token management and secure user authentication.

#### Database Design and Iterative Changes:
Database design presented additional challenges due to iterative changes in project requirements and the emergence of issues during development. This aspect of the project required flexibility and adaptability to ensure that the database structure could meet the changing needs of the application. To address this issue, the following measures were implemented:
- An iterative design process was established to allow adjustments and modifications to the database structure as needed.
- Open and collaborative communication was maintained between the development team and project stakeholders to identify and address changes in database requirements in a timely manner.
- Advanced data modeling tools were used to visualize and plan the database structure, facilitating early identification of potential issues and implementation of efficient solutions.

#### Creating a Responsive Page:
Creating a responsive webpage that optimally adapts to different devices and screen sizes was another significant challenge during project development. Ensuring a consistent and high-quality user experience on all devices is essential for the success of the application. To address this challenge, the following measures were implemented:
- A responsive design methodology was used to create a flexible and adaptable user interface that automatically adjusts to different screen resolutions.
- Comprehensive testing was conducted on a variety of devices and browsers to ensure that the webpage rendered correctly on all platforms.
- Modern web design techniques, such as media queries and grid layout, were used to optimize the layout and style of page elements based on screen size.
These measures successfully overcame the mentioned challenges and ensured the successful development of the web application.


### 7. SCOPE COMPLIANCE LEVEL. <a name="id7"></a>

We have successfully implemented approximately 90% of the planned functionalities for the website, which include:

- Routine Maker: Users can create personalized exercise routines tailored to their fitness goals and preferences.

- Calendar Routine Tracker: The website features a calendar-based routine tracker that allows users to schedule and track their workout sessions over time.

- Exercise Database: An extensive database of exercises is available for users to choose from when creating their workout routines.

- Personal Account with Editable Profile: Users can register personal accounts on the website, with the ability to edit their profiles and customize their preferences.

However, due to time constraints and resource limitations, we were unable to implement the remaining 10% of functionalities as originally planned. This includes features such as a community platform with the ability to follow and be followed back, share workout routines, and view other users' routines. Instead, we substituted this functionality with a BMI (Body Mass Index) calculator, which provides users with valuable information about their health and fitness status.

### 8. TIME COMPLIANCE LEVEL. <a name="id8"></a>

During the project development, the established planning in terms of time was closely followed. Overall, most of the milestones and deadlines initially defined were achieved, demonstrating a solid commitment from the development team and effective time management in the academic environment.

However, some factors contributed to minor deviations in the planning:

Technical Complexity: Some technical tasks proved to be more challenging than initially anticipated, such as integrating front-end and back-end technologies. This required additional time to resolve technical issues and ensure compatibility between different components of the system, which slightly impacted the project's timeline.

In summary, although there were some minor deviations in the planning due to technical complexity and changes in academic requirements, the project was developed within the general timeframe initially established for a class project, thanks to the flexibility and commitment of the academic development team.

### 9. COST COMPLIANCE LEVEL. <a name="id9"></a>

To maintain adherence to the project's budget and prevent cost overruns, we have devised the following strategies:

 - Performance Evaluation: Rigorous testing will be conducted across various devices and browsers to evaluate the website's loading speed and visual presentation. By identifying and addressing any performance bottlenecks, we aim to optimize user experience while minimizing unnecessary costs associated with inefficient resource utilization.

 - Continuous Monitoring: We will establish monitoring mechanisms to track ongoing expenses and ensure that expenditures remain within budgetary constraints. Regular reviews of project finances will enable us to promptly identify and address any deviations, thus maintaining financial stability throughout the project lifecycle.

 - Efficiency Measures: Implementing efficient coding practices and resource management techniques will be prioritized to minimize unnecessary costs associated with excessive resource consumption. By optimizing resource utilization, we can maximize the value derived from available resources while minimizing overall project expenses.

 - Future Planning: Anticipating potential cost implications of future developments and incorporating contingency measures into our financial planning will help mitigate unforeseen expenses and ensure continued cost compliance. Proactive planning and risk management strategies will enable us to adapt to evolving project requirements while remaining within budgetary constraints.

### 10.  CLAUSES. <a name="id10"></a>

To manage situations such as project delays, quality control, and other relevant aspects, the following clauses and agreements were established within the project development team:

#### Project Delays:

It was agreed that any delay in the delivery of tasks or project modules should be communicated to the team in a timely manner.
A contingency plan was established to address possible delays, including task redistribution and allocation of additional resources if necessary.
It was agreed that significant delays in task delivery could affect the project evaluation and would require adequate justification from the team.

#### Quality Control:

A code review and validation process was defined to ensure quality and consistency in project development.
Comprehensive testing of each implemented functionality was agreed upon to identify and correct potential errors or flaws.
A protocol was established to document and manage quality issues detected during project development, ensuring timely resolution.

#### Communication and Collaboration:

It was agreed to maintain open and regular communication among all team members, using collaboration tools such as emails and periodic meetings.
A dedicated communication channel was established to report and discuss any project-related issues or doubts.

#### Evaluation and Feedback:

It was agreed to conduct periodic evaluations of project progress, providing constructive feedback to each team member.
A process was established to collect and consider improvement suggestions from both the team and project supervisors.
These clauses and agreements were fundamental to ensure efficient and successful development of the academic project, promoting transparency, collaboration, and quality at all stages of the process.


### 11.  FINAL PRODUCT. <a name="id11"></a>

The final product is a comprehensive web application designed to streamline fitness routines and promote a healthier lifestyle. Leveraging cutting-edge technologies and intuitive user interfaces, the application offers a range of features tailored to meet the diverse needs of users. 

Before diving into the detailed description of the application's features, it's important to highlight that users have access to two key functionalities even without registering: the exercise database and the BMI calculator. These features are available to all visitors of the website, providing valuable resources for anyone interested in fitness and health.

Upon registration, users unlock additional features and benefits, enhancing their overall experience with the application. Here's an overview of the added functionalities exclusive to registered users:

- <b>Routine Maker:</b> Registered users gain access to the Routine Maker tool, empowering them to create personalized workout routines tailored to their specific fitness goals and preferences. With an extensive library of exercises and intuitive customization options, users can design effective workout plans that align with their individual needs. 

- <b>Calendar Routine Tracker:</b> The Calendar Routine Tracker enables users to schedule and track their workout routines over time. By logging their exercises and monitoring their progress on a visual calendar interface, users can stay organized, motivated, and accountable on their fitness journey.

- <b>Personal Account with Editable Profile:</b> Registered users have the ability to create and manage their personal accounts, where they can customize their profiles with information such as fitness goals, exercise preferences, and progress tracking. This personalized dashboard serves as a central hub for users to monitor their fitness journey and stay engaged with the application.

By registering for an account, users unlock a wealth of features designed to optimize their fitness experience and support them in achieving their health and wellness goals. From creating custom workout routines to tracking progress and accessing valuable health insights, the application offers a comprehensive suite of tools and resources to empower users on their fitness journey.

### 12.  LESSONS LEARNED FOR FUTURE PROJECTS. <a name="id12"></a>

In the course of this project's development, we've gleaned some valuable insights that will undoubtedly shape our approach to future endeavors. Foremost among these is the recognition of the critical role played by meticulous planning. Establishing clear objectives, defining milestones, and thoughtfully allocating resources right from the project's inception can mitigate potential delays and deviations down the line.

Additionally, effective communication emerged as a cornerstone for success. Ensuring transparent and open channels of communication among team members and project stakeholders alike is paramount. Strengthening our communication protocols and tools will foster better collaboration and alignment moving forward.

Another key takeaway was the importance of managing expectations. Whether it's team members, supervisors, or end users, setting and managing realistic expectations throughout the project lifecycle is essential. Proactively addressing changes and challenges as they arise calls for a flexible and adaptable approach.

Moreover, the journey underscored the value of continuous learning. Embracing ongoing education and skill development not only enhances technical proficiency but also fosters growth in project management capabilities. Investing in team training and professional development will remain a priority to keep abreast of industry trends and best practices.

These insights collectively serve as guiding principles for our future academic pursuits, laying a solid groundwork for excellence in software development and project management.

### 13.  CONCLUSIONS, COMMENTS, AND FINAL EVALUATION. <a name="id13"></a>

In conclusion, the development of this application has been an exciting journey towards creating a comprehensive platform for health and fitness tracking and improvement. Throughout the process, we have faced various challenges and applied innovative solutions to provide a unique and effective user experience.

The application has successfully covered a wide range of functionalities, from creating personalized routines to tracking progress and exploring an exercise database. The inclusion of the BMI calculator provides an additional tool for assessing users' health and fitness, significantly complementing the existing features.

While we have achieved a high degree of compliance in terms of implemented functionalities, we recognize that there is still room for improvement and future iterations. The community functionality, although not implemented in this version, remains an important aspiration to foster interaction among users and promote a sense of community around fitness and wellness.

Regarding the final assessment, we are pleased with the outcome achieved and confident that the application will provide significant value to our users. We will continue to work on future updates to further enhance and enrich the user experience, maintaining our commitment to delivering a quality platform that inspires and motivates people to achieve their health and fitness goals.
