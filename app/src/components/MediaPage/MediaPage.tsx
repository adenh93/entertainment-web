import Head from 'next/head'
import { MediaPageSettings } from '@/graphql/codegen/graphql'
import { SectionMediaListCurated } from '@/components/Sections'

export interface MediaPageProps {
  pageSettings?: MediaPageSettings | null
}

export default function MediaPage({ pageSettings }: MediaPageProps) {
  return (
    <>
      <Head>
        <title>{pageSettings?.title}</title>
      </Head>
      {pageSettings?.mediaSections?.map((section) => {
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
