# React Hooks experimental repo

## Folders
- useState
- useEffect
- useContext, old-style Context-Consumer
- useReducer, useEffect, useState, useContext
- useCallback, memo(Component)
- useMemo
- useRef
- custom hooks: counter, form

## Notes
- useMemo vs. useCallback
    - useMemo calls the function and returns its result/value (if you want to use the result). The value will be cached and recomputed only if the dependencies change.
    - While useCallback returns the function without calling it (reference equality is important for child rerender; if you want to use function as callback). The function will be cached.
- memo vs. PureComponent
    - memo checks for prop changes for rerender, PureComponent implements shouldComponentUpdate
- useRef
    - Stores immutable data between renders
