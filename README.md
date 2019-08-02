# Forms and Tables for Fantastic Creatures

Taking a look at how to strip data from forms and then add that data to an HTML table.

## Goals

Our overall goal is to have a form that takes in information about new **Fantastic Creatures** and adds that information to a table for the user to be able to see all **Fantastic Creatures** that we have listed. There is also an initial list of creature that we can display to the user immediately when the page is loaded.

1. Render the provided list of creatures to the page.
1. When a user clicks the **Add Fantastic Creature** button add a new creature to the table.
1. Make a way to remove a specific creature from the table.

## Creating a Table

First let's scaffold in a table without any thought for the data. Every table has a head, body, and footer. Their corresponding tags are `<thead>`, `<tbody>`, and `<tfoot>`. within each of these tags our data structure has to fit within a row and column structure.

```HTML
<table>
    <thead>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>
```

Now is a good time to look our data structure and find out what our table should look like. A single creature object has four properties; `name`, `magicAbility`, `dangerLevel`, & `color`. In this case we're looking at needing a column to represent each of these data properties. Let's start by creating the column headers in our `index.html` file for each of these properties with human readable text.

```HTML
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Magic Ability</th>
            <th>Danger Level</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>
```

Without adding the data with JS how about we just stub in a single row and the footer to see how the table looks and what table structure does with the content.

```HTML
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Magic Ability</th>
            <th>Danger Level</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> -- </td>
            <td> -- </td>
            <td> -- </td>
            <td> -- </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Gaze upon the creatures in awe!</td>
        </tr>
    </tfoot>
</table>
```
