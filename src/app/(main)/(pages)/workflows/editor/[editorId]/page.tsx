import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'
import { ConnectionsProvider } from '@/providers/connection-providers'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  )
}

export default Page
