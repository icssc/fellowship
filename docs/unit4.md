---
sidebar_position: 4
---

# Unit 4: Intro to Web Dev

# Unit 4 Lecture Video

[https://youtu.be/45teq99E4DA](https://youtu.be/45teq99E4DA)

[https://www.youtube.com/watch?v=ok-plXXHlWw](https://www.youtube.com/watch?v=ok-plXXHlWw)

[https://www.youtube.com/watch?v=OEV8gMkCHXQ](https://www.youtube.com/watch?v=OEV8gMkCHXQ)

# HTML (HyperText Markup Language)

HTML is not a programming language; it is a **markup** language. It tells web browsers how to structure the web pages that you visit.  HTML consists of a series of elements, which can contain such as a text, image, or any other content. Each element is enclosed by tags that can specify unique attributes of the content.

![HTMLTag](https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)

Here are some common tags that you might use:

```html
<h1> Heading level 1 </h1>
<h2> Heading level 2 </h2>
<p> A paragraph of text </p>
<!-- a comment that does not get written into your web page -->
<img> <!-- an image -->
<ul> <!-- an unordered list with bullet points -->
	<li> list item 1 </li>
	<li> list item 2 </li>
</ul>  
<strong> **Important content that is bolded** </strong>
<em> *Emphasized content that is italicized* </em>
<div> A division or section of content </div>
```

Note that some elements like `<img>` don’t contain a closing tag. How does it know what the content is? More on that later...

### Nesting

Elements can be placed as the content of other elements. This 

```html
<div>
	<p>I <strong>love</strong> HTML!</p>
</div>
```

The following is an example of the ***wrong*** way to do nesting:

```html
<p>The WRONG way to do <strong>nesting.</p></strong> <!-- Don't do this -->
```

The **tags have to open and close in a way that they are inside or outside one another**. With the kind of overlap in the example above, the browser would be unsure what your intentions are.

### Attributes

Elements can also have **attributes**. The attributes of an element contain extra information that doesn’t appear in the content. 

![Attributes](https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)

Attributes specify options and add meaning. They are space-separated lists of names and values. (Kind of like variables.)

```html
<div attributeA="valueA" attributeB="valueB">
	Content goes here
</div>
<a href="https://facebook.com">Facebook</a>
```

Getting back to the `<img>` tag, it uses attributes to know what content to display. 

```html
<img src="/path/to/image.png">
```

Every tag can have a `class` and `id` attribute. They are just like any attribute, but they are often used to identify specific tags in CSS and JavaScript.

```html
<div class="widget foo" id="baz"></div>
```

Some things to consider about the `class` and `id` attribute: 

- They are just like any other attribute (href, src).
- An element can have many classes, only one ID.
- Each page can have only one element with a given ID.
- Can use the same class on multiple elements.
    - It's useful to apply the same style to many elements.

<aside>
🧠 Pro Tips: IDs can be used for navigation (i.e.: [https://marsc.dev/#experience](https://marsc.dev/#experience))

</aside>

### A full HTML document

```html
<!DOCTYPE html>
<html>
  <head>
		<!--- The `head` is for meta data, and importing styles/scripts --->
    <title>My test page</title>
    <meta charset="utf-8">
		<link rel="stylesheet" href="style.css">
  </head>

  <body>
		<!--- The `body` is where the content of your website goes --->
    <p>This is my page</p>
  </body>
</html>
```

### HTML Reference

There are hundreds of tags, each with different possible attributes, that you can check out here.

[HTML Reference](https://www.w3schools.com/tags/)

# CSS (Cascading Style Sheets)

CSS is a stylesheet language used to describe the presentation of a document that is written in HTML. Unlike HTML which provides the structure for the document, CSS provides the styling and how the document is presented. 

### CSS syntax

- Selectors specify which elements a rule applies to.
- Rules specify what values to assign to different formatting properties.

```css
selector {
	property: value;
	property: value;
	...
}
```

In this case, we select all HTML elements with the `p` tag. These elements will use the font ‘Arial’, and be colored red.

```css
p {
	font-family: 'Arial';
	color: red;
}
```

There are three main ways of selecting HTML to style: Element, ID, and Class. Remember, ID and class can be set as attributes for each element. There are also more, base don attribute, or pseudo-classes. 

```css
p { /* Select by element tag */
	font-family: 'Arial';
	color: red;
}
.emphasize { /* Select by element class */
	font-family: 'Arial';
	color: red;
}

#redtext { /* Select by element id */
	font-family: 'Arial';
	color: red;
}

img[src] { /* Select img with src attribute */
	width: 500px;
}

a:hover { /* When 'a' tags are hovered by your mouse they become blue */
	color: blue
}
```

### CSS Reference

[CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

### Specifying Styles

The best practice way of specifying styles is to create a separate `<name>.css` file, where you will put all your styles and rules. 

```html
<head>
	 <!-- Use the './css/style.css' file for styling this document -->
	<link rel="stylesheet" href="./css/style.css">
</head>
<body>
	...
</body>
```

### The Box Model 🔲

CSS is all about boxes, in how the entire page is laid out. Each box has multiple properties in how they take up space: 

- `padding` - the space around the content. In the example below, it is the space around the paragraph text.
- `border` - the solid line that is just outside the padding.
- `margin` - the space around the outside of the border. This is used to separate elements from its neighbors
- `width` - the width of the content
- `height` - the height of the content

Padding, border and margin have direction properties. (e.g., padding-top,
margin-right, border-left). 

Border can have border-color, border-width, and border-style.

![Borders](https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)

### Units

For the above properties, they all can be set with certain units. 

| Unit | Description |
| --- | --- |
| Pixels (px) | 1 pixel |
| Element units (em) | Relative to the font-size of the element.  |
| Percentages (%) | Relative to the parent element. |
| Real-world units (in, cm) | An inch, or centimeter. Not recommended to use. |
| Viewport (vh, vw) | Relative to 1% of the width/height of the viewport, or display. (100vh = 100% of the height of the viewport. |
- Try to use relative units (em and %) whenever possible. Helps for accessibility, when users change default sizes.
- Don’t use real-world units, as these are fixed regardless of device.

### Display

The display property is one of the most important CSS properties for controlling layout. Focusing on the two main display property values. 

- `inline` - Does not start on a newline and only takes up as much width as necessary.
    - Examples of inline-level elements: <span>, <a>, <img>
- `block` - Always starts on a new line and takes up the full width available.
    - Examples of block-level elements: <div>, <p>, <h1> - <h6>

[display | CSS-Tricks](https://css-tricks.com/almanac/properties/d/display/)

# VS Code

VS Code is a very popular text editor used for all types of development. With many different extensions and lots of customizable settings, it’s very flexible. 

Download it here.

[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

One small cool feature is that in your terminal, you can add the `code` command, so that if you type `code <some directory or file>`, it will open up the file/directory in VS Code! 

- For Windows and Linux, this should be automatically installed.
- For Mac, to get `code` added to your terminal, just follow these [three steps](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line).

# GitHub Pages

Alright so now that you have the beginning of an awesome website, how do you share it with the world? We need somewhere to host the website. GitHub pages allows us to do this for free and is very convenient. 

To activate GitHub pages for your repository:

- Click on the “Settings” tab
- Click “Pages”
- Select “main” as your Source Branch
- Click “Save”
- Check “Enforce HTTPS”

![GitHubPages](https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)

Now, whenever you push a new commit to the `main` branch of your repository, the website will be automatically updated.

# Assignment

This week, we are going to start development on your very own personal website and get it deployed with GitHub Pages! The requirements to complete the assignment are fairly simple but try your best to make your site look good :)

**Required Tasks**

- [ ]  Deploy your website to GitHub Pages
- [ ]  Add the following to your `index.html` file
    - [ ]  A `<head>` with:
        - [ ]  `<title>`
        - [ ]  `<link>` to your `styles.css` stylesheet
    - [ ]  A `<body>` with ***at least*** each of the following tags
        - [ ]  `h1`, `h2`, `p`, `a`, `img`, `ul`, `li`, `div`
        - [ ]  An element that has a `class` attribute
        - [ ]  An element that has an `id` attribute
- [ ]  Create a `styles.css` file
    - [ ]  Add color somewhere on your site
    - [ ]  Modify the style of elements that have a `class` attribute
    - [ ]  Modify the style of an element that has an `id`

**Optional Stretch Goals**

- [ ]  Add an icon to your website (should show up in your browser’s tab)
- [ ]  Use flexbox somewhere on your website
- [ ]  Add a media query

### Due Date

Wednesday, February 2nd at 11:59pm

### Submission

[https://forms.gle/ywE4xEBNrMZXJ3Br7](https://forms.gle/ywE4xEBNrMZXJ3Br7)

# External Resources

Practice

- Khan Academy Intro to HTML/CSS: [https://www.khanacademy.org/computing/computer-programming/html-css](https://www.khanacademy.org/computing/computer-programming/html-css)

HTML

- [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)

CSS

- [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)
- [https://css-tricks.com/almanac/](https://css-tricks.com/almanac/)
- CSS Pro Tips: [https://www.youtube.com/watch?v=Qhaz36TZG5Y](https://www.youtube.com/watch?v=Qhaz36TZG5Y)