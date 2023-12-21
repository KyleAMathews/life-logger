import 'remirror/styles/all.css'

import React from 'react'
import { AnnotationExtension, PlaceholderExtension } from 'remirror/extensions'
import { YjsExtension } from '../remirror-yjs'
import { Remirror, ThemeProvider, useRemirror } from '@remirror/react'
import './editor.css'

const Editor = ({ provider, xmlType }): JSX.Element => {
  const { manager } = useRemirror({
    extensions: [
      new PlaceholderExtension({
        placeholder: `Open second tab and start to type...`,
      }),
      new YjsExtension({ provider, xmlType }),
    ],
    core: { excludeExtensions: [`history`] },
  })

  return (
    <ThemeProvider>
      <Remirror manager={manager} autoFocus autoRender="end"></Remirror>
    </ThemeProvider>
  )
}

export default Editor
