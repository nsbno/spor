# 🎨 Spor: Vy's Design System

Welcome to **Spor**, Vy's open-source design system! Spor is a **shared language for designers and developers**, helping us build **consistent, accessible, and high-quality user experiences** across all platforms.

## 📖 Table of Contents

- [What is Spor?](#-what-is-spor)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
- [How to Contribute](#-how-to-contribute)
- [Design System Fundamentals](#-design-system-fundamentals)
- [Accessibility](#-accessibility)
- [Releasing New Versions](#-releasing-new-versions)
- [Adding New Icons](#-adding-new-icons)
- [Additional Resources](#-additional-resources)

---

## 📌 What is Spor?

Spor provides:

- **Reusable UI components** for web and mobile
- **Design tokens** for colors, typography, spacing, and more
- **Guidelines and documentation** for usage and best practices
- **A collaborative space** for designers and developers to contribute

Our goal is to ensure **visual and functional consistency** across Vy's digital products. Anyone—inside or outside Vy—can contribute! 🚀

---

## 📂 Repository Structure

Spor follows a **monorepo** structure, containing multiple **packages** and **applications**.

### 🚀 Applications

- **`docs`** – A Remix app for documentation and demos (this site).
- **`studio`** – A Sanity Studio app for managing documentation ([spor.vy.no/studio](https://spor.vy.no/studio)).

### 📦 Key Packages

- **`@vygruppen/spor-react`** – The React component library.
- **`@vygruppen/spor-design-tokens`** – Design tokens (colors, typography, spacing, etc.).
- **`@vygruppen/spor-icon`** – SVG icons.
- **`@vygruppen/spor-icon-react`** – React components for icons.
- **`@vygruppen/spor-icon-react-native`** – React Native components for icons.
- **`@vygruppen/spor-loader`** – All Lottie loading animation data.

---

## 🔧 Getting Started

### ✅ Prerequisites

Before you begin, ensure you have:

- **Node.js** installed.
- **Basic familiarity with Git** for version control.

### 📥 Cloning the Repository

```sh
git clone https://github.com/nsbno/spor.git
```

### 📦 Installing Dependencies

```sh
cd spor
pnpm install
```

### Run typegen

```sh
pnpm typegen
```

### ⚡ Building the Project

```sh
pnpm build
```

### 💻 Running the Development Server

```sh
pnpm dev
```

---

## 👋 How to Contribute

Spor is built **collaboratively**, and contributions are welcome! Here are some ways you can help:

- 🛠 **Develop new components, features, or bug fixes.**
- 🎨 **Design new components and propose design improvements.**
- 📝 **Enhance documentation** by adding examples or proofreading.
- 🔍 **Increase test coverage** by writing more tests.
- 🐛 **Report bugs** or suggest improvements via **GitHub issues**.
- 💬 **Provide feedback** on design and developer experience.
- ✅ **Review pull requests** and help maintain code quality.

For detailed guides, check out:

- **[Creating a New React Component](https://spor.vy.no/guides/how-to-make-new-react-components)**
- **[Creating a New React Native Component](https://spor.vy.no/guides/how-to-make-new-react-native-components)**
- **[Releasing New Versions](https://spor.vy.no/guides/releasing-new-versions)**

💡 **Not sure where to start?** Look for GitHub issues labeled `good first issue` for beginner-friendly tasks.

---

## 🎨 Design System Fundamentals

### 🏗 Components

Spor provides **pre-built UI components** that:

- **Follow accessibility best practices**
- **Include built-in states and interactivity**
- **Have corresponding Figma components for designers**

Browse the component library to see them in action! 🧩

### 🎨 Design Tokens

Design tokens define:

- **Colors** (`brand.primary`, `text.default`)
- **Spacing & Layout** (`spacing.md`, `radius.lg`)
- **Typography** (`font.heading`, `lineHeight.base`)

Use design tokens instead of hard-coded values for consistency across products.

---

## ♿ Accessibility

### ✅ Web Accessibility Best Practices

- **Use semantic HTML** (`<button>`, `<h1>`, `<input>`, etc.).
- **Follow proper heading structure** (no skipping levels like `<h1>` → `<h3>`).
- **Use ARIA only when necessary** (`aria-expanded`, `aria-live`).
- **Ensure proper keyboard navigation** (Tab, Enter, Spacebar, Arrow keys).

### 🔍 Checking Zoom Accessibility

- Test **browser zoom up to 200%** to ensure readability.
- Avoid horizontal scrolling unless required.
- Use **DevTools → Rendering → Emulate Vision Deficiencies** for testing.

### 📱 React Native Accessibility

- **Set accessibilityRole** for meaningful interaction.
- **Use accessibilityLabel** for better screen reader support.
- **Ensure dynamic updates use accessibilityLiveRegion**.

For more details, check **our accessibility guide**. 🎯

---

## 🔄 Releasing New Versions

Spor follows **semantic versioning (SemVer)**, and new versions are released using **Changesets**.

### 📦 Steps to Release a New Version:

1. **Run `npx changeset`** to document changes.
2. **Select affected packages** and **choose a version bump** (major, minor, patch).
3. **Commit the changeset** (this creates a file in `.changeset/`).
4. **Merge the pull request**, triggering an automatic release.

For more details, see **[our release guide](https://spor.vy.no/guides/releasing-new-versions)**.

---

## 🖼️ Adding New Icons

To add new icons to Spor:

1. **Get SVG assets** from a designer.
2. **Follow the naming convention** (`icon-name-variant-size.svg`).
3. **Place them in `packages/spor-icon/svg/`** under the correct category.
4. **Run `pnpm build`** to generate React components.
5. **Create a changeset** and submit a pull request.

For a step-by-step guide, see **[our icon contribution guide](https://spor.vy.no/guides/how-to-add-new-icons)**. 🎨

---

## 📚 Additional Resources

📖 **[Spor Documentation](https://spor.vy.no/)** – Official documentation and guides.  
📝 **[Figma Library](https://www.figma.com/design/Tmr2URVX2vNkyRLqKhNRQA/Vy_komponentbibliotek?node-id=0-1&p=f&t=0FRcZh8C5N0edYFm-0)** – Explore design components in Figma.  
🐛 **[GitHub Issues](https://github.com/nsbno/spor/issues)** – Report bugs or find tasks to work on.  
💬 **Slack (#spor channel)** – Discuss and collaborate with the team.

---

Spor is **built by everyone** at Vy—so jump in, contribute, and help shape our design system! 🚀
