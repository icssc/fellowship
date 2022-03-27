import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn Foundational Skills',
    description: (
      <>
        Learn foundational software development skills like how to use Git, Github, the Terminal.
        We'll also cover professional development topics like Resumes, LinkedIn, and Interview Prep.
      </>
    ),
  },
  {
    title: 'Learn Web Development',
    description: (
      <>
        Starting with HTML, CSS, and Javascript, we'll learn how to create simple websites.
        Then we'll move onto React, API calls, and more.
        During the fellowship you'll develop several websites and become comfortable with modern web technologies.
      </>
    ),
  },
  {
    title: 'Contribute to an ICSSC Project',
    description: (
      <>
        By the end of the Fellowship, you will use your new skills to contribute to 
        one of the ICSSC Projects: <a href="https://antalmanac.com" target="_blank">AntAlmanac</a>
        , <a href="https://peterportal.org" target="_blank">PeterPortal</a>
        , <a href="https://api.peterportal.org" target="_blank">PeterPortal API</a>
        , <a href="https://zotistics.com" target="_blank">Zotistics</a>
        , or even this Fellowship website!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
