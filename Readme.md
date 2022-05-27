



# About The Project
Used Spring Boot as a Backend and created some Rest API's through which Mysql fetched the datas, whereas also used Angular CLI 13 as a frontend along with it tested the backend with Junit whereas frontend with Jasmine and Karma also gave a sweet touch of Bootstrap and Css inorder to beautify the web page. Along with it generated a JAR through maven build and integrated Github with Jenkins. 

## Home
The Server is running on http://localhost:4200/ in which the backend of the project i.e-Spring is integrated with it. 

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104726.jpg)
![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104738.jpg)


## Get Started
These are some of the navigation buttons through which we can get redrected to different pages. And these buttons are routed through angular using their component class paths.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104759.jpg)
On selecting the dropdown we can generate a number of cards of a list of doctors. The details of the doctor are imported dynamically, once we review the add doc page.
![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104809.jpg)


## Add a Patient....!
On adding a patient in these fields, the datas will be migrated to the mysql database which's running on localhost:3306 and these datas will be displayed dynamically on Patient's Info page.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104823.jpg)
## Add a Doctor....!
On adding a doctor in these fields, the datas will be migrated to the mysql database which's running on localhost:3306 and these datas will be displayed dynamically on Doctor's Info page as well as on all the dropdowns where we can search a doctor by name and also in the add patient's tab where we can display a list of doctors in a dropdown.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104836.jpg)
## DoctorLists....!
These are the list of Doctors

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104850.jpg)
## PatientLists....!
These are the list of Patients

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104901.jpg)
## Doctor's Prescription
This's the doctor's prescription where the doctor can prescribe a medicine for someone's use and also upload it in drive for the patients.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20104920.jpg)
## Database of Doctor's Info....!
A list of doctors are visible in this page with their specialization field.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20105007.jpg)

## Database of Patient's Info....!
A list of patients are visible in this page with their respective prescription. Even though the receptionists checks for the required patient on a particular ID then he/she can search here using this search box.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20105612.jpg)

## API Testing of Request Response via Postman....!
API testing is done inorder to check a proper request response cycle and that too in a partuclar ID.
Here GET's are done inorder to check the list of JSON entities are available or not.And incase of POST we need to add a raw JSON data to check whether the lifecycle is working properly or not.If it returns 200 or 201 as the Gateway response then its good. Regardless this if we face anuthing othes then it wont do.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20105646.jpg)
![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20105709.jpg)
## Junit Testing

Junit Test is done to properly check whether all the REST API's are giving the desired and actual output or not. The assert methods are used inorder to check the actual output with the expected output.
![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20110515.jpg)

## Maven Jar Build
In the POM.XML we need to use a maven plugin.This JAR file is created inorder to deploy an entire application, including its classes and their associated resources, in a single request.

![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20144403.jpg)
![preview of code](https://github.com/SP2224/Hospital-Management-System/blob/main/Screenshots/Screenshot%202022-05-27%20144529.jpg)
