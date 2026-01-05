# Personal Blog Site

A clean, minimal Jekyll-powered blog for writing, researching and showcasing projects. Built with markdown support for easy content creation and GitHub Pages hosting.

## Design Philosophy

Inspired by Brian Lovin's clean aesthetic with a custom dark Material Design theme. Features:
- **Distinctive typography**: Crimson Pro for body text, JetBrains Mono for code/UI
- **Dark screen palette**: Professional, easy on the eyes
- **Minimal, content-focused**: No unnecessary elements
- **Responsive**: Works beautifully on mobile and desktop
- **Markdown-powered**: Write in markdown, publish as HTML

## Quick Start

### Deploying to GitHub Pages

1. Push all files to your repository
2. GitHub Pages will automatically build and deploy your site
3. Your site will be live on your site (or `https://yourusername.github.io`)

No build configuration needed - GitHub Pages handles Jekyll automatically!

## Site Structure

```
/
├── _config.yml         # Jekyll configuration
├── _layouts/           # Page templates
│   ├── default.html    # Base layout
│   ├── post.html       # Blog post layout
│   └── project.html    # Project layout
├── _posts/             # Blog posts (markdown)
│   └── YYYY-MM-DD-title.md
├── _projects/          # Project pages (markdown)
│   └── project-name.md
├── index.html          # Homepage
├── writing.html        # All posts listing
├── projects.html       # Projects listing
├── styles.css          # All styles
└── Gemfile             # Ruby dependencies
```

## Writing a Blog Post

### 1. Create a New Markdown File

Create a file in `_posts/` with this naming format:
```
YYYY-MM-DD-post-title.md
```

Example: `2026-01-15-my-awesome-post.md`

### 2. Add Front Matter

Start your file with YAML front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-01-15
reading_time: 5
excerpt: "A brief description that appears in post listings"
---
```

### 3. Write Your Content

Write the rest in markdown:

```markdown
## This is a heading

This is a paragraph with **bold** and *italic* text.

- List item one
- List item two

[Link to something](https://example.com)

```python
# Code blocks work too!
print("Hello, world!")
```
```

### 4. Publish

Just commit and push - GitHub Pages will build it automatically!

```bash
git add _posts/2026-01-15-my-awesome-post.md
git commit -m "Add new post"
git push
```

## Adding a Project

### 1. Create a Markdown File in `_projects/`

Example: `_projects/my-project.md`

### 2. Add Front Matter

```yaml
---
layout: project
title: "My Project Name"
date: 2026-01-01
github_url: "https://github.com/username/repo"  # Optional
excerpt: "A brief description of the project"
---
```

### 3. Write Project Details

Use markdown to describe your project. The full content will appear on the project's detail page.

## Customization

### Site Information

Edit `_config.yml`:

```yaml
title: Your Name
description: Your bio/tagline
url: "https://yourdomain.com"
```

### Social Links

Edit `index.html` and update the social links section with your actual URLs.

### Colors

All colors are in `styles.css` as CSS variables:

```css
:root {
    --bg-primary: #1a1f23;      /* Main background */
    --text-primary: #e8e6e3;    /* Main text */
    --accent: #7c9885;          /* Links */
    /* ... more colors ... */
}
```

### Typography

Change fonts by updating the Google Fonts import in `_layouts/default.html` and the CSS variables in `styles.css`:

```css
--font-serif: 'Your Font', Georgia, serif;
--font-mono: 'Your Mono Font', monospace;
```

## Markdown Tips

### Supported Formatting

- **Headings**: `##`, `###`, `####`
- **Bold**: `**text**` or `__text__`
- **Italic**: `*text*` or `_text_`
- **Links**: `[text](url)`
- **Images**: `![alt](/images/image.jpg)`
- **Code**: `` `inline` `` or triple backticks for blocks
- **Lists**: `-` or `1.` 
- **Blockquotes**: `> quote`
- **Tables**: See example posts

### Code Syntax Highlighting

Use triple backticks with language:

````markdown
```python
def hello():
    print("Hello!")
```
````

### Images

Add images to an `/images/` folder and reference them:

```markdown
![Description](/images/photo.jpg)
```

## File Naming Rules

### Posts
- **Format**: `YYYY-MM-DD-title.md`
- **Example**: `2026-01-15-my-post.md`
- **Important**: Jekyll requires this exact format!

### Projects
- **Format**: `project-name.md` (no date needed)
- **Example**: `promanage.md`

## Common Tasks

### Change Homepage Bio

Edit the `hero-bio` section in `index.html`

### Update Social Links

Edit the `social-links` section in `index.html` with your actual profile URLs

### Adjust Post Excerpt Length

In `index.html` and `writing.html`, change the `truncatewords` number:

```liquid
{{ post.excerpt | strip_html | truncatewords: 30 }}
```

### Change Number of Recent Posts

In `index.html`, change the limit:

```liquid
{% for post in site.posts limit:25 %}
```

## Troubleshooting

### Site Not Building on GitHub

1. Check GitHub Pages settings (Settings → Pages)
2. Make sure source is set to "main" branch, "/ (root)"
3. Check repository Actions tab for build errors

### Posts Not Showing Up

1. Check filename format: `YYYY-MM-DD-title.md`
2. Make sure date in front matter matches filename
3. Verify front matter is valid YAML

## Next Steps

1. **Update your bio** in `index.html`
2. **Add your social links** (GitHub, LinkedIn, X, etc.)
3. **Write your first post** in `_posts/`
4. **Create your projects** in `_projects/`
5. **Customize colors** if desired
6. **Push to GitHub** and go live!

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Kramdown Syntax](https://kramdown.gettalong.org/syntax.html)
- [GitHub Pages + Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)

## License

MIT License - use this template for your own site!

## Credits

Design inspired by [Brian Lovin](https://brianlovin.com/)
