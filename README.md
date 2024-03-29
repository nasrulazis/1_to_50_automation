# 1 to 50 auto completion

<img src="https://cdn.pulse2.com/cdn/2020/12/Cypress.png" alt="Cypress Logo" width="60" height="60">
<!-- ![Cypress Logo](https://cdn.pulse2.com/cdn/2020/12/Cypress.png) -->

## Overview

This repository contains the Cypress test suite for the 1 to 50 web clicker, developed by M Nasrul Azis. Cypress is a powerful end-to-end testing framework that makes it easy to write and execute reliable tests for web applications

```javascript Code Overview
describe('template spec', () => {
  it('autofinish', () => {
    cy.visit('');
    for (let i = 1; i < 51; i++) {
      cy.get('.grid > div').contains(new RegExp(`^${i}$`)).click({ force: true });
    }
  });
});
```


## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/nasrulazis/1_to_50_automation.git
2. Navigate to the project folder:
    ```bash
   cd 1_to_50_automation
3. Install dependencies:
   ```bash
   npm install
