# Valley Technical Interview — Message Overlay Interface

This project is a UI reconstruction of the screen overlay with focus on the `AI Training` and `Messages` tabs. The goal was to demonstrate logical component structure, data fetching patterns using RTK Query, and interactions based on reasonable user expectations.

---

## 🛠️ Technical Approach & Architectural Decisions

- **Framework & Stack**: Built with **React**, **TypeScript**, **TailwindCSS**, and **ShadCn UI**, with **Redux Toolkit + RTK Query** for data state management and API stubbing.
- **State Management**: Local component state is used for simple UI controls (e.g., active tab), while RTK Query handles asynchronous data and caching.
- **Styling**: Tailwind, combined with ShadCn components for consistency, accessibility, and responsiveness.
- **API Layer**: All data interactions are abstracted using RTK Query. No data is hardcoded into components. Stubbed responses are quite similar to real-world APIs.

---

## 🧠 Assumptions Made & Edge Case Handling

- **Assumptions**:

  - The current view is within an overlay modal context, so navigation/sidebar interactions are not relevant.
  - The current prospect profile was selected from the valley sales strategy table and user may browse through profiles using the chevron buttons at the top of the overlay.
  - I was meant to replace "Campaign name" and "prospect name" in the ai-training history with the actual values
  - Many more assumptions in the fine details.

- **Edge Cases Handled**:
  - API loading and error states are handled using text placeholders.
  - If no messages are returned, a friendly empty state is shown.

---

## ♿ Accessibility Considerations

- Semantic elements like `button`, `nav`, and `section` are used.
- Sufficient contrast is maintained for text and icons.
- Tooltips and icon labels are used where relevant.

---

## ⚡ Performance Considerations

- **RTK Query** provides **caching** and **auto-refetching**, reducing redundant network calls.
- Minimal component re-renders through memoization and isolated data zones.

---

## 🔧 What I’d Refactor With More Time

1. **Unit and Integration Testing**:
   - Add test coverage using `Jest` and `React Testing Library`.
2. **Form and Modal Logic**:
   - Implement interactions for the "Custom Message" and "Feedback" buttons.
3. **Implement interactions for Archive, Delete and Do not contact**:
   - I would have implemented confirmation modals for the above mentioned actions from the ellipsis button.
4. **Implement filter function for ai-training-history data correctly**:
   - I was able to implement filter for Included and Excluded, but didn't have enough time to implement for the different history types.
5. **Creating Loading Skeletons in place of text placeholders**:
   - Implement shadcn loading skeletons for AI-Training, Messages and Profile data fetching.
6. **Global Error/Toast Handling**:
   - Introduce a global feedback mechanism for GET endpoints on errors or success messages.I like to handle feedback for action requests individually.
7. **Context-Aware Styling**:
   - Create a theme context and global variables for better control.

---

## ⏱️ Timer Submission

- [Starting Loom](https://www.loom.com/share/27d6367a7233456e81226ab51b823a37?sid=1ef6f9c9-d921-4bbb-88d0-de77449d2b67)

- [Ending Loom](https://www.loom.com/share/e0613d56d46442bda043503aed422667?sid=3e26284b-9d0e-4d3e-a669-305a29c409f4)

---

Please feel free to reach out for any clarification or walkthrough of application.

---
