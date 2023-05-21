import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import MainLayout from '../../components/MainLayout';
import placeholderImage from '../../public/logo.png';
import { getPerson } from '../../util/sheets';
import { Resume } from '../../util/types';

interface ResumeProps {
  resume: Resume | null;
}

interface FieldProps {
  field: string[];
  text: string;
}

export const getServerSideProps: GetServerSideProps<ResumeProps> = async (
  context,
) => {
  const resume = await getPerson(
    parseInt(context.params!.resume![0]),
    context.params!.resume![1] + '@g.ucla.edu',
  );
  return { props: { resume } };
};

export default function ShowResume({ resume }: ResumeProps) {
  if (resume === null) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center">
          <p className="text-3xl my-5">Error getting resume!</p>
        </div>
      </MainLayout>
    );
  }

  const rejections = resume.rejections
    .split(/\r?\n/)
    .filter((str) => str !== '');
  const notGoodFits = resume.notGoodFits
    .split(/\r?\n/)
    .filter((str) => str !== '');
  const regrets = resume.regrets.split(/\r?\n/).filter((str) => str !== '');
  const everydayLs = resume.everydayLs
    .split(/\r?\n/)
    .filter((str) => str !== '');
  const proudOf = resume.proudOf.split(/\r?\n/).filter((str) => str !== '');
  const memories = resume.memories.split(/\r?\n/).filter((str) => str !== '');
  const lifeEvents = resume.lifeEvents
    .split(/\r?\n/)
    .filter((str) => str !== '');
  const failures = resume.failures.split(/\r?\n/).filter((str) => str !== '');
  const advice = resume.advice.split(/\r?\n/).filter((str) => str !== '');

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-3xl my-5">
            {resume.name}, {resume.year}
          </p>
          {resume.imageLink && resume.imageLink.startsWith('https://') ? (
            <Image
              className="rounded-full"
              src={resume.imageLink}
              width="150rem"
              height="150rem"
              objectFit="cover"
            />
          ) : (
            <Image
              className="rounded-full"
              src={placeholderImage}
              width="150rem"
              height="150rem"
              objectFit="cover"
            />
          )}
        </div>
        <Field
          field={rejections}
          text={'"thank you for applying but..." jobs/programs'}
        />
        <Field field={notGoodFits} text={"clubs that weren't a good fit"} />
        <Field field={regrets} text={'regrets I have'} />
        <Field field={everydayLs} text={'everyday Ls'} />
        <Field
          field={proudOf}
          text={"things I'm proud of that you won't see on a resume"}
        />
        <Field
          field={memories}
          text={"memories I made when I wasn't studying/working"}
        />
        <Field field={lifeEvents} text={'life events that made me stronger'} />
        <Field
          field={failures}
          text={
            "failures that seemed like the end of the world back then but don't matter in hindsight"
          }
        />
        <Field
          field={advice}
          text={'pieces of advice you would give to your undergraduate self'}
        />
      </div>
    </MainLayout>
  );
}

function Field({ field, text }: FieldProps) {
  return field.length == 0 ? (
    <></>
  ) : (
    <div>
      <p className="text-lg font-medium">
        {field.length} {text}
      </p>
      <ul className="ml-4">
        {field.map((l, index) => (
          <li key={index}>{l}</li>
        ))}
      </ul>
    </div>
  );
}
