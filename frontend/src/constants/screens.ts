/**
 * @typedef {'2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'} Breakpoint
 * @typedef {Exclude<Breakpoint, 'xs'>} RealBreakpoint
 * @typedef {{ name: string, styles: { width: string, height: string }}} Viewport
 */

/**
 * mapping of breakpoint names to the lower-bound of their screen width range
 */
export const SCREEN_SIZES = Object.freeze(
  ({
    "2xl": 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 340
  })
)

/**
 * the same as SCREEN_SIZES but with the 'xs' breakpoint added for use in JS.
 */
export const ALL_SCREEN_SIZES = Object.freeze(
  { ...SCREEN_SIZES, xs: 0 }
)

/**
 * mapping of breakpoint names to the lower-bound of their screen width range,
 * with the 'px' suffix attached; This is used by Tailwind.
 */
export const SCREENS = (
  Object.fromEntries(
    Object.entries(SCREEN_SIZES)
      .map(([key, val]) => [key, `${val}px`])
      .reverse()
  )
)

/**
 * mapping of breakpoint names to viewport specifications; This is used by
 * the viewports plugin of Storybook.
 */
export const VIEWPORTS = (
  Object.fromEntries(
    (Object.entries(SCREEN_SIZES))
      .concat([["xs", 340]])
      .map(([key, val]) => [
        key,
        {
          name: `${key} (${val}px)`,
          styles: { width: `${val}px`, height: "768px" },
        },
      ])
  )
)


export default {
  ALL_SCREEN_SIZES,
  SCREEN_SIZES,
  SCREENS,
  VIEWPORTS,
} as const //as discussed removed /**@type {const} */() 
