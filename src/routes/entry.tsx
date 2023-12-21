import * as Y from 'yjs'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { MonacoBinding } from 'y-monaco'
import * as monaco from 'monaco-editor'
import { awareness, rootDoc } from '../doc-factory'
import { entries } from '../doc-factory'
import { subtext } from './entry.css'
import * as Components from '../styles/base-components'
import { fontStyles } from '../styles/typography.css'

function LogEntryBase(props) {
  const { entryId } = useParams()
  // const { entry } = useLoaderData()
  console.log({ entryId })
  const entry = entries.get(entryId)
  console.log(entry.toJSON())
  const [, setRender] = useState()
  const config = useRef<undefined>(undefined)

  useEffect(() => {
    function entryObserve(event) {
      console.log({ event })
      setRender(Math.random())
    }
    entry.observeDeep(entryObserve)

    const editor = monaco.editor.create(
      document.getElementById(`body-editor`),
      {
        value: ``, // MonacoBinding overwrites this value with the content of type
        defaultLanguage: `markdown`,
        codeLens: false,
        fontSize: 16,
        lineHeight: 32,
        lineNumbers: `off`,
        padding: {
          top: 30,
          bottom: 30,
        },
        selectionHighlight: false,
        wordWrap: `on`,
        folding: false,
        fontFamily: `InterVariable`,
        hideCursorInOverviewRuler: true,
        glyphMargin: false,
        lightbulb: { enabled: false },
        lineDecorationsWidth: 20,
        minimap: { enabled: false },
        renderLineHighlight: `none`,
        roundedSelection: true,
        scrollbar: {
          alwaysConsumeMouseWheel: false,
          horizontal: `hidden`,
          vertical: `hidden`,
          useShadows: false,
          verticalHasArrows: false,
          verticalScrollbarSize: 0,
        },
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        snippetSuggestions: `none`,
        suggest: {
          showIcons: false,
        },
        tabCompletion: `off`,
        tabSize: 2,
        wordBasedSuggestions: false,
        wrappingStrategy: `advanced`,
      },
    )

    // Bind Yjs to the editor model
    const monacoBinding = new MonacoBinding(
      entry.get(`body`),
      editor.getModel(),
      new Set([editor]),
      awareness,
    )

    return () => {
      // webRTCProvider?.disconnect()
      // webRTCProvider?.destroy()
      // doc?.destroy()
      entry.unobserveDeep(entryObserve)
      monacoBinding.destroy()
      editor.dispose()
    }
  }, [entry])

  React.useEffect(() => {
    awareness.setLocalState({
      name: Math.random(),
    })
  }, [])

  console.log({
    awareness,
    states: awareness.getStates(),
    localState: awareness.getLocalState(),
  })

  // <button
  // onClick={() => {
  // setRootDirectory(true)
  // }}
  // >
  // Select folder
  // </button>
  return (
    <div className="LogEntry">
      <Components.H1>{entry.get(`type`)}</Components.H1>
      <Components.Text>
        {new Date(entry.get(`created_at`)).toLocaleDateString()}
        {` `}
        {new Date(entry.get(`created_at`)).toLocaleTimeString()}
      </Components.Text>

      <Components.H2>Description</Components.H2>
      <div id="body-editor" />
    </div>
  )
}

export default LogEntryBase
