# How to create context and use it??

- ### **Create context**

  In a file called ThemeContext we create the context and prepere provider to wrap its children

  ```
    export const ThemeContext = createContext(defaultValue)
  ```

  ```
  export const ThemeContextProvider =({children}:  ThemeContextProviderProps)    => {
    return (
      <ThemeContext.Provider value={theme}>
        {children}
      </Themecontext.Provider>
    )
  }
  ```

  as for typescript types for the provider component we can do as follow:

  ```
  type ThemeContextProviderProps = {
    children: React.ReactNode;
  }
  ```

  and pass this type to the provider component.

- ### **Use context in the element**

  import ThemeContext in the file needed to use in then pass it as a parameter to useContext hook

  ```
    const theme = useContext(ThemeContext)
  ```

  then we can use theme inside the component easily.

- ### **Use context provider in the app file**

  in the app file we import the component we just use theme inside and wrap it using ThemeContextProvider after importing it as well.
