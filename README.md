# krack-todo-card-project
A todo card with a task
Updates made from stage zero to stage 1a
This project builds upon the Stage 0 Todo Card by introducing interactivity, state management, and improved user experience. The card is no longer static, it now behaves more like a mini application.

New Features & Improvements -
Editable Todo Content
Users can now edit:
Task title
Description
Priority
Due date
Save button → updates the card
Cancel button → restores previous values

Status Control & Synchronization -
Added a status dropdown:
Pending
In Progress
Done
Fully synced with:
Checkbox toggle
Status text display
Logic ensures:
Checking the box → sets status to Done
Changing status to Done → checks the box
Unchecking → reverts to Pending

Priority Enhancements -
Added a visual priority indicator (color-based)
Priority levels:
Low → Green
Medium → Orange
High → Red
Both text and indicator updates when edited

Expand / Collapse Description -
Long descriptions are now collapsible
Users can toggle between:
Preview (shortened text)
Full content
Fully keyboard accessible using aria-expanded and aria-controls
Improved Time Handling
Dynamic time tracking:
“Due in X minutes/hours/days”
“Overdue by X hours”
Added:
Overdue indicator
Automatic updates every 30 seconds
When task is marked as Done:
Time display switches to: “Completed” (takes like 15 - 30 seconds)
Stops active countdown behavior

Visual State Feedback -
Completed tasks:
Strike-through title
Overdue tasks:
Highlighted with warning indicator
In Progress:
Distinct visual state

Accessibility Improvements -
Proper use of:
<label> for form inputs
aria-live="polite" for time updates
aria-expanded for collapsible content
Fully keyboard navigable:
Checkbox → Status → Expand → Edit → Delete

Responsive Design -
Mobile-first layout:
Works from 320px to desktop screens
Improvements include:
Flexible layout structure
Wrapping tags
Proper spacing on smaller devices
No horizontal overflow

Key Concepts Applied
State-driven UI updates
DOM manipulation with Vanilla JavaScript
Event handling and synchronization
Conditional rendering logic
Accessibility-first development

Summary

Stage 1a transforms the Todo Card from a static UI component into an interactive, stateful experience.
