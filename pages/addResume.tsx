import { useSession } from 'next-auth/react';
import React, { useState, useEffect, Fragment } from 'react';
import MainLayout from '../components/MainLayout';
import { questions } from '../util/constants';
import { Resume } from '../util/types';

export default function AddResume() {
  const CHAR_LIMIT = 500;
  const MIN_GRAD_YEAR = 2000;
  const MAX_GRAD_YEAR = 2050;

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

  const state = tags.map(() => useState(''));
  const lengthValid = tags.map(() => useState(true));
  const [yearValid, setYearValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //data.forEach((x) => console.log(x.state[0]));

    // Check validity of inputs
    for (const validElem of lengthValid) {
      if (!validElem[0]) {
        return;
      }
    }
    if (!yearValid) {
      return;
    }

    // Make resume type to send to the API
    const userResume: Resume = {
      dateModified: 'big_date',
      name: state[questions.NAME][0],
      year: parseInt(state[questions.YEAR][0]),
      imageLink: state[questions.IMAGE_LINK][0],
      rejections: state[questions.REJECTIONS][0],
      notGoodFits: state[questions.NOT_GOOD_FITS][0],
      regrets: state[questions.REGRETS][0],
      everydayLs: state[questions.EVERYDAY_LS][0],
      proudOf: state[questions.PROUD_OF][0],
      memories: state[questions.MEMORIES][0],
      lifeEvents: state[questions.LIFE_EVENTS][0],
      failures: state[questions.FAILURES][0],
      advice: state[questions.ADVICE][0],
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

  const { data: session } = useSession();
  const [, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/protected');
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData().catch((error) => {
      console.error(error);
    });
  }, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center">
          <p className="text-3xl">Sign in to make an anti-resume!</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-3xl">Add your resume!</p>
          <form onSubmit={handleSubmit}>
            {tags.map((field, index) => (
              <label key={index} className="inline-block w-full mb-6">
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
                    rows={5}
                    className="w-full rounded"
                    value={state[index][0]}
                    onChange={(event) => {
                      // Register invalid if line is too long
                      lengthValid[index][1](
                        event.target.value.length <= CHAR_LIMIT,
                      );
                      // Register invalid name if name is blank
                      if (index === questions.NAME) {
                        setNameValid(event.target.value.length > 0);
                      }
                      // Register invalid date if date is too early or late
                      if (index === questions.YEAR) {
                        const year = parseInt(event.target.value);
                        setYearValid(
                          year >= MIN_GRAD_YEAR && year <= MAX_GRAD_YEAR,
                        );
                      }
                      // Change state
                      state[index][1](event.target.value);
                    }}
                  />
                  {/* Error messages */}
                  <div>
                    {!lengthValid[index][0] && (
                      <p>{CHAR_LIMIT} character limit!</p>
                    )}
                    {index === questions.NAME && !nameValid && (
                      <p>Name cannot be blank!</p>
                    )}
                    {index === questions.YEAR && !yearValid && (
                      <p>Year must be valid!</p>
                    )}
                  </div>
                </>
              </label>
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="mt-3">Reach out!</p>
        </div>
      </div>
    </MainLayout>
  );
}
