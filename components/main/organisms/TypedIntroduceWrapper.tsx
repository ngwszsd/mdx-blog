'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedIntroduceWrapper() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'Save time for the characters and stories that truly matter.',
        'From React & Next.js & Rsbuild to Node.js.',
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 3000,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="min-h-42 py-10">
      <span
        className="text-lg leading-7 italic text-gray-700 dark:text-gray-100"
        ref={typedRef}
      ></span>
    </div>
  )
}
