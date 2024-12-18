'use client'
import projectCards from '@/constants/cards/project'
import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import CardClient from '../../card'

const selectTheme = createStructuredSelector(
  {
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function ProjectPageContentSectionClient() {
  const {
    textTheme
  } = useSelector(selectTheme)

  return <>
    <section>
      <div className={stringUtility.merge([
        'container-layout feature-py section-px text-center'
      ])}>
        <h1 className={stringUtility.merge([
          'text-5xl lg:text-6xl transition-font-size',
          `${textTheme.secondaryColor} font-bold`
        ])}>Projects
        </h1>
        <p className={`lg:text-lg mt-6 ${textTheme.secondaryColor600}`}>
          A collection of personal and academic projects showcasing my skills in
          software development, data analysis, and problem-solving. Each project
          reflects my dedication to learning, creativity, and applying technical
          knowledge to real-world scenarios.
        </p>
      </div>
    </section>
    <section>
      <div className={stringUtility.merge([
        'container-layout section-pt section-px section-gap grid-3-columns'
      ])}>
        {projectCards.map((_projectCard, _index) => {
          return (
            <CardClient
              key={_index}
              link={_projectCard.link}
              backgroundImageClass={_projectCard.backgroundImageClass}
              date={_projectCard.createdDate}
              tags={_projectCard.tags}
              title={_projectCard.title}
              description={_projectCard.description} />
          )
        })}
      </div>
    </section>
  </>
}
