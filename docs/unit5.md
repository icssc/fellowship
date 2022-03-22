---
sidebar_position: 5
---

# Unit 5: Personal Branding

## Welcome to Unit 5

This week we take a quick detour to discuss personal branding! When it comes to your career, professional development is just as important as software development.

## Unit 5 Lecture Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/O-2x0eAMPss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Resume

### Parts of your Resume

You resume should have the following parts:

- Header
    - Contact Info: Name, Phone, Non-UCI email
    - Links: LinkedIn, GitHub, Website
    - [Optional] City, State (not as relevant since most tech roles offer relocation)
- Education
    - “University of California, Irvine”
    - Graduation date (e.g. June 2024)
    - Major and Minor
    - GPA if above a 3.0
- Work Experience and/or Leadership Experience
    - Position
    - Date range of involvement (June 2021-September 2021)
    - Position and description of accomplishments
- Projects
    - Languages/frameworks used
    - Short description
    - Link to Github or website (if possible)

### Do’s and Don’ts

**Should** include

- Name
- Phone and non-edu email
- LinkedIn, GitHub, Website
- Education
    - “University of California, Irvine”
    - Major
    - Graduation date
    - GPA if above a 3.0
- Work Experience
- Personal Projects
- Leadership Experience
- [Optional] Skills
- [Optional] Relevant coursework

Should **NOT** include

- Profile picture
- Protected categories (race, gender, sexuality, etc.)
- Objective or Biography
- Unrelated hobbies
- 2 column format
- Excessive design elements
- Random skill metric

### Tips

Content Tips

- Use bullet points, not paragraphs
    - Get to the point
- Use the [XYZ Formula](https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html)
    - Accomplished [X], as measured by [Y], by doing Z
- Add lots of stats/numbers. Recruiters love stats!
- Cater to your audience
- Check for Grammar

Design Tips

- 1 page, single column
- Clean, simple, and consistent
- Use the same font/font sizes
- Save as PDF
- Balance between text and white space
- You can make the margins smaller if you need more room

### Adding your Resume to your website

To get your resume onto your website, export your resume as a `.pdf` file. 

There are two ways to add it to your website.

You can either commit it to your project and push

```bash
mv <path to resume> chasec99.github.io/resume.pdf
cd chasec99.github.io
git add resume.pdf
git commit -m "Add resume"
```

OR

Go to your repo’s GitHub page and upload the resume.pdf file

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cb222bda-26ab-4a34-9c2b-5a468415c9b1/Untitled.png)

### Redirecting from GitHub’s 404 page

You can access your resume by going to `username.github.io/resume.pdf`. 

But what happens if someone goes to `username.github.io/resume` without `.pdf` on the end? You’ll get a 404 error! This is because GitHub doesn’t know where to send the user when they don’t include the file extension. 

However, we can provide our own 404 page and have it immediately redirect to the desired location. The idea is this:

- User goes to `username.github.io/resume`
- GitHub returns `username.github.io/404.html`
- The 404.html page sees that the user attempted to go to `resume` and immediately redirects to `username.github.io/resume.pdf`

Add your own `404.html` file to your project. Instead of the head add a `<script>` tag with code similar to the one below. The code instead of the `<script>` tag gets executed on page load.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Chase Carnaroli</title>
    <script type="text/javascript">
      // Dictionary that has all of your redirect rules
			// You can add additional redirects if you'd like
			const redirects = {
        "resume": "resume.pdf"
      }

			// window.location.pathname -> Get the path -> /resume
			// .substring(1) -> remove the first character -> resume
			// .toLowerCase() -> make sure the path name is all lowercase       
      const path = window.location.pathname.substring(1).toLowerCase();

      const redirect = redirects[path];
      if (redirect) {
				// Redirect to the desired location
        window.location.replace(redirect);
      } else {
				// If the path doesn't exist, you can redirect to your main page
        window.location.replace("https://www.chasecarnaroli.com");
      }
    </script>
  </head>

</html>
```

## LinkedIn

LinkedIn is a profession networking site that can help you land internships and full time roles. Sign up at [https://www.linkedin.com/signup/](https://www.linkedin.com/signup/)

Take sometime to fill out your profile!

### Update your LinkedIn URL

By default your LinkedIn URL is your name+random characters. This looks unprofessional. Thankfully, you can update the URL to be whatever you’d like! I’d recommend doing your first+last name.

- Navigate to [https://www.linkedin.com/public-profile/settings](https://www.linkedin.com/public-profile/settings)
- In the top right corner, edit your custom URL
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d5a585c-4c42-4995-bd54-169b529ea427/Untitled.png)
    

## Assignment

These week, your assignment is to create a resume and a LinkedIn

### Deliverables

**Required Tasks**

- [ ]  Create a LinkedIn
    - [ ]  Add your education
    - [ ]  Update your LinkedIn URL
- [ ]  Create a Resume with the following
    - [ ]  Your education
    - [ ]  Links to your website, LinkedIn, and GitHub
    - [ ]  Previous Work or Volunteer Experience
- [ ]  Add your resume to your website (e.g. `chasec99.github.io/resume.pdf`)

**Optional** **Stretch Goals**

- [ ]  Post your LinkedIn url in the [Discord thread](https://ptb.discord.com/channels/772739905981644850/927468256070086696/938703099470704700) and connect with others in the Fellowship!
- [ ]  Sign up to review another resume

### Due Date

Monday, February 7 by 11:59pm

### Submission

Complete the [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSe346dTGIyWBqGoFc3XNKbrXh5Aks2hsI5ME9ZDVbsGMWYWXQ/viewform?usp=sf_link). Please use your UCI email. 

[https://docs.google.com/forms/d/e/1FAIpQLSe346dTGIyWBqGoFc3XNKbrXh5Aks2hsI5ME9ZDVbsGMWYWXQ/viewform?usp=sf_link](https://docs.google.com/forms/d/e/1FAIpQLSe346dTGIyWBqGoFc3XNKbrXh5Aks2hsI5ME9ZDVbsGMWYWXQ/viewform?usp=sf_link)

## External Resources

- Resume
    - [XYZ Formula](https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html)
    - [Capital One Resume Tips](https://www.capitalonecareers.com/6-resume-tips-from-a-tech-recruiter-cdev-101)
- LinkedIn
    - [LinkedIn Profile Tips](https://www.linkedin.com/business/sales/blog/profile-best-practices/17-steps-to-a-better-linkedin-profile-in-2017)