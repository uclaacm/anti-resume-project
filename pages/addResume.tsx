import Link from 'next/link';
import React, { Fragment } from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/add_resume.module.scss';
import { Resume } from '../util/types';

export default function AddResume() {
  const CHAR_LIMIT = 500;
  // Questions
  const NAME = 0; // Name
  const YEAR = 1; // Year
  const IMAGE_LINK = 2; // Image link
  const REJECTIONS = 3; // Rejections
  const NOT_GOOD_FITS = 4; // Organizations that weren't good fits
  const REGRETS = 5; // Regrets
  const EVERYDAY_LS = 6; // Everyday Ls
  const PROUD_OF = 7; // Things you're proud of
  const MEMORIES = 8; // Memories
  const LIFE_EVENTS = 9; // Life events
  const FAILURES = 10; // Failures
  const ADVICE = 11; // Advice for future self

  const tags = [
    'Name',
    'Grad year',
    'If you can, please submit a link (ie Google Drive) to a profile picture that will be displayed alongside your Anti-Resume',
    `What are some companies, schools, scholarships, opportunities, etc. that you have been rejected from?
    Please create a new line (press enter) between each entry.
    
    Examples:
    G**gle Software Engineer Intern
    M*ta S
    Duffl Delivery Person
    Am*zon
    St*nford Undergrad
    Rocco's Janitor Role`,
    `What are some clubs that weren't a great fit? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    ACM (Association for Computer Malders)
    Uncreative Labs 
    Linux Hater's Group
    UPE (Unfortunately Pretentious Engineers)`,
    `What are some regrets that you have? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Not accepting an offer to study abroad after Junior year. 
    Missing my best friend's birthday party to work on a project that I ended up not finishing anyways.`,
    `What are some everyday L's?
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    I frequently lose important items like my glasses or my keys. 
    I fall asleep after my alarm goes off very regularly.`,
    `What are some things that you are proud of that you won't see on a resume? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    My ability to whip up healthy meals for myself regularly.
    Going to the gym four times a week.`,
    `What are some memories that you've made while you weren't studying or working? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Skipping CS 111 lecture and going to the Westwood farmer's market 
    Singing sad songs with my friends on the roof of Engineering VI at night`,
    `What are some life events that made you stronger?
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Coming out
    Dealing with the passing of a family member
    Joining a public speaking class to get over my fear of presenting`,
    `What are some failures that once seemed like the end of the world, but in hindsight weren't so bad after all?
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Getting a C on the first math test of the year about lines in math analysis. (shoutout Mrs. Linton)
    I was unable to land a spot in CS 180 my freshman year so I thought that I would be behind on technical interviews for the next year. I ended up just fine!`,
    `What is some advice that you would give to your younger self? 
    Please create a new line (press enter) between each entry.`,
  ];

  const state = tags.map(() => React.useState(''));
  const lengthValid = tags.map(() => React.useState(true));
  const [yearValid, setYearValid] = React.useState(false);
  const [nameValid, setNameValid] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //data.forEach((x) => console.log(x.state[0]));

    // Check validity of inputs
    let allValid = true;
    for (const validElem of lengthValid) {
      if (!validElem[0]) {
        allValid = false;
      }
    }
    if (!yearValid) {
      allValid = false;
    }

    if (!allValid) {
      return;
    }

    // Make resume type to send to the API
    const userResume: Resume = {
      dateModified: 'big_date',
      name: state[NAME][0],
      year: parseInt(state[YEAR][0]),
      imageLink: state[IMAGE_LINK][0],
      rejections: state[REJECTIONS][0],
      notGoodFits: state[NOT_GOOD_FITS][0],
      regrets: state[REGRETS][0],
      everydayLs: state[EVERYDAY_LS][0],
      proudOf: state[PROUD_OF][0],
      memories: state[MEMORIES][0],
      lifeEvents: state[LIFE_EVENTS][0],
      failures: state[FAILURES][0],
      advice: state[ADVICE][0],
    };

    fetch('/api/addResume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resume: userResume }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <MainLayout>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.description}>Add your resume!</h1>
          <form onSubmit={handleSubmit}>
            {tags.map((field, index) => (
              <label key={index}>
                <>
                  {/* Text of the input */}
                  {field.split('\n').map((item, innerIndex) => (
                    <Fragment key={innerIndex}>
                      {item}
                      <br />
                    </Fragment>
                  ))}
                  {/* Input area */}
                  <textarea
                    className={styles.textenter}
                    rows={5}
                    value={state[index][0]}
                    onChange={(event) => {
                      // Register invalid if line is too long
                      lengthValid[index][1](
                        event.target.value.length <= CHAR_LIMIT,
                      );
                      // Register invalid name if name is blank
                      if (index === NAME) {
                        setNameValid(event.target.value.length > 0);
                      }
                      // Register invalid date if date is too early or late
                      if (index === YEAR) {
                        const year = parseInt(event.target.value);
                        setYearValid(year >= 2020 && year <= 2030);
                      }
                      // Change state
                      state[index][1](event.target.value);
                    }}
                  />
                  {/* Error messages */}
                  <div className={styles.error}>
                    {!lengthValid[index][0] && (
                      <>
                        {CHAR_LIMIT} character limit!
                        <br />
                      </>
                    )}
                    {index === NAME && !nameValid && <>Name cannot be blank!</>}
                    {index === YEAR && !yearValid && <>Year must be valid!</>}
                  </div>
                </>
                <br />
                <br />
              </label>
            ))}
            <div className={styles.center}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <h1 className={styles.description}>Reach out!</h1>
        <Link href="/">
          <button>Go back home</button>
        </Link>
      </div>
    </MainLayout>
  );
}
