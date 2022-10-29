import Link from 'next/link';
import React, { Fragment } from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';
import { Resume } from '../util/types';

export default function AddResume() {
  const tags = {
    name: 'Name',
    year: 'Grad year',
    image_link: 'If you can, please submit a link (ie Google Drive) to a profile picture that will be displayed alongside your Anti-Resume',
    rejects: `What are some companies, schools, scholarships, opportunities, etc. that you have been rejected from?
    Please create a new line (press enter) between each entry.
    
    Examples:
    G**gle Software Engineer Intern
    M*ta S
    Duffl Delivery Person
    Am*zon
    St*nford Undergrad
    Rocco's Janitor Role`,
    not_good_fit: `What are some clubs that weren't a great fit? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    ACM (Association for Computer Malders)
    Uncreative Labs 
    Linux Hater's Group
    UPE (Unfortunately Pretentious Engineers)`,
    regrets: `What are some regrets that you have? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Not accepting an offer to study abroad after Junior year. 
    Missing my best friend's birthday party to work on a project that I ended up not finishing anyways.`,
    everyday_ls: `What are some everyday L's?
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    I frequently lose important items like my glasses or my keys. 
    I fall asleep after my alarm goes off very regularly.`,
    proud_of: `What are some things that you are proud of that you won't see on a resume? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    My ability to whip up healthy meals for myself regularly.
    Going to the gym four times a week.`,
    memories: `What are some memories that you've made while you weren't studying or working? 
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Skipping CS 111 lecture and going to the Westwood farmer's market 
    Singing sad songs with my friends on the roof of Engineering VI at night`,
    life_events: `What are some life events that made you stronger?
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Coming out
    Dealing with the passing of a family member
    Joining a public speaking class to get over my fear of presenting`,
    failures: `What are some failures that once seemed like the end of the world, but in hindsight weren't so bad after all?
    Please create a new line (press enter) between each entry. 
    
    Examples: 
    Getting a C on the first math test of the year about lines in math analysis. (shoutout Mrs. Linton)
    I was unable to land a spot in CS 180 my freshman year so I thought that I would be behind on technical interviews for the next year. I ended up just fine!`,
    advice: `What is some advice that you would give to your younger self? 
    Please create a new line (press enter) between each entry.`,
  };

  const data = Object.values(tags).map((x) => ({ name: x, state: React.useState('') }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //data.forEach((x) => console.log(x.state[0]));
    // Data -> name, grad year, image link, rejects, not good fit, regrets, everyday Ls, proud,
    //  memories, life events, failures, advice
    // TODO: resume can contain more info
    const n = Object.fromEntries(Object.keys(tags).map((x, index) => [x, index]));
    const get = (s: string) => data[n[s]].state[0];

    const userResume: Resume = {
      user: get('name'),
      year: parseInt(get('year')),
      dateModified: 'big_date',
      toInforms: get('rejects'),
      iHave: get('regrets'),
      image: get('image_link')
    };

    //console.log(userResume);
    fetch('/api/addResume', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      /*
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      */
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ resume: userResume })
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
            {data.map((field, index) => (
              <label key={index}>
                <>
                  {field.name.split('\n').map((item, innerIndex) => (
                    <Fragment key={innerIndex}>
                      {item}
                      <br />
                    </Fragment>
                  ))}
                  <textarea
                    rows={5}
                    value={field.state[0]}
                    onChange={(event) => {
                      field.state[1](event.target.value);
                    }}
                  />
                </>
                <br />
                <br />
              </label>
            ))}
            <input type="submit" value="Submit" />
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
