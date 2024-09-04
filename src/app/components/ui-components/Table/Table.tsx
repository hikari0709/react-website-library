'use client';
import { type FC, type PropsWithChildren, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ScrollHint from 'scroll-hint'
/**
 * 変化する部分はpropsにして渡したい
 * ・列の幅も指定したいときもある
 * ・横スクロールの有無
 * ・colspanやrowspanも操作できるようにしたい、1行の単位をobjectで管理した方が良さそう
 */

/**
 * 
 import { type FC, type PropsWithChildren, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import ScrollHint from 'scroll-hint'

const useScrollHint = (selector: string) => {
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView)
      new ScrollHint(selector, {
        scrollHintClass: 'isolate',
        scrollHintIconWrapClass: 'scroll-hint-icon-wrap z-30',
        i18n: {
          scrollable: 'スクロールできます',
        },
      })
  }, [selector, inView])
  return { ref }
}

export const Table: FC<PropsWithChildren> = ({ children }) => {
  const { ref } = useScrollHint('.js-scrollable')

  return (
    <div className="js-scrollable overflow-x-scroll" ref={ref}>
      <table className="min-w-full">{children}</table>
    </div>
  )
}
 */

const useScrollHint = (selector: string) => {
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView)
      new ScrollHint(selector, {
        scrollHintIconAppendClass: 'scroll-hint-icon-white', // white-icon will appear
        applyToParents: true,
        i18n: {
          scrollable: 'スクロールできます'
        }
      });
  }, [selector, inView])
  return { ref }
}

export const Table = () => {
  const { ref } = useScrollHint('.js-scrollable')
  return (
    <div className="js-scrollable overflow-x-scroll" ref={ref}>
      <table className="min-w-full">
          <thead>
            <tr>
              <th className="border min-w-36">Col1</th>
              <th className="border min-w-36">Col2</th>
              <th className="border min-w-36">Col3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border min-w-36">Lorem ipsum dolor sit.</td>
              <td className="border min-w-36">Lorem ipsum dolor sit.</td>
              <td className="border min-w-36">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, magnam.</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};
