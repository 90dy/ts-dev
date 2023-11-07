# Typescript Dev Config

Simplify Your TypeScript Configuration with `90dy` - No Over-Engineering Required!

## Introduction

In the world of software development, the focus should be on writing code and creating innovative solutions, not grappling with complex configurations. That's where `90dy` comes in. This package is designed to provide developers with an optimized and hassle-free environment to enhance their productivity, all without requiring an in-depth understanding of the configuration intricacies.

## Philosophy

### Linter (ESlint)

We understand the importance of code quality, and that's why `90dy` includes a custom ESLint configuration that we use during development, especially within the VSCode ecosystem. Notably, this configuration retains unused imports until you push your changes to the repository. This approach ensures that developers won't have to reimport everything every time an auto-save operation removes imports, streamlining your development process.

### Formatter (ESlint, Prettier, Editor config, ...)

Our opinionated choices are aimed at simplifying your development workflow.

#### No Semicolons 🚫

At `90dy`, we've worked in environments that required semicolons, but we believe that they add unnecessary complexity. Semicolons can prevent your linter and code formatter from working seamlessly when copying and pasting code or working with function arguments and JSX children. We challenge you to convince us that they improve readability or optimize transpilation.

#### Tabs Over Spaces ✅

Check out [Nobody talks about the reason to use tabs](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/) to put an end to the debate. We opt for tabs for practical reasons.

#### Single Quotes ✅

Because simplicity often leads to elegance, even in JSX.

#### Sorted Imports ✅

Your imports should always be sorted and automatically removed when they're unused.

### Versioning

`90dy` follows a semantic release strategy to ensure that version numbers convey meaning about the changes in your codebase.

### Commits

We encourage developers to adhere to the commitlint instructions, ensuring that commit scopes are both required and predefined. We're open to discussions about tools and practices to make the development process even smoother.

### Git Hooks

Fast and efficient pipelines are crucial for any development workflow. While it's always better to push high-quality code, `90dy` is here to support your efforts with streamlined hooks for a more efficient process.

## License

This project is licensed under the Unlicense - see the [LICENSE](LICENSE) file for details.
