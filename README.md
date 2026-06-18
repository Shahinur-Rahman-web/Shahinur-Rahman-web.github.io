# Easy GitHub Pages Academic Website

This version is made so you do **not** edit repeated HTML files. You mainly edit simple Markdown pages.

## Edit these first

1. `_config.yml`  
   Edit your name, university, email, location, and profile links.

2. `index.md`  
   Edit your homepage summary and current work.

3. `background.md`  
   Edit education and experience.

4. `research.md`  
   Edit research projects.

5. `skills.md`  
   Edit software, field skills, and community research skills.

6. `publications.md`  
   Edit publications, manuscripts, conference papers, and posters.

7. `others.md`  
   Edit conferences, awards, memberships, and certifications.

## Add your CV

Put your CV PDF here:

`assets/files/cv.pdf`

The Download CV button will then work automatically.

## Add your photo

Put your photo here:

`assets/images/profile.jpg`

Then open `index.md` and replace the photo placeholder box with this line:

`<img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Shahinur Rahman Shuvro" class="profile-photo">`

## How to publish on GitHub Pages

1. Create a repository named exactly:

   `yourgithubusername.github.io`

2. Upload all files from this folder to that repository.

3. Go to **Settings → Pages**.

4. Under **Build and deployment**, choose:

   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`

5. Save. Your website should appear at:

   `https://yourgithubusername.github.io`

## Important rule

Do not edit `_layouts/default.html`, `_includes/nav.html`, `_includes/footer.html`, `assets/css/styles.css`, or `assets/js/script.js` unless you want design/code changes.

For normal updates, edit only the `.md` files and `_config.yml`.
