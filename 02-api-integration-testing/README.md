# API Integration Testing - Cypress & httpbin.org

This section of the repository focuses on automated API testing using the **Cypress** framework. The primary goal was to demonstrate the ability to interact with various HTTP endpoints, handle asynchronous requests, and validate data integrity.

## 🎯 Project Objectives

Based on the coursework requirements, this module demonstrates:
* **HTTP Method Coverage**: Implementation of tests for `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.
* **Dynamic Header Management**: Testing both standard (e.g., `User-Agent`) and custom headers.
* **Query Parameters**: Sending and validating static and randomized query parameters.
* **Response Validation**: Asserting correct status codes and verifying the integrity of the response body.
* **Performance Testing**: Measuring and asserting response duration (Time-to-First-Byte and total duration).

## 💻 Testing Environment

The tests are executed against the [httpbin.org (https://httpbin.org/#/) public service. This platform allows for comprehensive testing of various HTTP request and response scenarios in a controlled, public environment.

## 📁 Folder Structure

To show a clear progression in testing complexity, the files are organized as follows:

*  📁 **`01-basic-api-scripts/`**: Initial API test scripts covering basic request/response flows (e.g., `httpAPI.cy.js`).
*  📁 **`02-advanced-api-tests/`**: Tests utilizing the `fixtures/` directory to manage external JSON data for complex request bodies.
*  📁 **`03-api-performance-and-config/`**: Configuration files and custom commands within the `support/` directory to optimize the API testing framework.

---

## 🚀 How to Run the Tests

Follow these steps to set up the environment and run the API automation suite:

1. **Open the Project**: Launch Visual Studio Code, go to File > Open Folder..., and select the directory containing all the project files.
2. **Open Terminal**: Open the built-in terminal by going to View > Terminal or using the shortcut Ctrl + `.
3. **Install Cypress**: Before running the tests, you need to install the dependencies. Type the following command in the terminal and press Enter:
```bash
npm install
```
4. **Launch Cypress**: Open the Cypress Test Runner by executing:
 ```bash
npx cypress open 
```
5. **Run Specs**: In the Cypress UI, select "E2E Testing", choose your browser, and click on the httpAPI.cy.js file to start the execution.