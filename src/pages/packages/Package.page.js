import React from "react";

import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as NPMIcon} from "../../image/footer/npm.svg";

import {PackageTitle, PackageDescription, Package, TryOnline, Links} from './Package.style';
import {Wrapper, PageTitle} from '../../components/common.style.js';
function PackagePage() {

  const packages = [
    {
      name: 'timetable-f',
      description: 'Convert text into timetable',
      npm_link: 'https://www.npmjs.com/package/timetable-f',
      git_link: 'https://github.com/SVladikO/timetable-f',
      try_online_link: '/timetable-f'
    }
  ]

  return (
    <Wrapper>
       <PageTitle>Own packages</PageTitle>

      {packages.map(p =>
        <Package key={p.name}>
            <PackageTitle>
               <a href={p.npm_link} target='_blank' rel="noreferrer">{p.name}</a>
            </PackageTitle>
            <PackageDescription>{p.description}</PackageDescription>
            <Links>
              <a href={p.npm_link} target='_blank' rel="noreferrer"><NPMIcon height={20}/></a><br/>
              <a href={p.git_link} target='_blank' rel="noreferrer"><GithubIcon height={20}/></a>
              {
                p.try_online_link
                  ? <TryOnline href={p.try_online_link}>(Try Online)</TryOnline>
                  : ''
              }
            </Links>

        </Package>)
        }
        </Wrapper>
        )
      }

      export default PackagePage;