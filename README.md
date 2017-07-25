# YANA Design Documentation (Aboriginal Language Learning APP)


## Table of Contents
1. [Application Brief](#application-brief)
2. [Client Interaction](#client-interaction)
3. [Technology Stack](#technology-stack)
4. [Plugins and Packages YARN Package Management](#plugins-and-packages-yarn-package-management)
5. [Design and Planning Process](#design-and-planning-process)
    
    5.1 [White Board Brain Storming](#white-board-brain-storming)
    
    5.2 [User Stories](#user-stories)
   
    5.3 [User Experience UX Flow](#user-experience-us-flow)
    
    5.4 [Wireframe Mockup](#wireframe-mockup)
    
    5.5 [Style Guide](#style-guide)
   
    5.6 [Project Management](#project-management)
    
6. [Application Content](#application-content)
    
    6.1 [Front-end](#front-end)
   
    6.2 [Back-end](#back-end)
    
7. [Live Application Address](#live-application-address)
8. [Additional Features to be followed](#additional-features-to-be-followed)
9. [Outstanding Issues](#outstanding-issues)


### Application Brief
This is an online app for learning Aboriginal languages sponsored by the Victorian Aboriginal Corporation for Languages (VACL). The VACL staff and volunteers helped build the Yana app content to make indigenous languages more fun to learn. For more details please visit the VACL page. 
- - - -

### Client Interaction
![interaction png](https://user-images.githubusercontent.com/22834712/28507972-49885fbe-707a-11e7-996a-4a8cb0dc9bec.jpg)
**Figure 1**: Client Interaction

The VACL was approached via email to discuss the language application idea to help the Aboriginal community learn their languages by providing them a mobile learning tool. A meeting with the VACL CEO, Paul Paton, soon followed where the idea was presented to him and with his approval he allowed us to seek permission by the Boonwurrung and Woiwurrung tribes to host their languages on the app as a pilot project.

Several weeks were given to produce a minimum viable product (MVP). Throughout the interaction activities, several meetings were held to discuss the application design and to obtain feedbacks. Data used in this application were also provided by VACL.


[Back to Top](#table-of-contents)
- - - -

### Technology Stack
- Node JS
- React JS
- Express JS
- MongoDB

### Plugins and Packages *YARN Package Management*
- React create-app APPNAME
- React-router v4
- Nodemon
- React-bootstrap
- Auth0
- Passport / JWT
- Axios
- Mosaic Audio
- Underscore
- Lodash
- Dotenv
- Mongoose
- NOW Depoy / Hosting

For more details, please refer to package.json file for dependencies installed 


[Back to Top](#table-of-contents)
- - - -

### Design and Planning Process
#### White Board Brain Storming
Before we started diving into coding and programming the learning application, various ideas focusing on design and user experience were taken into consideration. For example, DuoLingo and Babel applications were used for inspirational ideas, all thoughts were whiteboarded  and discussed.
![whiteboard](https://user-images.githubusercontent.com/22834712/28507813-001c5426-7079-11e7-852d-32ce24ed69a1.png)
**Figure 2**: Brain Storming Activity

#### User Stories
The following were some of the stories used to build the application features.
- In order to learn another language, I want to listen how the words are pronounced.
- In order to learn about Australian Aboriginal Culture, as a Student I want to know some aboriginal words.
- As someone that is learning the Aboriginal language, I want to be able to connect with others that are doing the same.
- As student, I want to be able to see the progress I'm making in the course.

#### User Experience *UX* Flow 
![vacl user flow](https://user-images.githubusercontent.com/25757504/27676878-04aadcc2-5cf3-11e7-93c2-119a78b1b613.jpg)
**Figure 3**: User Experience Flow Diagram

#### Wireframe Mockup
The wireframe design for the application was accomplished using FIGMA, it being an online collaboration design tool. Most of the mockup was designed based on mobile first philosophy. Design iteration was based on cultural colours and their significant design sketches were identified as seen in the following figure.  
![wireframe](https://user-images.githubusercontent.com/22834712/28508044-1f15ada8-707b-11e7-874d-e329ab09a008.png)
**Figure 4**: Wireframe Mockup and Design

#### Style Guide
The style guide for this application is simple. A total of 6 different colors and one family font was used throughout the mockup design. Please refer to following figure for detailed style guides.
![style](https://user-images.githubusercontent.com/22834712/28508295-60becd00-707d-11e7-9d22-6a209197cc47.png) 

**Figure 5**: Wireframe and Application Style Guide

#### Project Management
The project management was executed using Trello Board, Github Organisation for source control and Slack for immediate team collaboration. These tools played a big part in holding all the pieces of the project contribution together, all the tools in unison helped the contributors communicate effectively. Please refer to following link to view the Trello Board maangement contents.
https://trello.com/b/AsPE7dTZ/vacl


[Back to Top](#table-of-contents)
- - - -

### Application Content
#### Front-end
![components](https://user-images.githubusercontent.com/22834712/28509201-e04e972a-7083-11e7-89ad-ad17eb4d4142.png)

**Figure 6**: React-app Components

The above figure showed some of the components concept that were integrated into the application. The idea is to break down the application systems into smaller, more modular/reusable parts that can bring us huge benefits and allow for more unity between design and development in the long term. For example, The Navigation Bar and the Footer that were used throughout the entire application.

Another modular/usable component is the button, where it encapsulate the functionality within themselve and provide a different way of implementation. For example, a button is used for links and change state of the components.


[Back to Top](#table-of-contents)
- - - -

#### Back-end
![mongodb](https://user-images.githubusercontent.com/22834712/28509456-c68638f0-7085-11e7-9c56-ec24e9f0a188.jpg)
**Figure 7**: MongoDB Schema

MongoDB Mlab was used to store all required application data. The MongoDB schema as depicted in figure 7 is implemented to serve as a reference when building the backend Node/Express server. This schema is also implemented in a way so that future courses and languages importation into the application could be performed seamlessly.


[Back to Top](#table-of-contents)
- - - -

#### Live Application Address
https://yana.now.sh
- - - -

#### Additional Features to be followed
- Avatar Image Selection within the User Profile
- Point System within the User Profile
- Badges Accumulation based on Points generated from enrolled courses
- Administration dashboard for application owner to control contents
- - - -

#### Outstanding Issues
- Google Map API Key replacement
- Contact Form warnings
- Refactoring andRenaming of certain contents


[Back to Top](#table-of-contents)
