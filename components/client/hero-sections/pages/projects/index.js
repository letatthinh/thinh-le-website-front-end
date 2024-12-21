'use client'
import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function ProjectsPageHeroSectionClient() {
  const {
    textTheme
  } = useSelector(selectTheme)

  return <section>
    <div className={stringUtility.merge([
      'container-layout feature-py section-px text-center'
    ])}>
      <p className={`text-normal content-mt ${textTheme.secondaryColor600}`}>
        A collection of personal and academic projects showcasing my skills in
        software development, data analysis, and problem-solving. Each project
        reflects my dedication to learning, creativity, and applying technical
        knowledge to real-world scenarios.
      </p>
    </div>
  </section>
}
