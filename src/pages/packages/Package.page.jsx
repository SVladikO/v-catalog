import React from "react";

import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as NPMIcon} from "../../image/footer/npm.svg";
import Flex from '../../components/Flex/Flex.component';
import {Wrapper, Package, PackageTitle, TryOnline, Links} from './Package.style';

function PackagePage() {

  const packages = [
    {
      name: 'timetable-f',
      description: 'Convert text into timetable',
      npm_link: 'https://www.npmjs.com/package/timetable-f',
      git_link: 'https://github.com/SVladikO/timetable-f',
      try_online_link: '/timetable-f'
    },
    {
      name: 'timetable-f',
      description: 'Package to create timetablels',
      npm_link: 'https://www.npmjs.com/package/timetable-f',
      git_link: 'https://github.com/SVladikO/timetable-f',
      try_online_link: '/timetable-f'
    }
  ]

  return (
    <Wrapper>
      {packages.map(p =>
        <Package key={p.name}>
            <PackageTitle>{p.name}</PackageTitle>
            <div>{p.description}</div>
            <Links>
              <a href={p.npm_link} target='_blank'><NPMIcon height={20}/></a><br/>
              <a href={p.git_link} target='_blank'><GithubIcon height={20}/></a>
              {
                p.try_online_link
                  ? <TryOnline href={p.try_online_link}  target='_blank'>(Try Online)</TryOnline>
                  : ''
              }
            </Links>

        </Package>)
        }
        </Wrapper>
        )
      }

      export default PackagePage;