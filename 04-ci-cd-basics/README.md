# CI/CD Basics - GitHub Actions & Cypress Integration

This module demonstrates the implementation of **Continuous Integration (CI)** for automated testing. The primary goal was to configure a workflow that automatically executes tests upon every code push to the repository, ensuring early bug detection and stable code delivery.

## Project Objectives

Based on the coursework requirements, this project covers:
* **Workflow Automation**: Setting up **GitHub Actions** to trigger test suites on `push` and `pull_request` events.
* **Environment Configuration**: Defining the CI environment using YAML syntax to manage virtual machine runners.
* **Dependency Management**: Ensuring consistent test runs by leveraging `package.json` and automated environment setup.
* **Status Monitoring**: Integration of GitHub's check runs to provide immediate feedback on build health and test results.

## Technology Stack
* **CI Provider**: GitHub Actions
* **Test Runner**: Cypress
* **Language**: JavaScript / Node.js
* **Config Format**: YAML

## 📁 Folder Structure

* 📁 [**`.github/workflows/`**](./.github/workflows/): Contains the `main.yaml` file, which is the automated pipeline definition.
* 📁 [**`project-manifest/`**](./project-manifest/): Includes `package.json` and `cypress.config.js` used to define the project environment.
* 📁 [**`ci-test-suite/`**](./ci-test-suite/): A lightweight set of Cypress tests used to verify that the CI pipeline executes correctly.

---

## How it Works (CI Pipeline)

The automated process defined in `main.yaml` follows these steps:
1. **Checkout**: The code is pulled from the repository to the GitHub runner.
2. **Setup**: The Node.js environment is initialized on a virtual machine (e.g., Ubuntu).
3. **Install**: Project dependencies are installed automatically via `npm install`.
4. **Execution**: Cypress tests are executed in **headless mode** to verify the application.
5. **Reporting**: Pass/Fail results are reported directly back to the GitHub Actions dashboard.

---

## How to Run the Tests Locally

1.  **Open the Project**: Navigate to the `04-ci-cd-basics` folder in your terminal.
2.  **Install Dependencies**:
```bash
npm install
```
3. **Run Cypress in Headless Mode** (simulating CI):
```bash
npx cypress run
```
4. **Check Workflow Status**: To see the actual CI in action, you can check the "Actions" tab in the GitHub repository where this code is hosted.
