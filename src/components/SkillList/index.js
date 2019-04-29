import React from 'react';
import { Grid, GridCol } from '../';
import { useStaticQuery, graphql } from "gatsby";

const SkillList = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            skills {
              label
              contents
            }
          }
        }
      }
    `
  );
  return (
    <Grid>
      <GridCol className='col-6 col-sm-12'>
        <dl>
          { site.siteMetadata.skills.splice(0,3).map(skill => (
            <React.Fragment key={skill.label}>
              <dt><strong>{skill.label}</strong></dt>
              <dd>{skill.contents}</dd>
            </React.Fragment>
            )
          )}
        </dl>
      </GridCol>
      <GridCol className='col-6 col-sm-12'>
        <dl>
          { site.siteMetadata.skills.map(skill => (
              <React.Fragment key={skill.label}>
                <dt><strong>{skill.label}</strong></dt>
                <dd>{skill.contents}</dd>
              </React.Fragment>
            )
          )}
        </dl>
      </GridCol>
    </Grid>
  );
}

export default SkillList;
