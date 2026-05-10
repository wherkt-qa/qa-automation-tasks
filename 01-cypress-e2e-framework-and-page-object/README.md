#  Cypress E2E Testing Framework & Page Object Pattern

This section demonstrates my progress in web automation, moving from basic script creation to professional framework architecture using **Cypress**.

---

## 📁 Folder Structure

### 📁 [01-basic-scripts](./01-basic-scripts)
* **Focus**: Fundamentals of Cypress syntax and command execution.
* **Contents**: Initial test scripts with hardcoded selectors (e.g., `firstTest.cy.js`) and visual evidence of the development environment setup.

### 📁 [02-page-object-pattern-implementation](./02-page-object-pattern-implementation)
* **Focus**: Advanced test architecture and code maintainability.
* **Contents**: Implementation of the **Page Object Pattern (POP)**. This includes a dedicated `pages/` directory containing class definitions for different views (Login, Home) to separate test logic from UI selectors.

### 📁 [03-advanced-examples-and-fixtures](./03-advanced-examples-and-fixtures)
* **Focus**: Data-Driven Testing and complex assertions.
* **Contents**: Usage of **Fixtures** (`.json` files) to manage test data externally, ensuring scripts are reusable and clean.

---

## Key Skills Demonstrated
* **E2E Testing**: Automating full user flows (Login, Navigation).
* **Page Object Model (POM)**: Structuring code for high maintainability.
* **Asynchronous Commands**: Handling Cypress chain of commands and assertions (`should`, `expect`).
* **Environment Management**: Configuring Cypress for different testing scenarios.

---

## How to Run

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
5. **Run the Test**: In the "Specs" tab, locate the file named `login.cy.js` (found in the `e2e/` directory) and click on it.

### What the Test Does:
The script automates the login process on **GoIT Global**. It demonstrates the use of the **Page Object Pattern** by:
* Navigating to the login page.
* Interacting with elements defined in the `pages/` directory.
* Verifying successful authentication and the subsequent logout flow.
