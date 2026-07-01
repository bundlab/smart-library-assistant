# Contributing to Smart Library Assistant

First of all, thank you for your interest in contributing to **Smart Library Assistant**! 🎉

Whether you're fixing bugs, improving documentation, suggesting new features, or enhancing the user experience, your contributions are greatly appreciated. This project is built through community collaboration, and every contribution—large or small—helps make it better.

Please take a few minutes to read this guide before submitting your contribution.

---

# Table of Contents

* [Code of Conduct](#code-of-conduct)
* [Ways to Contribute](#ways-to-contribute)
* [Getting Started](#getting-started)
* [Development Setup](#development-setup)
* [Branching Strategy](#branching-strategy)
* [Coding Standards](#coding-standards)
* [Commit Message Guidelines](#commit-message-guidelines)
* [Testing](#testing)
* [Documentation](#documentation)
* [Submitting a Pull Request](#submitting-a-pull-request)
* [Reporting Bugs](#reporting-bugs)
* [Requesting Features](#requesting-features)
* [Questions and Discussions](#questions-and-discussions)
* [Recognition](#recognition)
* [License](#license)

---

# Code of Conduct

By participating in this project, you agree to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).

Please be respectful, welcoming, inclusive, and professional in all community interactions.

---

# Ways to Contribute

There are many ways to contribute, including:

* Fixing bugs
* Adding new features
* Improving UI/UX
* Enhancing performance
* Improving accessibility
* Writing or improving documentation
* Refactoring existing code
* Adding tests
* Reviewing pull requests
* Suggesting ideas and improvements

Every contribution is valuable.

---

# Getting Started

## 1. Fork the Repository

Click the **Fork** button in the upper-right corner of this repository.

## 2. Clone Your Fork

```bash
git clone https://github.com/bundlab/smart-library-assistant.git
cd smart-library-assistant
```

## 3. Add the Original Repository

```bash
git remote add upstream https://github.com/bundlab/smart-library-assistant.git
```

Verify the remotes:

```bash
git remote -v
```

## 4. Create a New Branch

Never work directly on the `main` branch.

```bash
git checkout -b feature/your-feature-name
```

---

# Development Setup

Install project dependencies:

```bash
flutter pub get
```

Run the application:

```bash
flutter run
```

Run static analysis:

```bash
flutter analyze
```

Format the code:

```bash
dart format .
```

Run tests:

```bash
flutter test
```

---

# Branching Strategy

Please create a dedicated branch for every change.

Examples:

```
feature/login-screen
feature/book-search

bugfix/search-crash
bugfix/null-pointer

docs/update-readme
docs/contributing

refactor/database-service

test/add-widget-tests

chore/update-dependencies
```

Avoid committing directly to `main`.

---

# Coding Standards

Please follow these guidelines:

* Write clean and readable code.
* Keep functions focused and concise.
* Use meaningful variable and method names.
* Remove unused code before submitting.
* Follow Dart and Flutter style guidelines.
* Keep files organized.
* Prefer reusable widgets over duplicated code.
* Add comments only when they improve understanding.
* Keep commits focused on a single purpose.

Always run:

```bash
dart format .
flutter analyze
flutter test
```

before opening a Pull Request.

---

# Commit Message Guidelines

Use clear and descriptive commit messages.

Examples:

```text
feat: add book recommendation feature

fix: resolve login authentication bug

docs: update installation guide

style: format source code

refactor: simplify search service

test: add widget tests for home screen

chore: update project dependencies
```

Recommended commit types:

* feat
* fix
* docs
* style
* refactor
* test
* chore
* ci
* perf

---

# Testing

Before submitting your contribution:

* Ensure the project builds successfully.
* Run all available tests.
* Verify your feature works as expected.
* Confirm no existing functionality is broken.
* Add tests whenever possible.

---

# Documentation

Documentation is just as important as code.

Please update documentation whenever you:

* Add a new feature
* Modify existing behavior
* Change configuration
* Introduce new dependencies
* Update installation steps

Documentation improvements are always welcome.

---

# Submitting a Pull Request

Before opening a Pull Request:

* Sync your branch with the latest `main`.
* Resolve merge conflicts.
* Run formatting and analysis tools.
* Ensure tests pass.
* Update documentation if necessary.

When creating a Pull Request:

* Use a clear and descriptive title.
* Explain the purpose of your changes.
* Reference related issues using keywords like `Fixes #123`.
* Include screenshots for UI changes when appropriate.
* Keep Pull Requests focused on a single feature or fix.

After submitting:

* Participate in code review discussions.
* Address requested changes promptly.
* Be respectful during the review process.

---

# Reporting Bugs

When reporting a bug, please include:

* Operating system
* Flutter version
* Device information
* Steps to reproduce
* Expected behavior
* Actual behavior
* Error messages or logs
* Screenshots (if applicable)

A well-written bug report helps us resolve issues faster.

---

# Requesting Features

Feature requests are welcome.

Please include:

* A clear description of the problem.
* Your proposed solution.
* Alternative solutions considered.
* Any additional context or mockups.

Explain how the feature would benefit users.

---

# Questions and Discussions

If you have questions:

* Open a GitHub Discussion (if enabled).
* Create an Issue for clarification.
* Participate respectfully in community conversations.

We encourage constructive feedback and open collaboration.

---

# Recognition

Every contributor is appreciated.

Whether you submit code, documentation improvements, bug reports, feature suggestions, or reviews, your contributions help make Smart Library Assistant better for everyone.

Thank you for being part of our community! ❤️

---

# License

By contributing to this project, you agree that your contributions will be licensed under the same license as this repository.
