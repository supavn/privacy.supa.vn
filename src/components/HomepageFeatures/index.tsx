import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Centralized Task Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <div className="text--bold">
          Keep your team’s work on track
        </div>
        Supa helps businesses streamline task assignments, progress tracking, and collaboration — all in one place. No more spreadsheets or scattered updates.
      </>
    ),
  },
  {
    title: 'Work Evidence Made Easy',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <div className="text--bold">
          Capture photos, locations, and more — right in the field
        </div>
        Whether inspecting a site or reporting work done, Supa makes it simple to upload images and location data tied directly to specific jobs.
      </>
    ),
  },
  {
    title: 'Secure & Controlled Access',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <div className="text--bold">
          No signups. Only verified users.
        </div>
        All user accounts are managed by your organization. Supa ensures data privacy with encrypted transmissions and strict access control.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
