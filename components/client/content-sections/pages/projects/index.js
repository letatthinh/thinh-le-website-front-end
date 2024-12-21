'use client'
import projectConstant from '@/constants/project'
import stringUtility from '@/utilities/string'
import CardClient from '../../../card'

export default function ProjectPageContentSectionClient() {
  return <section>
    <div className={stringUtility.merge([
      'container-layout section-pt section-px section-gap grid-3-columns'
    ])}>
      {projectConstant.allProjects.map((_projectCard, _index) => {
        return (
          <CardClient
            key={_index}
            link={_projectCard.path}
            backgroundImageClass={_projectCard.backgroundImageClass}
            date={_projectCard.dateCreated}
            tags={_projectCard.tags}
            title={_projectCard.title}
            description={_projectCard.description} />
        )
      })}
    </div>
  </section>
}
