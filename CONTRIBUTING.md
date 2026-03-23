
# Contributing Guide – Adding Blog Posts and Projects

---
----------------------------------------------------------------------------------------------------------------------------------------------------------------
## Adding a New Blog Post--------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------
**Location:** `src/pages/Blog/posts/`

**Naming convention:** `post-YYYY-MM-DD-title.jsx`  
Example: `post-2026-03-25-my-new-idea.jsx`

**Template:**

```jsx
export const post = {
  date: "2026-03-25",          
  title: "My New Post",
  content: (
    <>
      <p>First paragraph.</p>
      <p>Second paragraph.</p>
      <ul>
        <li>Bullet point</li>
      </ul>
    </>
  ),
};
```

**Register it in `Blog.jsx`:**

```jsx
import { post as newPost } from "./posts/post-2026-03-25-my-new-idea.jsx";

const POSTS = [post1, post2, post3, newPost];
```

The blog will automatically sort and display the new post by date.

---





























----------------------------------------------------------------------------------------------------------------------------------------------------------------
## Adding a New Project --------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------
**Decide where it goes:**

- `src/pages/Projects/main_projects/` – featured projects
- `src/pages/Projects/more_projects/` – extras shown under the toggle button

**Naming convention:** `your-project-name.jsx` (lowercase, dashes for spaces)

**Template:**

```jsx
import { renderFlatSkills } from "../skillsHelper.jsx";

export const project = {
  preview: {
    title: "Your Project Title",
    subtitle: "Short tagline",
    desc: "One-sentence description for the card.",
    tags: ["Skill1", "Skill2", "Skill3"],
    detail: "Extra detail line (e.g., '3-person team · 100 tests')",
  },
  full: (
    <>
      <h2 className="modal-title">Your Project Title</h2>
      <h3 className="modal-subtitle">Subtitle or tagline</h3>

      <hr className="modal-divider" />

      <p>Long description of the project.</p>

      <p>Key features:</p>
      <ul>
        <li>Feature one</li>
        <li>Feature two</li>
      </ul>

      <hr className="modal-divider" />

      {renderFlatSkills(["Skill1", "Skill2", "Skill3", "Skill4"])}

      <hr className="modal-divider" />

      <div className="modal-links">
        <a href="https://github.com/..." target="_blank" className="modal-link">GitHub</a>
        <a href="https://live-demo.com" target="_blank" className="modal-link">Live Demo</a>
      </div>
    </>
  ),
};
```

**Register it in `Projects.jsx`:**

```jsx
import { project as newProject } from './main_projects/your-project-name.jsx';

const MAIN_PROJECTS = [senseaim, vibecoder, customShell, newProject];
// or for extras:
const MORE_PROJECTS = [...existingProjects, newProject];
```

**Important:** Skill names in `tags` and inside `renderFlatSkills()` must match the names in `src/skills.js` exactly (case-sensitive). They display as a flat centered row of tags in the modal.

---

## Summary

| Action | Where |
|--------|-------|
| New blog post | Add file in `src/pages/Blog/posts/`, import and add to array in `Blog.jsx` |
| New project | Add file in `src/pages/Projects/main_projects/` or `more_projects/`, import and add to array in `Projects.jsx` |

Both are self-contained – when in doubt, duplicate an existing file and edit the content.