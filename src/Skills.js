import DotBackground from './DotBackground.js';


function Skills() {
    return (
      <div class="skills-container">
      <DotBackground />

          <h1>My Skills</h1>
          <div className="skills-flexbox">

            <div className="row">
              <div class="skill">
                <img src="/images/javascript.png"/>
                <h2>Javascript</h2>
              </div>
              <div class="skill">
              <img id="php" src="/images/php.png"/>
                <h2>PHP</h2>
              </div>

              <div class="skill">
              <img src="/images/react.png"/>
                <h2>React</h2>
              </div>

          </div>
          <div className="row">

            <div class="skill">
            <img src="/images/html5.png"/>
              <h2>HTML</h2>
            </div>

             <div class="skill">
              <img src="/images/css.png"/>
              <h2>CSS</h2>
             </div>


          </div>

          <div className="row">
           <div class="skill">
            <img src="/images/Postgresql_elephant.png"/>
             <h2>PostgreSQL</h2>
           </div>
          </div>

       </div>
     </div>

    );
}

export default Skills;
