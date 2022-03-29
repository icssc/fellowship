import React from 'react';
import styles from './styles.module.css';

const testimonials = [
  {
    message: "This was one of the best educational experience I have received. I learned a lot in this course and I am glad I applied to this Fellowship program.",
    author: "Yaseen K."
  },
  {
    message: "It was one of the things I looked forward to the most outside of my regular school work :)",
    author: "Audrey N."
  },
  {
    message: "I feel like I've learned a lot!",
    author: "Ye A."
  },
  {
    message: "The fellowship was a great experience!",
    author: "Anthony C."
  },
  {
    message: "This course really helped me become more knowledgeable in the basics that people usually assume you know since you are a CS major.",
    author: "Michelle L."
  },
  {
    message: "I learned a lot about web dev and Git and React and I'm really glad I convinced myself to apply!",
    author: "Wesley M."
  },
  {
    message: "I'm probably going to use what I learned here in the future a lot, and I'm excited to learn more.",
    author: "Tanush G."
  },
  {
    message: "I loved building our own website and learning about HTML, CSS, javascript, etc!",
    author: "Solvin S."
  },
  {
    message: "I had never touched HTML or Javascript and I think that this course created a great space to experiment in this new coding space.",
    author: "Esteban A."
  }
]

export default function Testimonials() {
  return (
    <section >
      <div className="container">
        <div className="row">
          <div className={styles.testimonials}>
            <h2>Testimonials</h2>
            <p>Hear from former students that have participated in the fellowship!</p>
            <div className={styles.quotes}>
              {testimonials.map((testimonial, index) => {
                return (
                  <div key={"quote-" + index} className={styles.quote}>
                    <i>"{testimonial.message}"</i>
                    <br />
                    - {testimonial.author}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
