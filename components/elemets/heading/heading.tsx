import { ReactNode, ElementType } from 'react';

type Props = {
  level: number;
  text: string;
  children?: ReactNode;
};

const Heading = ({ level, text, children }: Props) => {
  const classes: string[] = [];
  let HeadingTag = `h${level}` as ElementType;

  level === 1
    ? classes.push('text-2xl')
    : level === 2
    ? classes.push(
        'text-xl font-bold border-l-4 border-red-600 border-solid py-3 pl-4'
      )
    : level === 3
    ? classes.push(
        'text-xl font-bold border-l-4 border-red-600 border-solid py-3 pl-4'
      )
    : level === 4
    ? classes.push(
        'text-xl font-bold border-l-4 border-red-600 border-solid py-3 pl-4'
      )
    : classes.push(
        'text-xl font-bold border-l-4 border-red-600 border-solid py-3 pl-4'
      );
  let returnHtml = (
    <HeadingTag className={`mb-6 text-2xl ${classes}`}>{text}</HeadingTag>
  );

  if (children) {
    returnHtml = (
      <hgroup className="mb-6">
        <HeadingTag className={classes}>{text}</HeadingTag>
        {children}
      </hgroup>
    );
  }

  return returnHtml;
};

export default Heading;


// .heading-primary {
//     margin-bottom: 24px;
//     font-size: 2.8rem;
//     line-height: 1.5
// }

// .heading-secondary {
//     margin-bottom: 24px;
//     border-left: 4px solid #dd171f;
//     padding: 12px 0 12px 14px;
//     color: #212121;
//     font-size: 2.2rem;
//     line-height: 1.5;
//     font-weight: bold;
//     letter-spacing: 1px
// }

// .heading-tertiary {
//     font-size: 2rem;
//     line-height: 1.5;
//     display: flex;
// }

// .heading-tertiary::before {
//     content: "";
//     background-image: url("/assets/simulator/icon-heading-tertiary-2b9b5ab294b7957788fe9a946e7b1fdf6f643fe2fe7affb550b947b535c063ac.png");
//     background-size: 100%;
//     background-repeat: no-repeat;
//     display: block;
//     width: 24px;
//     height: 22px;
//     margin-right: 12px;
//     margin-top: 3px;
// }

// .heading-quaternary {
//     font-size: 1.8rem;
//     line-height: 1.5;
//     display: flex;
// }

// .heading-quaternary::before {
//     content: "";
//     background-image: url("/assets/simulator/icon-heading-quaternary-6c274b6ccfa16c22132b1dbe69e263fed3ee7c3c26b7ff070e39e91d54daf019.png");
//     background-size: 100%;
//     background-repeat: no-repeat;
//     display: block;
//     width: 12px;
//     height: 54px;
//     margin-right: 12px;
// }

// .heading-quinary {
//     font-size: 1.8rem;
//     line-height: 1.5;
// }
