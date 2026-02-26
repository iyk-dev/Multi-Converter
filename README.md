# Dynamic Multi-Converter

**[🔴 View Live Demo Here](https://multi-converter.onrender.com)**

A highly scalable, responsive web application capable of instantly handling over 30 complex mathematical unit conversions across 10 different global measurement categories (Temperature, Digital Storage, Real Estate, Speed, etc.).

## Features
* **Cascading Menus:** Features dynamic dropdowns that listen for user input and instantly reveal specific sub-menus based on the primary category selected.
* **Algorithmic Logic:** Implements an extensive control flow system to accurately calculate formulas across different metric and imperial systems.
* **Data Formatting:** Utilizes JavaScript number methods (`.toFixed()`) to safely handle floating-point math and round complex decimals into clean, readable user outputs.
* **Highly Scalable Codebase:** The logic is structured so that adding a new conversion category takes only minutes without disrupting the existing codebase.

## Tech Stack
* **HTML5** (Forms & Select Options)
* **CSS3** (Transitions, Custom UI)
* **Vanilla JavaScript** (Conditional Logic, DOM Traversal)

## Key Learnings
The biggest takeaway from this project was learning how to manage **Cascading UI Elements**. Using JavaScript `forEach` loops to hide all menus, grab the `value` of the currently selected option, and selectively display the exact `div` the user needs taught me a lot about dynamic DOM manipulation and user flow.