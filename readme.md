# React Hooks experimental repo

## Folders
- useState
- useEffect
- useContext, old-style Context-Consumer
- useReducer, useEffect, useState, useContext
- useCallback, memo(Component)
- useMemo

ref
custom

## Notes
- useMemo vs. useCallback
    - useMemo calls the function and returns its result (if you want to use the result) while useCallback returns the function without calling it (reference equality is important for child rerender; if you want to use function as callback)
- memo vs. PureComponent
    - memo checks for prop changes for rerender, PureComponent implements shouldComponentUpdate
