# OP-Frontend-WS

This workshop was run 02/06/24 by Christopher Bannon and Nhu Vhu through Open Project 

https://openprojectberkeley.com/


# Directions

1. Clone the repository

2. cd into `OP-Frontend-WS`

3. run `yarn` or `npm i`

4. run `yarn dev` or `npm run dev`

5. Read through the code to understand a bit about the React project. The major changes will mostly be made in `ShoppingList.jsx`

# Tasks

1. First, hook up the "Add item" button so it adds a new section to the shopping list. How do we make something happen to a button when it is clicked? How do we keep track of
what the user is typing --> how do we listen for this change in input?

2. Render this list of items. Look into the `map` function. It might be nice to use Flexbox to arrange the information in a row, but up to you!

3. Then, try adding another "price" field that you can also add to the shopping list item. You'll need to add a new <input> element and make sure that information tracked by the state.

4. Add (or toggle) the ".highlight" class to a shopping list item when it is clicked.

5. Add a description for each item. Look in `Description.jsx` for more direction.

6. For each item, add a button that will remove the item (itself) from the shopping list.

# Credits

Most of this was taken from Tim's CS160 SP24 Week2 Activity and changed to fit a React context. Thank you TIm & CS160!

https://160.tja.io/sp2024/week2/
