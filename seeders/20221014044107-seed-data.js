module.exports = {
  up: async (queryInterface) => {
    const userData = [
      {
        name: 'Hertanto Irawan',
        github_username: 'hertantoirawan',
        profile: 'Software engineer with 10+ years of experience in Asia and the US.',
        website: 'linkedin.com/hertanto',
        email: 'hertanto@gmail.com',
        phone: '628123456789',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [userHertanto] = await queryInterface.bulkInsert('users', userData, {
      returning: true,
    });

    const educationData = [
      {
        user_id: userHertanto.id,
        school: 'Foothill Junior College',
        degree: 'Associate Degree (Computer Science)',
        start: null,
        end: new Date(2010, 1, 1),
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        school: 'University of California, San Diego',
        degree: 'Bachelor of Science (Computer Science)',
        start: null,
        end: new Date(2012, 1, 1),
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        school: 'Rocket Academy',
        degree: 'Software Engineering Bootcamp',
        start: null,
        end: new Date(2022, 1, 1),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('education', educationData);

    const workExperienceData = [
      {
        user_id: userHertanto.id,
        role: 'Software Engineer',
        company: 'Google',
        start: new Date(2012, 1, 1),
        end: new Date(2017, 12, 31),
        contribution: 'Implemented google search',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        role: 'Software Engineer',
        company: 'Facebook',
        start: new Date(2018, 1, 1),
        end: null,
        contribution: 'Implemented Facebook Messenger',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('work-experiences', workExperienceData);

    const templateData = [
      {
        name: 'General',
        html_content: `<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta charset="UTF-8" />

    <link
      href="http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        border: 0;
        font: inherit;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html,
      body {
        font-family: "Lato", helvetica, arial, sans-serif;
        font-size: 16px;
        color: #222;
      }

      .clear {
        clear: both;
      }

      p {
        font-size: 1em;
        line-height: 1.4em;
        margin-bottom: 20px;
        color: #444;
      }

      #cv {
        width: 90%;
        max-width: 800px;
        background: #f3f3f3;
        margin: 30px auto;
      }

      .mainDetails {
        padding: 25px 35px;
        border-bottom: 2px solid #cf8a05;
        background: #ededed;
      }

      #name h1 {
        font-size: 2.5em;
        font-weight: 700;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        margin-bottom: -6px;
      }

      #name h2 {
        font-size: 2em;
        margin-left: 2px;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
      }

      #mainArea {
        padding: 0 40px;
      }

      #headshot {
        width: 12.5%;
        float: left;
        margin-right: 30px;
      }

      #headshot img {
        width: 100%;
        height: auto;
        -webkit-border-radius: 50px;
        border-radius: 50px;
      }

      #name {
        float: left;
      }

      #contactDetails {
        float: right;
      }

      #contactDetails ul {
        list-style-type: none;
        font-size: 0.9em;
        margin-top: 2px;
      }

      #contactDetails ul li {
        margin-bottom: 3px;
        color: #444;
      }

      section {
        border-top: 1px solid #dedede;
        padding: 20px 0 0;
      }

      section:first-child {
        border-top: 0;
      }

      section:last-child {
        padding: 20px 0 10px;
      }

      .sectionTitle {
        float: left;
        width: 25%;
      }

      .sectionContent {
        float: right;
        width: 72.5%;
      }

      .sectionTitle h1 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-style: italic;
        font-size: 1.5em;
        color: #cf8a05;
      }

      .sectionContent h2 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-size: 1.5em;
        margin-bottom: -2px;
      }

      .subDetails {
        font-size: 0.8em;
        font-style: italic;
        margin-bottom: 3px;
      }

      .keySkills {
        list-style-type: none;
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        margin-bottom: 20px;
        font-size: 1em;
        color: #444;
      }

      .keySkills ul li {
        margin-bottom: 3px;
      }
    </style>
  </head>
  <body id="top">
    <div id="cv">
      <div class="mainDetails">
        <div id="name">
          <h1>{{name}}</h1>
          <h2>{{resume}}</h2>
        </div>

        <div id="contactDetails">
          <ul>
            <li>e: {{email}}</li>
            <li>w: {{website}}</li>
            <li>m: {{phone}}</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>

      <div id="mainArea">
        <section>
          <article>
            <div class="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div class="sectionContent">
              <p>{{profile}}</p>
            </div>
          </article>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div class="sectionContent">{{work}}</div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Projects</h1>
          </div>

          <div class="sectionContent">{{projects}}</div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Education</h1>
          </div>

          <div class="sectionContent">{{education}}</div>
          <div class="clear"></div>
        </section>
      </div>
    </div>
  </body>
</html>
`,
        html_sample_content: `<!DOCTYPE html>
<html>
  <head>
    <title>John Smith - Curriculum Vitae</title>

    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="The Curriculum Vitae of Joe Bloggs." />
    <meta charset="UTF-8" />

    <link
      href="http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        border: 0;
        font: inherit;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html,
      body {
        font-family: "Lato", helvetica, arial, sans-serif;
        font-size: 16px;
        color: #222;
      }

      .clear {
        clear: both;
      }

      p {
        font-size: 1em;
        line-height: 1.4em;
        margin-bottom: 20px;
        color: #444;
      }

      #cv {
        width: 90%;
        max-width: 800px;
        background: #f3f3f3;
        margin: 30px auto;
      }

      .mainDetails {
        padding: 25px 35px;
        border-bottom: 2px solid #cf8a05;
        background: #ededed;
      }

      #name h1 {
        font-size: 2.5em;
        font-weight: 700;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        margin-bottom: -6px;
      }

      #name h2 {
        font-size: 2em;
        margin-left: 2px;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
      }

      #mainArea {
        padding: 0 40px;
      }

      #headshot {
        width: 12.5%;
        float: left;
        margin-right: 30px;
      }

      #headshot img {
        width: 100%;
        height: auto;
        -webkit-border-radius: 50px;
        border-radius: 50px;
      }

      #name {
        float: left;
      }

      #contactDetails {
        float: right;
      }

      #contactDetails ul {
        list-style-type: none;
        font-size: 0.9em;
        margin-top: 2px;
      }

      #contactDetails ul li {
        margin-bottom: 3px;
        color: #444;
      }

      section {
        border-top: 1px solid #dedede;
        padding: 20px 0 0;
      }

      section:first-child {
        border-top: 0;
      }

      section:last-child {
        padding: 20px 0 10px;
      }

      .sectionTitle {
        float: left;
        width: 25%;
      }

      .sectionContent {
        float: right;
        width: 72.5%;
      }

      .sectionTitle h1 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-style: italic;
        font-size: 1.5em;
        color: #cf8a05;
      }

      .sectionContent h2 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-size: 1.5em;
        margin-bottom: -2px;
      }

      .subDetails {
        font-size: 0.8em;
        font-style: italic;
        margin-bottom: 3px;
      }

      .keySkills {
        list-style-type: none;
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        margin-bottom: 20px;
        font-size: 1em;
        color: #444;
      }

      .keySkills ul li {
        margin-bottom: 3px;
      }
    </style>
  </head>
  <body id="top">
    <div id="cv">
      <div class="mainDetails">
        <div id="name">
          <h1>John Smith</h1>
          <h2>Software Engineer</h2>
        </div>

        <div id="contactDetails">
          <ul>
            <li>
              e:
              <a href="mailto:john.smith@gmail.com" target="_blank"
                >john.smith@gmail.com</a
              >
            </li>
            <li>
              w:
              <a href="https://linkedin.com/in/johnsmith"
                >linkedin.com/in/johnsmith</a
              >
            </li>
            <li>m: +62123456789</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>

      <div id="mainArea">
        <section>
          <article>
            <div class="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div class="sectionContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </div>
          </article>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Job Title at Company B</h2>
              <p class="subDetails">April 2011 - Present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>Job Title at Company A</h2>
              <p class="subDetails">January 2007 - March 2011</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Projects</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Capstone Project</h2>
              <p class="subDetails">React Native, Express</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>React Project</h2>
              <p class="subDetails">React, Express, Material-UI</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Education</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Rocket Academy</h2>
              <p class="subDetails">Qualification</p>
              <p>Part-Time Coding Bootcamp</p>
            </article>

            <article>
              <h2>Open University</h2>
              <p class="subDetails">Qualification</p>
              <p>Bachelor of Science (Computer Science)</p>
            </article>
          </div>
          <div class="clear"></div>
        </section>
      </div>
    </div>
  </body>
</html>
`,
        html_article_template: `<article>
              <h2>{{title}}</h2>
              <p class="subDetails">{{subtitle}}</p>
              <p>{{content}}</p>
            </article>`,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [resumeTemplateOne] = await queryInterface.bulkInsert('templates', templateData, {
      returning: true,
    });

    const resumeData = [
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Frontend Engineer',
        description:
          'Resume for software engineering roles that focus on frontend.',
        html_content: `<!DOCTYPE html>
<html>
  <head>
    <title>Joe Bloggs - Curriculum Vitae</title>

    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="The Curriculum Vitae of Joe Bloggs." />
    <meta charset="UTF-8" />

    <link
      href="http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        border: 0;
        font: inherit;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html,
      body {
        font-family: "Lato", helvetica, arial, sans-serif;
        font-size: 16px;
        color: #222;
      }

      .clear {
        clear: both;
      }

      p {
        font-size: 1em;
        line-height: 1.4em;
        margin-bottom: 20px;
        color: #444;
      }

      #cv {
        width: 90%;
        max-width: 800px;
        background: #f3f3f3;
        margin: 30px auto;
      }

      .mainDetails {
        padding: 25px 35px;
        border-bottom: 2px solid #cf8a05;
        background: #ededed;
      }

      #name h1 {
        font-size: 2.5em;
        font-weight: 700;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        margin-bottom: -6px;
      }

      #name h2 {
        font-size: 2em;
        margin-left: 2px;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
      }

      #mainArea {
        padding: 0 40px;
      }

      #headshot {
        width: 12.5%;
        float: left;
        margin-right: 30px;
      }

      #headshot img {
        width: 100%;
        height: auto;
        -webkit-border-radius: 50px;
        border-radius: 50px;
      }

      #name {
        float: left;
      }

      #contactDetails {
        float: right;
      }

      #contactDetails ul {
        list-style-type: none;
        font-size: 0.9em;
        margin-top: 2px;
      }

      #contactDetails ul li {
        margin-bottom: 3px;
        color: #444;
      }

      section {
        border-top: 1px solid #dedede;
        padding: 20px 0 0;
      }

      section:first-child {
        border-top: 0;
      }

      section:last-child {
        padding: 20px 0 10px;
      }

      .sectionTitle {
        float: left;
        width: 25%;
      }

      .sectionContent {
        float: right;
        width: 72.5%;
      }

      .sectionTitle h1 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-style: italic;
        font-size: 1.5em;
        color: #cf8a05;
      }

      .sectionContent h2 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-size: 1.5em;
        margin-bottom: -2px;
      }

      .subDetails {
        font-size: 0.8em;
        font-style: italic;
        margin-bottom: 3px;
      }

      .keySkills {
        list-style-type: none;
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        margin-bottom: 20px;
        font-size: 1em;
        color: #444;
      }

      .keySkills ul li {
        margin-bottom: 3px;
      }
    </style>
  </head>
  <body id="top">
    <div id="cv">
      <div class="mainDetails">
        <div id="name">
          <h1>Hertanto Irawan</h1>
          <h2>Frontend Engineer</h2>
        </div>

        <div id="contactDetails">
          <ul>
            <li>
              e:
              <a href="mailto:hertanto@gmail.com" target="_blank">hertanto@gmail.com</a>
            </li>
            <li>
              w:
              <a href="linkedin.com/hertanto"
                >linkedin.com/hertanto</a
              >
            </li>
            <li>m: +628123456789</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>

      <div id="mainArea">
        <section>
          <article>
            <div class="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div class="sectionContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </div>
          </article>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">April 2011 - Present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">January 2007 - March 2011</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Projects</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Capstone Project</h2>
              <p class="subDetails">React Native, Express</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>React Project</h2>
              <p class="subDetails">React, Express, Material-UI</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Education</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Rocket Academy</h2>
              <p class="subDetails">2022</p>
              <p>Part-Time Coding Bootcamp</p>
            </article>

            <article>
              <h2>University of California, San Diego</h2>
              <p class="subDetails">2012</p>
              <p>Bachelor of Science (Computer Science)</p>
            </article>
          </div>
          <div class="clear"></div>
        </section>
      </div>
    </div>
  </body>
</html>
`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Backend Engineer',
        description:
          'Resume for software engineering roles that focus on backend.',
        html_content: `<!DOCTYPE html>
<html>
  <head>
    <title>Joe Bloggs - Curriculum Vitae</title>

    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="The Curriculum Vitae of Joe Bloggs." />
    <meta charset="UTF-8" />

    <link
      href="http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        border: 0;
        font: inherit;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html,
      body {
        font-family: "Lato", helvetica, arial, sans-serif;
        font-size: 16px;
        color: #222;
      }

      .clear {
        clear: both;
      }

      p {
        font-size: 1em;
        line-height: 1.4em;
        margin-bottom: 20px;
        color: #444;
      }

      #cv {
        width: 90%;
        max-width: 800px;
        background: #f3f3f3;
        margin: 30px auto;
      }

      .mainDetails {
        padding: 25px 35px;
        border-bottom: 2px solid #cf8a05;
        background: #ededed;
      }

      #name h1 {
        font-size: 2.5em;
        font-weight: 700;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        margin-bottom: -6px;
      }

      #name h2 {
        font-size: 2em;
        margin-left: 2px;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
      }

      #mainArea {
        padding: 0 40px;
      }

      #headshot {
        width: 12.5%;
        float: left;
        margin-right: 30px;
      }

      #headshot img {
        width: 100%;
        height: auto;
        -webkit-border-radius: 50px;
        border-radius: 50px;
      }

      #name {
        float: left;
      }

      #contactDetails {
        float: right;
      }

      #contactDetails ul {
        list-style-type: none;
        font-size: 0.9em;
        margin-top: 2px;
      }

      #contactDetails ul li {
        margin-bottom: 3px;
        color: #444;
      }

      section {
        border-top: 1px solid #dedede;
        padding: 20px 0 0;
      }

      section:first-child {
        border-top: 0;
      }

      section:last-child {
        padding: 20px 0 10px;
      }

      .sectionTitle {
        float: left;
        width: 25%;
      }

      .sectionContent {
        float: right;
        width: 72.5%;
      }

      .sectionTitle h1 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-style: italic;
        font-size: 1.5em;
        color: #cf8a05;
      }

      .sectionContent h2 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-size: 1.5em;
        margin-bottom: -2px;
      }

      .subDetails {
        font-size: 0.8em;
        font-style: italic;
        margin-bottom: 3px;
      }

      .keySkills {
        list-style-type: none;
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        margin-bottom: 20px;
        font-size: 1em;
        color: #444;
      }

      .keySkills ul li {
        margin-bottom: 3px;
      }
    </style>
  </head>
  <body id="top">
    <div id="cv">
      <div class="mainDetails">
        <div id="name">
          <h1>Hertanto Irawan</h1>
          <h2>Backend Engineer</h2>
        </div>

        <div id="contactDetails">
          <ul>
            <li>
              e:
              <a href="mailto:hertanto@gmail.com" target="_blank">hertanto@gmail.com</a>
            </li>
            <li>
              w:
              <a href="linkedin.com/hertanto"
                >linkedin.com/hertanto</a
              >
            </li>
            <li>m: +628123456789</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>

      <div id="mainArea">
        <section>
          <article>
            <div class="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div class="sectionContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </div>
          </article>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">April 2011 - Present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">January 2007 - March 2011</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Projects</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Capstone Project</h2>
              <p class="subDetails">React Native, Express</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>React Project</h2>
              <p class="subDetails">React, Express, Material-UI</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Education</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Rocket Academy</h2>
              <p class="subDetails">2022</p>
              <p>Part-Time Coding Bootcamp</p>
            </article>

            <article>
              <h2>University of California, San Diego</h2>
              <p class="subDetails">2012</p>
              <p>Bachelor of Science (Computer Science)</p>
            </article>
          </div>
          <div class="clear"></div>
        </section>
      </div>
    </div>
  </body>
</html>
`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Full Stack Developer',
        description:
          'Resume for full stack software engineering roles.',
        html_content: `<!DOCTYPE html>
<html>
  <head>
    <title>Joe Bloggs - Curriculum Vitae</title>

    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="The Curriculum Vitae of Joe Bloggs." />
    <meta charset="UTF-8" />

    <link
      href="http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        border: 0;
        font: inherit;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html,
      body {
        font-family: "Lato", helvetica, arial, sans-serif;
        font-size: 16px;
        color: #222;
      }

      .clear {
        clear: both;
      }

      p {
        font-size: 1em;
        line-height: 1.4em;
        margin-bottom: 20px;
        color: #444;
      }

      #cv {
        width: 90%;
        max-width: 800px;
        background: #f3f3f3;
        margin: 30px auto;
      }

      .mainDetails {
        padding: 25px 35px;
        border-bottom: 2px solid #cf8a05;
        background: #ededed;
      }

      #name h1 {
        font-size: 2.5em;
        font-weight: 700;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        margin-bottom: -6px;
      }

      #name h2 {
        font-size: 2em;
        margin-left: 2px;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
      }

      #mainArea {
        padding: 0 40px;
      }

      #headshot {
        width: 12.5%;
        float: left;
        margin-right: 30px;
      }

      #headshot img {
        width: 100%;
        height: auto;
        -webkit-border-radius: 50px;
        border-radius: 50px;
      }

      #name {
        float: left;
      }

      #contactDetails {
        float: right;
      }

      #contactDetails ul {
        list-style-type: none;
        font-size: 0.9em;
        margin-top: 2px;
      }

      #contactDetails ul li {
        margin-bottom: 3px;
        color: #444;
      }

      section {
        border-top: 1px solid #dedede;
        padding: 20px 0 0;
      }

      section:first-child {
        border-top: 0;
      }

      section:last-child {
        padding: 20px 0 10px;
      }

      .sectionTitle {
        float: left;
        width: 25%;
      }

      .sectionContent {
        float: right;
        width: 72.5%;
      }

      .sectionTitle h1 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-style: italic;
        font-size: 1.5em;
        color: #cf8a05;
      }

      .sectionContent h2 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-size: 1.5em;
        margin-bottom: -2px;
      }

      .subDetails {
        font-size: 0.8em;
        font-style: italic;
        margin-bottom: 3px;
      }

      .keySkills {
        list-style-type: none;
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        margin-bottom: 20px;
        font-size: 1em;
        color: #444;
      }

      .keySkills ul li {
        margin-bottom: 3px;
      }
    </style>
  </head>
  <body id="top">
    <div id="cv">
      <div class="mainDetails">
        <div id="name">
          <h1>Hertanto Irawan</h1>
          <h2>Full Stack Developer</h2>
        </div>

        <div id="contactDetails">
          <ul>
            <li>
              e:
              <a href="mailto:hertanto@gmail.com" target="_blank">hertanto@gmail.com</a>
            </li>
            <li>
              w:
              <a href="linkedin.com/hertanto"
                >linkedin.com/hertanto</a
              >
            </li>
            <li>m: +628123456789</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>

      <div id="mainArea">
        <section>
          <article>
            <div class="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div class="sectionContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </div>
          </article>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">April 2011 - Present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">January 2007 - March 2011</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Projects</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Capstone Project</h2>
              <p class="subDetails">React Native, Express</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>React Project</h2>
              <p class="subDetails">React, Express, Material-UI</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Education</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Rocket Academy</h2>
              <p class="subDetails">2022</p>
              <p>Part-Time Coding Bootcamp</p>
            </article>

            <article>
              <h2>University of California, San Diego</h2>
              <p class="subDetails">2012</p>
              <p>Bachelor of Science (Computer Science)</p>
            </article>
          </div>
          <div class="clear"></div>
        </section>
      </div>
    </div>
  </body>
</html>
`,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        template_id: resumeTemplateOne.id,
        name: 'Tech Lead',
        description:
          'Resume for team leading roles',
        html_content: `<!DOCTYPE html>
<html>
  <head>
    <title>Joe Bloggs - Curriculum Vitae</title>

    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="The Curriculum Vitae of Joe Bloggs." />
    <meta charset="UTF-8" />

    <link
      href="http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        border: 0;
        font: inherit;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      html,
      body {
        font-family: "Lato", helvetica, arial, sans-serif;
        font-size: 16px;
        color: #222;
      }

      .clear {
        clear: both;
      }

      p {
        font-size: 1em;
        line-height: 1.4em;
        margin-bottom: 20px;
        color: #444;
      }

      #cv {
        width: 90%;
        max-width: 800px;
        background: #f3f3f3;
        margin: 30px auto;
      }

      .mainDetails {
        padding: 25px 35px;
        border-bottom: 2px solid #cf8a05;
        background: #ededed;
      }

      #name h1 {
        font-size: 2.5em;
        font-weight: 700;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        margin-bottom: -6px;
      }

      #name h2 {
        font-size: 2em;
        margin-left: 2px;
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
      }

      #mainArea {
        padding: 0 40px;
      }

      #headshot {
        width: 12.5%;
        float: left;
        margin-right: 30px;
      }

      #headshot img {
        width: 100%;
        height: auto;
        -webkit-border-radius: 50px;
        border-radius: 50px;
      }

      #name {
        float: left;
      }

      #contactDetails {
        float: right;
      }

      #contactDetails ul {
        list-style-type: none;
        font-size: 0.9em;
        margin-top: 2px;
      }

      #contactDetails ul li {
        margin-bottom: 3px;
        color: #444;
      }

      section {
        border-top: 1px solid #dedede;
        padding: 20px 0 0;
      }

      section:first-child {
        border-top: 0;
      }

      section:last-child {
        padding: 20px 0 10px;
      }

      .sectionTitle {
        float: left;
        width: 25%;
      }

      .sectionContent {
        float: right;
        width: 72.5%;
      }

      .sectionTitle h1 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-style: italic;
        font-size: 1.5em;
        color: #cf8a05;
      }

      .sectionContent h2 {
        font-family: "Rokkitt", Helvetica, Arial, sans-serif;
        font-size: 1.5em;
        margin-bottom: -2px;
      }

      .subDetails {
        font-size: 0.8em;
        font-style: italic;
        margin-bottom: 3px;
      }

      .keySkills {
        list-style-type: none;
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
        margin-bottom: 20px;
        font-size: 1em;
        color: #444;
      }

      .keySkills ul li {
        margin-bottom: 3px;
      }
    </style>
  </head>
  <body id="top">
    <div id="cv">
      <div class="mainDetails">
        <div id="name">
          <h1>Hertanto Irawan</h1>
          <h2>Tech Lead</h2>
        </div>

        <div id="contactDetails">
          <ul>
            <li>
              e:
              <a href="mailto:hertanto@gmail.com" target="_blank">hertanto@gmail.com</a>
            </li>
            <li>
              w:
              <a href="linkedin.com/hertanto"
                >linkedin.com/hertanto</a
              >
            </li>
            <li>m: +628123456789</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>

      <div id="mainArea">
        <section>
          <article>
            <div class="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div class="sectionContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </div>
          </article>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">April 2011 - Present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>Job Title at Company</h2>
              <p class="subDetails">January 2007 - March 2011</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Projects</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Capstone Project</h2>
              <p class="subDetails">React Native, Express</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>

            <article>
              <h2>React Project</h2>
              <p class="subDetails">React, Express, Material-UI</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                dolor metus, interdum at scelerisque in, porta at lacus.
              </p>
            </article>
          </div>
          <div class="clear"></div>
        </section>

        <section>
          <div class="sectionTitle">
            <h1>Education</h1>
          </div>

          <div class="sectionContent">
            <article>
              <h2>Rocket Academy</h2>
              <p class="subDetails">2022</p>
              <p>Part-Time Coding Bootcamp</p>
            </article>

            <article>
              <h2>University of California, San Diego</h2>
              <p class="subDetails">2012</p>
              <p>Bachelor of Science (Computer Science)</p>
            </article>
          </div>
          <div class="clear"></div>
        </section>
      </div>
    </div>
  </body>
</html>
`,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const [frontendResumeHertanto, backendResumeHertanto, fullstackResumeHertanto, techleadResumeHertanto] = await queryInterface.bulkInsert('resumes', resumeData, {
      returning: true,
    });

    const tagsData = [
      { name: 'engineer', created_at: new Date(), updated_at: new Date() },
      { name: 'senior', created_at: new Date(), updated_at: new Date() },
      { name: 'junior', created_at: new Date(), updated_at: new Date() },
      { name: 'frontend', created_at: new Date(), updated_at: new Date() },
      { name: 'backend', created_at: new Date(), updated_at: new Date() },
      { name: 'project', created_at: new Date(), updated_at: new Date() },
      { name: 'lead', created_at: new Date(), updated_at: new Date() },
      { name: 'agile', created_at: new Date(), updated_at: new Date() },
    ];

    const [engineerTag, seniorTag, juniorTag, frontendTag, backendTag, projectTag, leadTag, agileTag] = await queryInterface.bulkInsert('tags', tagsData, {
      returning: true,
    });

    const resumeTagsData = [
      {
        resume_id: frontendResumeHertanto.id,
        tag_id: engineerTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: frontendResumeHertanto.id,
        tag_id: seniorTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: frontendResumeHertanto.id,
        tag_id: frontendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: backendResumeHertanto.id,
        tag_id: engineerTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: backendResumeHertanto.id,
        tag_id: juniorTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: backendResumeHertanto.id,
        tag_id: backendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: fullstackResumeHertanto.id,
        tag_id: backendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: fullstackResumeHertanto.id,
        tag_id: frontendTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: techleadResumeHertanto.id,
        tag_id: projectTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: techleadResumeHertanto.id,
        tag_id: leadTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        resume_id: techleadResumeHertanto.id,
        tag_id: agileTag.id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('resume_tags', resumeTagsData);

    const applicationData = [
      {
        user_id: userHertanto.id,
        resume_id: frontendResumeHertanto.id,
        role: 'Frontend Engineer',
        company: 'Google',
        date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: frontendResumeHertanto.id,
        role: 'Software Engineer',
        company: 'Stripe',
        date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: frontendResumeHertanto.id,
        role: 'Software Engineer',
        company: 'Microsoft',
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: backendResumeHertanto.id,
        role: 'Software Engineer',
        company: 'Grab',
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: backendResumeHertanto.id,
        role: 'Backend Engineer',
        company: 'ZenDesk',
        date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: backendResumeHertanto.id,
        role: 'Backend Engineer',
        company: 'Netflix',
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: fullstackResumeHertanto.id,
        role: 'Backend Engineer',
        company: 'Binance',
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: fullstackResumeHertanto.id,
        role: 'Software Engineer',
        company: 'Coinbase',
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: techleadResumeHertanto.id,
        role: 'Software Engineer',
        company: 'Traveloka',
        date: new Date(new Date().setDate(new Date().getDate() - 3)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: techleadResumeHertanto.id,
        role: 'Software Engineer',
        company: 'Facebook',
        date: new Date(new Date().setDate(new Date().getDate() - 4)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: techleadResumeHertanto.id,
        role: 'Tech Lead',
        company: 'Apple',
        date: new Date(new Date().setDate(new Date().getDate() - 6)),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: userHertanto.id,
        resume_id: techleadResumeHertanto.id,
        role: 'Team Lead',
        company: 'Robinhood',
        date: new Date(new Date().setDate(new Date().getDate() - 4)),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('applications', applicationData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('applications', null, {});
    await queryInterface.bulkDelete('resume_tags', null, {});
    await queryInterface.bulkDelete('tags', null, {});
    await queryInterface.bulkDelete('resumes', null, {});
    await queryInterface.bulkDelete('templates', null, {});
    await queryInterface.bulkDelete('work-experiences', null, {});
    await queryInterface.bulkDelete('education', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
