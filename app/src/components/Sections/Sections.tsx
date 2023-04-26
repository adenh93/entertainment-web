import { MediaPageSettings } from '@/graphql/codegen/graphql'
import SectionMediaListCurated from './SectionMediaListCurated'

export interface SectionsProps {
  sections?: MediaPageSettings['mediaSections']
}

// TODO: Lazy load section components with appropriate fallback UI
export default function Sections({ sections }: SectionsProps) {
  return (
    <>
      {sections?.map((section) => {
        switch (section?.__typename) {
          case 'MediaListCurated':
            return <SectionMediaListCurated section={section} />
          default:
            return <></>
        }
      })}
    </>
  )
}
