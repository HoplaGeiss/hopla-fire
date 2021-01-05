import './intro.scss';

import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

var classNames = require('classnames');
const Intro = () => {
  const [showIntro, setShowIntro] = useState(false);
  const toggleIntro = () => setShowIntro(!showIntro);
  const handleKeydownIntroToggle = (ev) => {
    if (ev.keyCode === 13) {
      toggleIntro()
     }
  }

  const data = useStaticQuery(graphql`
    query BioQuery {
      markdownRemark(fileAbsolutePath: {regex: "/(other/intro)/"}) {
        html
      }
    }
  `)

  var sectionClass = classNames({
    'intro': true,
    'hidden': !showIntro
  });

  const intro = data.markdownRemark

  return (
    <React.Fragment>
      <p>
        Bienvenue sur HOPLA, un blog dédié à l'indépendance financière et à la retraite anticipé.
        Chacun a ses raisons pour essayer d'atteindre l'indépendance financière. Comme beaucoup, peut-être que votre travail ne vous intéresse plus, peut-être que vous voulez assurer l'avenir de votre famille, peut-être que vous ne comprenez pas pourquoi nous sommes censés passer la plupart de notre vie d'adulte à travailler.
      </p>

      <div onClick={toggleIntro} role="button" tabIndex={0} onKeyDown={handleKeydownIntroToggle} className="see-more">Lisez la suite...</div>

      <section
        dangerouslySetInnerHTML={{ __html: intro.html }}
        itemProp="articleBody"
        className={sectionClass}
      />
    </React.Fragment>
  )
}

export default Intro
