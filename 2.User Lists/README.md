# Angular: User Lists

## Overview
Create an **Angular User Lists App** that allows users to manage two separate lists: Books and Songs. The app consists of two main components: 

1. **DataForm Component**: A form to input and add new items (Books or Songs) to their respective lists.
2. **DataList Component**: A reusable table component to render and manage the lists of Books and Songs.

## Functionalities

### General Features:
1. All input fields should initialize as empty.
2. Users can add an item as either a Book or a Song via a single form.
3. The item structure is defined in the file `src/types/Item.ts`:
    ```typescript
    interface Item {
      name: string;
      genre: string;
      creator: string;
      type: string;
      totalTime?: number;
    }
    ```

### DataForm Component:
- Fields:
  - `name` (required, text)
  - `genre` (required, text)
  - `creator` (required, text)
  - `type` (required, radio button: Book or Song)
  - `totalTime` (required if the type is Song, number)
- Behavior:
  - **Book Selection**: When "Book" is selected as the type, the `totalTime` field is hidden.
  - **Song Selection**: When "Song" is selected as the type, the `totalTime` field is shown.
  - Upon clicking the "Add" button:
    - The new item is added to the appropriate list (Books or Songs).
    - All input fields are cleared.

### DataList Component:
- Renders a table displaying items in the list.
- Features:
  - **Book List Table**:
    - Columns: Name, Genre, Creator, Actions (Delete button)
    - Data attribute: `data-test-id="book-table"`
  - **Song List Table**:
    - Columns: Name, Genre, Creator, Time (totalTime), Actions (Delete button)
    - Data attribute: `data-test-id="song-table"`
  - Each table row includes:
    - `data-test-id="list-item-<index>"` for individual rows.
    - Delete button functionality: Clicking the button removes the item from the list.

## Data-Test-Id Attributes
The following attributes are required for the app to pass tests:

### DataForm Component:
- Input field for `name`: `data-test-id="app-input-name"`
- Input field for `genre`: `data-test-id="app-input-genre"`
- Input field for `creator`: `data-test-id="app-input-creator"`
- Input field for `totalTime`: `data-test-id="app-input-time"`
- Radio button for type `Book`: `data-test-id="app-input-book-type"`
- Radio button for type `Song`: `data-test-id="app-input-song-type"`
- Add button: `data-test-id="add-button"`

### DataList Component:
- Book table: `data-test-id="book-table"`
- Song table: `data-test-id="song-table"`
- Any name cell: `data-test-id="item-name"`
- Any creator cell: `data-test-id="item-creator"`
- Any total time cell: `data-test-id="item-time"`
- Any delete button cell: `data-test-id="item-delete"`

## Behavior and Example
1. **Adding Items**:
   - A Book added with `name: "Book1", genre: "Fiction", creator: "Author1"` will appear in the book list table.
   - A Song added with `name: "Song1", genre: "Pop", creator: "Singer1", totalTime: 3.5` will appear in the song list table.
   
2. **Deleting Items**:
   - Clicking the delete button removes the item from the respective list.

3. **Tables**:
   - Example Book table row:
     ```html
     <tr>
       <td data-test-id="item-name">Book1</td>
       <td data-test-id="item-genre">Fiction</td>
       <td data-test-id="item-creator">Author1</td>
       <td><button data-test-id="item-delete">Delete</button></td>
     </tr>
     ```
   - Example Song table row:
     ```html
     <tr>
       <td data-test-id="item-name">Song1</td>
       <td data-test-id="item-genre">Pop</td>
       <td data-test-id="item-creator">Singer1</td>
       <td data-test-id="item-time">3.5</td>
       <td><button data-test-id="item-delete">Delete</button></td>
     </tr>
     ```

## Notes
- The data-test-id attributes are critical for functionality and testing.
- Ensure the inputs are validated and reset upon submission.
- Use reusable components to maintain clean and modular code.
